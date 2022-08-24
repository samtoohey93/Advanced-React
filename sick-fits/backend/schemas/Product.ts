<<<<<<< HEAD
import { relationship, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import "dotenv/config";

export const Product = list({
  //Todo
  //access:
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    photo: relationship({
      ref: "ProductImage.product",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inLineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] },
      },
    }),

    status: select({
      options: [
        { label: "Draft", value: "Draft" },
        { label: "Available", value: "Available" },
        { label: "Unavailable", value: "Unavailable" },
      ],
      defaultValue: "Draft",
      ui: {
        displayMode: "segmented-control",
      },
    }),
  },
});
=======
import { relationship, select, text } from "@keystone-next/fields";
import { list } from "@keystone-next/keystone/schema";
import "dotenv/config";

export const Product = list({
  //Todo
  //access:
  fields: {
    name: text({ isRequired: true }),
    description: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    photo: relationship({
      ref: "ProductImage.product",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inLineCreate: { fields: ["image", "altText"] },
        inlineEdit: { fields: ["image", "altText"] },
      },
    }),

    status: select({
      options: [
        { label: "Draft", value: "Draft" },
        { label: "Available", value: "Available" },
        { label: "Unavailable", value: "Unavailable" },
      ],
      defaultValue: "Draft",
      ui: {
        displayMode: "segmented-control",
      },
    }),
  },
});
>>>>>>> cb80dae16e7a8c280e86e3ac4d3e7afd16de5632
