import { createAuth } from "@keystone-next/auth";
import { config, createSchema } from "@keystone-next/keystone/schema";
import "dotenv/config";
import "dotenv";
import { User } from "./schemas/User";
import { Product } from "./schemas/Product";
import {
  withItemData,
  statelessSessions,
} from "@keystone-next/keystone/session";
import { ProductImage } from "./schemas/ProductImage";

const databaseURL =
  process.env.DATABASE_URL ||
  "mongodb+srv://samtoohey:qLEz77VUxOpKaGqf@cluster0.qlcip.mongodb.net";

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // How long should they stay signed in
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
    //Todo add in initial roles here
  },
});

export default withAuth(
  config({
    //@ts-ignore
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: "mongoose",
      url: databaseURL,
      //TODO: Add Data seeding here
    },
    lists: createSchema({
      //Schema items go here
      User,
      Product,
      ProductImage,
    }),
    ui: {
      //Show UI for users that pass this test
      isAccessAllowed: ({ session }) => {
        console.log(session);
        return !!session?.data;
      },
    },

    session: withItemData(statelessSessions(sessionConfig), {
      //GraphQL query
      User: "id",
    }),
  })
);
