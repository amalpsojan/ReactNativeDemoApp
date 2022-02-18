import {User} from './models';

export type RegisterUser = User & {
  password: string;
};
