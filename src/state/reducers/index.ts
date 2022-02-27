import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

import {ReduxStorage} from '@appServices';

import accountReducer from './account';
import settingsReducer from './settings';

const accountPersistConfig = {
  key: 'account',
  version: 1,
  storage: ReduxStorage,
};

const reducers = combineReducers({
  account: persistReducer(accountPersistConfig, accountReducer),
  settings: settingsReducer,
});

export default reducers;
