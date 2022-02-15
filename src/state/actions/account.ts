import {UserToken} from '@app/types/account';

const saveUser = (token: UserToken) => {
  return {
    type: 'account/saveUser',
    payload: token,
  };
};

export {saveUser};
