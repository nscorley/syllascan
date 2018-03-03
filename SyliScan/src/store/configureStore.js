/** 
 * Redux Store Configuration
 * Imported in App.js
 */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = (initialState) => {
    const middleware = applyMiddleware(thunk);
    return createStore(rootReducer, initialState, composeWithDevTools(middleware));
}

export default configureStore;