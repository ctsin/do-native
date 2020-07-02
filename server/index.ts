import { createServer, Model } from 'miragejs';
import { API } from '../src/constants';
import { User } from '../src/interfaces/user.interface';

/**
 * `ts-ignore` comments for resolving schema type definition defect of MirageJS.
 */

export default () => {
  createServer({
    models: { user: Model },
    routes() {
      // @ts-ignore
      this.get(API, (): User => ({ name: 'God', userId: '1', active: true }));

      this.post(API, (schema, request) => {
        const attrs = JSON.parse(request.requestBody);

        // @ts-ignore
        console.log(schema.checks.all());
        return {};
      });
    },
  });
};
