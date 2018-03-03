/**
 * Root Reducer
 * Imported in configureStore.js
 */

import { combineReducers } from 'redux';
import imageDataReducer from './imageDataReducer';
import eventReducer from './eventReducer';

// primary root reducer
const rootReducer = combineReducers({
    image: imageDataReducer,
    events: eventReducer,
});

export default rootReducer;