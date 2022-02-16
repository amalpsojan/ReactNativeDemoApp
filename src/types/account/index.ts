import {RequestConfig, RequestResponse} from '@app/api/client';

export type UserToken = string;

export type User = {
  id: string;
  name: string;
  username: string;
};

export type RegisterUser = User & {
  password: string;
};

export type Users = {
  people: User[];
};

export type LoginRequest = RequestConfig & {
  args: {
    username: string;
    password: string;
  };
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

export type LoginRequestResponse = RequestResponse<{
  token: UserToken;
}>;

export type ProfileRequestResponse = RequestResponse<User>;
