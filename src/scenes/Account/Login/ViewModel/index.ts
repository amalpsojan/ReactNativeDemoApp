import {LoginArgs} from '@appTypes/account/api';
import LoginModel from '../Model';

const LoginViewModel = () => {
  const model = new LoginModel();

  const login = (args: LoginArgs): void => {
    model.login(args);
  };

  return {login};
};

export default LoginViewModel;
