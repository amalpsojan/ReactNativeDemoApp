import {ReducerAction} from '@appTypes/other';
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
        token: action.payload.token,
        id: action.payload.id,
        name: action.payload.name,
        username: action.payload.username,
      };

    case Account.removeUser:
      return {...initialState};

    default:
      return state;
  }
};

export default accountReducer;
