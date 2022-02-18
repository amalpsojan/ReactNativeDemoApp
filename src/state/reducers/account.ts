import {ReducerAction} from '@app/types/other';
import {Account} from '../types';

const initialState = {
  id: undefined,
  name: undefined,
  username: undefined,
  token: undefined,
};

const accountReducer = (state = initialState, action: ReducerAction) => {
  switch (action.type) {
    case Account.saveUser:
      return {
        ...state,
        token: action.paylaod.token,
        id: action.paylaod.id,
        name: action.paylaod.name,
        username: action.paylaod.username,
      };

    case Account.removeUser:
      return {...initialState};

    default:
      return state;
  }
};

export default accountReducer;
