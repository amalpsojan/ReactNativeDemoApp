import React, {memo, useState} from 'react';
import LoginUI from './UI';

const Login = () => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

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
