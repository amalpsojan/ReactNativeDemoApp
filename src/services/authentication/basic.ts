import {Account as AccountAPI} from '@appApi';
import {Account} from '@appState/actions';
import {
  LoginRequest as _LoginRequest,
  // LogoutRequest as _LogoutRequest,
  LoginSuccess,
} from '@appTypes/account/api/authentication';
import {WithOptional} from '@appTypes/other';
import {store} from '@appState';

type LoginRequest = WithOptional<_LoginRequest, 'onSuccess'>;

//default Login actions
const onLoginSuccess = ({data}: LoginSuccess) => {
  store.dispatch(Account.saveUser(data));
};

const login = ({onSuccess = onLoginSuccess, ...config}: LoginRequest): void => {
  AccountAPI.login({
    ...config,
    onSuccess,
  });
};

const logout = () => {
  store.dispatch(Account.removeUser());
};

export default {login, logout};
