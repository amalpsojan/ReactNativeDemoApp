import {createServer, Model, Response} from 'miragejs';
import {UserToken} from '../types/account/models';
import {RegisterUser} from '../types/account/api';
import {generateToken} from '../utils';

type CreateUser = RegisterUser & {
  token: UserToken;
};

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
        token: generateToken(),
      } as object);
      server.create('user', {
        name: 'Superman',
        username: 'superman@test.com',
        password: '12345678',
        token: generateToken(),
      } as object);
      server.create('user', {
        name: 'Wonder Woman',
        username: 'wonderwoman@test.com',
        password: '12345678',
        token: generateToken(),
      } as object);
    },

    routes() {
      this.post('api/login', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        let errors = {message: '', username: '', password: ''};

        if (!attrs.username || !attrs.password) {
          errors = {
            ...errors,
            username: !attrs.username ? 'username cannot be blank' : '',
            password: !attrs.password ? 'password cannot be blank' : '',
          };

          errors = {
            ...errors,
            message: `${errors.username + ' ' + errors.password}`,
          };

          return new Response(400, {}, {errors});
        }

        const isUserExist = schema.users.findBy({
          username: attrs.username,
          password: attrs.password,
        });

        if (isUserExist) {
          return new Response(
            200,
            {},
            {
              id: isUserExist.id,
              name: isUserExist.name,
              username: isUserExist.username,
              token: isUserExist.token,
            },
          );
        } else {
          errors.message = 'invalid username or password';
          return new Response(401, {}, {errors});
        }
      });

      this.get('api/profile', (schema, request) => {
        let token = '';

        const isExistToken = request.requestHeaders.Authorization;

        if (isExistToken) {
          token = isExistToken.replace('Bearer ', '');
        }

        const isUserExist = isExistToken
          ? schema.users.findBy({
              token,
            })
          : null;

        if (!isExistToken || !token || !isUserExist) {
          return new Response(
            401,
            {},
            {errors: {message: 'Authorization required'}},
          );
        }

        return new Response(
          200,
          {},
          {
            id: isUserExist.id,
            name: isUserExist.name,
            username: isUserExist.username,
          },
        );
      });

      this.post('api/register', (schema, request) => {
        const attrs = JSON.parse(request.requestBody);

        return schema.users.create(attrs);
      });
    },
  });
}

export default makeServer;
