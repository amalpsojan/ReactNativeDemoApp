import {LoginRequest, UserToken} from '@app/types/account';

export const login = ({username, password}: LoginRequest) => {
  if (username && password) {
  }
};

export const logout = () => {};

export const refreshToken = (token: UserToken) => {
  if (token) {
  }
};
