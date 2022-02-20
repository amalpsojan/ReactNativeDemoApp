import React, {memo} from 'react';
import LoginViewController from './ViewController';
import LoginViewModel from './ViewModel';

const Login = () => {
  const viewModel = new LoginViewModel();

  return <LoginViewController viewModel={viewModel} />;
};

export default memo(Login);
