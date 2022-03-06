import {User as _User, UserToken} from '@appTypes/account/models';
import {useSelector} from 'react-redux';
import {Authentication} from '@appServices';
import {LoginRequestArgs} from '@appTypes/account/api/authentication';
import {AccountSelector} from '@appState/selectors';
import {useState} from 'react';

import {LoginError} from '@appTypes/account/api/authentication';

type User = _User & {
  token: UserToken;
};

type UseAuthErrors = {
  login: {
    username: string | null;
    password: string | null;
    message: string | null;
  };
  logout: {
    message: string | null;
  };
  register: {
    message: string | null;
  };
};

type UserAuth = {
  user: User | null;
  login: (value: {username: string; password: string}) => void;
  register: () => void;
  logout: () => void;
  errors: UseAuthErrors;
};

const initialErrors = {
  login: {
    username: '',
    password: '',
    message: '',
  },
  logout: {
    message: '',
  },
  register: {
    message: '',
  },
};

const TransformLoginError = (error: any): LoginError => {
  return {...error.response};
};

const useAuth = (): UserAuth => {
  const [errors, setErrors] = useState(initialErrors);
  const user: User = useSelector(AccountSelector.selectAuthUser);

  const login = (args: LoginRequestArgs): void => {
    Authentication.Basic.login({
      args,
      onError: error => {
        const _error = TransformLoginError(error);
        setErrors({...errors, login: {..._error.data}});
      },
    });
  };

  const register = () => {};

  const logout = (): void => {
    Authentication.Basic.logout();
  };

  return {
    user: user?.id
      ? {
          id: user.id,
          name: user.name,
          username: user.username,
          token: user.token,
        }
      : null,
    login,
    register,
    logout,
    errors,
  };
};

export default useAuth;
