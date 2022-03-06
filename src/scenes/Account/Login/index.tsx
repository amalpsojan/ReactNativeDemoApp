import React, {memo} from 'react';
import LoginView from './View';
import useViewModel from './ViewModel';

const Login = () => {
  const viewModel = useViewModel();

  return <LoginView viewModel={viewModel} />;
};

export default memo(Login);
