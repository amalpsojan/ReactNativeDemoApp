import React, {memo} from 'react';
import LoginViewController from './ViewController';
import useViewModel from './ViewModel';

const Login = () => {
  const viewModel = useViewModel();

  return <LoginViewController viewModel={viewModel} />;
};

export default memo(Login);
