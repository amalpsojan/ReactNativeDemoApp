import BaseModel from '../BaseModel';
import {Authentication} from '@appServices';
import {LoginArgs} from '@appTypes/account/api';

class AuthModel extends BaseModel {
  login = (args: LoginArgs): void => {
    Authentication.Basic.login({
      args,
    });
  };

  logout = (): void => {
    Authentication.Basic.logout();
  };
}

export default AuthModel;
