import React, {memo, useState} from 'react';
import LoginView from '../View';

type LoginViewControllerType = {
  viewModel: {
    login: (value: {username: string; password: string}) => void;
  };
};

const LoginViewController = ({viewModel}: LoginViewControllerType) => {
  const [email, onChangeEmail] = useState('batman@test.com');
  const [password, onChangePassword] = useState('12345678');

  const onLogin = () => {
    viewModel.login({
      username: email,
      password,
    });
  };

  return (
    <LoginView
      {...{
        email,
        password,
        onChangeEmail,
        onChangePassword,
        onLogin: onLogin,
      }}
    />
  );
};

export default memo(LoginViewController);
