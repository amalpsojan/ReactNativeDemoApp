type UserToken = string;

type User = {
  id: string;
  name: string;
  username: string;
};

type CreateUser = User & {
  password: string;
  token: string;
};

type Users = {
  people: User[];
};

type LoginRequest = {
  username: string;
  password: string;
};

type LoginRequestError = {
  username: string;
  password: string;
  message: string;
};

type LoginRequestResponse = {
  token: UserToken;
};

export {
  LoginRequest,
  LoginRequestError,
  LoginRequestResponse,
  UserToken,
  User,
  Users,
  CreateUser,
};
