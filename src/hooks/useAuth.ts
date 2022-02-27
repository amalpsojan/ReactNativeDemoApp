import {User as _User, UserToken} from '@appTypes/account/models';
import {useSelector} from 'react-redux';
import {Authentication} from '@appServices';
import {LoginArgs} from '@appTypes/account/api';
import {AccountSelector} from '@appState/selectors';

type User = _User & {
  token: UserToken;
};

const useAuth = () => {
  const user: User = useSelector(AccountSelector.selectUser);

  const login = (args: LoginArgs) => {
    Authentication.Basic.login({
      args,
    });
  };

  const register = () => {};

  const logout = () => {};

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
  };
};

export default useAuth;
