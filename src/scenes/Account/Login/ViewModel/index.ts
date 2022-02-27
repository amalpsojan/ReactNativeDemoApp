import {LoginArgs} from '@appTypes/account/api';
import LoginModel from '../Model';

class LoginViewModel {
  model: LoginModel;

  constructor() {
    this.model = new LoginModel();
  }

  login = (args: LoginArgs): void => {
    this.model.login(args);
  };
}

export default LoginViewModel;
