import {RequestConfig, RequestResponse} from '@appApi/client';
import {User} from '../models';

export type ProfileRequest = RequestConfig & {};

export type ProfileRequestError = {
  message: string;
};

export type ProfileRequestResponse = RequestResponse<User>;
