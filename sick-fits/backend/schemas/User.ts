<<<<<<< HEAD
import { text, password, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import "dotenv/config";

export const User = list({
  //access:
  //UI
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    //Todo add roles, cart and orders
  },
});
=======
import { text, password, relationship } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import "dotenv/config";

export const User = list({
  //access:
  //UI
  fields: {
    name: text({ isRequired: true }),
    email: text({ isRequired: true, isUnique: true }),
    password: password(),
    //Todo add roles, cart and orders
  },
});
>>>>>>> cb80dae16e7a8c280e86e3ac4d3e7afd16de5632
