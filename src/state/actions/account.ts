import {UserToken} from '@app/types/account/models';
import {Account} from '../types';

export const saveUser = (token: UserToken) => {
  return {
    type: Account.saveUser,
    payload: token,
  };
};

export const removeUser = () => {
  return {
    type: Account.removeUser,
    payload: null,
  };
};
