import {UserToken} from '@app/types/account';

const saveUser = (tokenData: UserToken) => {
  return {
    type: 'account/saveUser',
    payload: tokenData,
  };
};

export {saveUser};
