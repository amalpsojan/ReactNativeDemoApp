import {User, UserToken} from './models';

export type AccountState = {
  account: User & {token: UserToken};
};
