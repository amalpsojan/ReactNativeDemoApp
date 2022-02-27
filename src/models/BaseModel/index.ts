import {User, UserToken} from '@appTypes/account/models';

class BaseModel {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  setUser = (token: UserToken): void => {};

  isUser = (): boolean => {
    return false;
  };

  getProfile = (): User => {
    return {
      id: 10,
      name: '',
      username: '',
    };
  };
}

export default BaseModel;
