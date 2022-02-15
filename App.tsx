import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from '@app/state';

import Root from './src';
import {makeServer} from '@app/mock';

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
