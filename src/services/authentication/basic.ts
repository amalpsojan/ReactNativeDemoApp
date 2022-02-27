import {Account as AccountAPI} from '@appApi';
import {Account} from '@appState/actions';
import {LoginRequest as _LoginRequest} from '@appTypes/account/api';
import {WithOptional} from '@appTypes/other';
import {store} from '@appState';

type LoginRequest = WithOptional<_LoginRequest, 'onSuccess' | 'onError'>;

//default Login actions
const onLoginSuccess = ({data}: any) => {
  store.dispatch(Account.saveUser(data));
};

const onLoginError = () => {};

const login = ({
  onSuccess = onLoginSuccess,
  onError = onLoginError,
  ...config
}: LoginRequest): void => {
  AccountAPI.login({
    ...config,
    onSuccess,
    onError,
  });
};

const logout = () => {
  store.dispatch(Account.removeUser());
};

export default {login, logout};
