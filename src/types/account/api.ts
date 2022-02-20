import {RequestConfig, RequestResponse} from '@app/api/client';
import {User, UserToken} from './models';

export type LoginArgs = {
  username: string;
  password: string;
};

export type LoginRequest = RequestConfig & {
  args: LoginArgs;
};

export type LogoutRequest = RequestConfig & {};

export type ProfileRequest = RequestConfig & {};

export type RefreshTokenRequest = RequestConfig & {};

export type RegisterRequest = RequestConfig & {};

export type LoginRequestError = {
  username: string;
  password: string;
  message: string;
};

export type ProfileRequestError = {
  message: string;
};

export type LoginRequestResponse = RequestResponse<
  User & {
    token: UserToken;
  }
>;

export type ProfileRequestResponse = RequestResponse<User>;
