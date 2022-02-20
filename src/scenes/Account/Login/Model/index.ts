import {Account} from '@app/api';
import {BaseModel} from '@app/models';
import {LoginArgs} from '@app/types/account/api';

class LoginModel extends BaseModel {
  login = (args: LoginArgs): void => {
    Account.login({
      args,
      onSuccess: ({data: {token = false}}) => {
        if (token) {
          this.saveUser(token);
        }
      },
      onError: error => {
        console.log('login onError', error);
      },
    });
  };

  setLoginError = (): void => {};
}

export default LoginModel;
