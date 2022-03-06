import {useAuth} from '@appHooks';

type LoginViewModelType = {};

const LoginViewModel: LoginViewModelType = () => {
  const {login, errors} = useAuth();

  return {login, errors};
};

export default LoginViewModel;
