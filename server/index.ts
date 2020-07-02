import { createServer, Model } from "miragejs";

/**
 * `ts-ignore` comments for resolving schema type definition defect of MirageJS.
 */

export default () => {
  createServer({
    models: { user: Model },
    routes() {
      // @ts-ignore
      this.get("/check", (schema) => schema.checks.all());

      this.post("/check", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);

        // @ts-ignore
        console.log(schema.checks.all());
        return {};
      });
    },
  });
};
