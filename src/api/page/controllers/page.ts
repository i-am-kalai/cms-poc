/**
 * page controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::page.page",
  ({ strapi }) => ({
    async find(ctx) {
      const result = await super.find(ctx);

      result.meta.date = Date.now();

      return result;
    },
  })
);
