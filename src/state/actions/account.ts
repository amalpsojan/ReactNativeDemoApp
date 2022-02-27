import {User as _User, UserToken} from '@appTypes/account/models';
import {Account} from '../types';

type User = _User & {token: UserToken};

const saveUser = (user: User) => {
  return {
    type: Account.saveUser,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: Account.removeUser,
    payload: null,
  };
};

export default {saveUser, removeUser};
