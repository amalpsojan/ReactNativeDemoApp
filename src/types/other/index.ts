type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type WithOptional<T, K extends keyof T> = CustomOmit<T, K> &
  Partial<Pick<T, K>>;

export type ReducerAction = {
  type: string;
  payload: any;
};
