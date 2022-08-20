/**
 * @format
 */

import React from 'react';

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

// Persistance
import {PersistGate} from 'redux-persist/integration/react';

import App from './App';
import {name as appName} from './app.json';
import {store, persistor} from './src/app/store';

AppRegistry.registerComponent(appName, () => () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
));
