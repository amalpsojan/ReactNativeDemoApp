import {configureStore} from '@reduxjs/toolkit';
import middleware from '../middlewares';
import rootReducer from '../reducers';

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
});

export default store;
