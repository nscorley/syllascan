/**
 * Main entry point 
 * Subsequently renders all other components
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import AppNavigation from './src/navigation';

/** 
 * configureStore() takes the initial state as an argument
 * default initial state is {} (empty object)
 */
const store = configureStore();

const App = () => (
  <Provider store={store}>
    <AppNavigation />
  </Provider>
)

export default App;