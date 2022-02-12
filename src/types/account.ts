interface UserToken {
  token: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

interface RefreshTokenRequest {
  token: string;
}

export {LoginRequest, RefreshTokenRequest, UserToken};
