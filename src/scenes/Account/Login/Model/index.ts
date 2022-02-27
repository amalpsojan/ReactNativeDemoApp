import {BaseModel} from '@appModels';
import {Authentication} from '@appServices';
import {LoginArgs} from '@appTypes/account/api';

class LoginModel extends BaseModel {
  login = (args: LoginArgs): void => {
    Authentication.Basic.login({
      args,
    });
  };

  setLoginError = (): void => {};
}

export default LoginModel;
