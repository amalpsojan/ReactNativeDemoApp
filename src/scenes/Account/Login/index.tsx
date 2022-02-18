import React, {memo, useState} from 'react';
import LoginUI from './UI';

const Login = () => {
  const [email, onChangeEmail] = useState('batman@test.com');
  const [password, onChangePassword] = useState('12345678');

  return (
    <LoginUI
      {...{
        email,
        password,
        onChangeEmail,
        onChangePassword,
        onLogin: () => {},
      }}
    />
  );
};

export default memo(Login);
