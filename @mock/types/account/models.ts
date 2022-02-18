export type UserToken = string;

export type User = {
  id: number | string;
  name: string;
  username: string;
};

export type Users = {
  people: User[];
};
