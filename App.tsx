import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from '@appState';

import Root from './src';
import {makeServer} from 'react-mock-lib';

if (process.env.NODE_ENV === 'development') {
  if (window?.server) {
    window.server.shutdown();
  }
  window.server = makeServer();
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Root />
      </PersistGate>
    </Provider>
  );
};

export default App;
