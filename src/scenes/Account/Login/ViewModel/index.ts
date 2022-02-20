import {LoginArgs} from '@app/types/account/api';
import LoginModel from '../Model';

class LoginViewModel {
  model: LoginModel;

  constructor() {
    this.model = new LoginModel();
  }

  login = (args: LoginArgs): void => {
    if (this.isValidUserName(args.username)) {
      this.model.login(args);
    }
  };

  isValidUserName = (username: string): boolean => {
    //check valid username or not
    return !!username;
  };

  setLoginError = (): void => {
    this.model.setLoginError();
  };
}

export default LoginViewModel;
