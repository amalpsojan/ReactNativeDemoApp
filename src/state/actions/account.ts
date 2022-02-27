import {User as _User, UserToken} from '@appTypes/account/models';
import {Account} from '../types';

type User = _User & {token: UserToken};

const saveUser = (user: User) => {
  return {
    type: Account.SAVE_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: Account.REMOVE_USER,
    payload: null,
  };
};

export default {saveUser, removeUser};
