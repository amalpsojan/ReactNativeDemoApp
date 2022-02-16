import {createServer, Model, Response} from 'miragejs';
import {CreateUser} from '@app/types/account';

declare global {
  interface Window {
    server: any;
  }
}

function makeServer({environment = 'development'} = {}) {
  return createServer({
    environment,

    models: {
      user: Model.extend<Partial<CreateUser>>({}),
    },

    seeds(server) {
      server.create('user', {
        name: 'Batman',
        username: 'batman@test.com',
        password: '12345678',
        token: 'batman@test.com-token',
      } as CreateUser);
      server.create('user', {
        name: 'Superman',
        username: 'superman@test.com',
        password: '12345678',
        token: 'superman@test.com-token',
      } as CreateUser);
      server.create('user', {
        name: 'Wonder Woman',
        username: 'wonderwoman@test.com',
        password: '12345678',
        token: 'wonderwoman@test.com-token',
      } as CreateUser);
    },

    routes() {
      // this.get('/api/users', schema => {
      //   return schema.users.all();
      // });

      this.post('api/login', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        let errors = {message: '', username: '', password: ''};

        if (!attrs.username || !attrs.password) {
          errors.username = !attrs.username ? 'username cannot be blank' : '';
          errors.password = !attrs.password ? 'password cannot be blank' : '';

          return new Response(400, {}, {errors});
        }

        const isExist = schema.users.findBy({
          username: attrs.username,
          password: attrs.password,
        });

        if (isExist) {
          return new Response(200, {}, {token: isExist.token});
        } else {
          errors.message = 'invalid username or password';
          return new Response(401, {}, {errors});
        }
      });

      this.get('mockserver/api/reminders', schema => {
        return schema.reminders.all();
      });

      this.post('mockserver/api/reminders', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);

        return schema.reminders.create(attrs);
      });
    },
  });
}

export default makeServer;
