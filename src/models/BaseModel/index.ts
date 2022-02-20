import {UserToken} from '@app/types/account/models';

class BaseModel {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  saveUser = (token: UserToken) => {};
}

export default BaseModel;
