import {Axios} from '@app/services';
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
        onLogin: () => {
          //TODO Remove axios from here
          Axios.post('login', {
            username: email,
            password,
          })
            .then(({data}) => {
              console.log('res', JSON.stringify(data, 0, 50));
            })
            .catch(error => {
              console.log('error', JSON.stringify(error.response.data, 0, 50));
            });
        },
      }}
    />
  );
};

export default memo(Login);
