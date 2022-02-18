import {
  LoginRequest,
  LogoutRequest,
  ProfileRequest,
  RefreshTokenRequest,
} from '@app/types/account/api';
import ApiClient from '../client';

export const login = ({...config}: LoginRequest) => {
  const url = 'login';
  return ApiClient({
    ...config,
    url,
    method: 'POST',
  });
};

export const logout = ({...config}: LogoutRequest) => {
  return ApiClient({
    ...config,
    method: 'POST',
  });
};

export const refreshToken = ({...config}: RefreshTokenRequest) => {
  return ApiClient({
    ...config,
    method: 'POST',
  });
};

export const profile = ({...config}: ProfileRequest) => {
  const url = 'profile';
  return ApiClient({
    ...config,
    url,
    method: 'GET',
  });
};
