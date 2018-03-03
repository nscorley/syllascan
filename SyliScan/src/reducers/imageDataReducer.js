/**
 * Reducer for information about the image, either taken or uploaded
 */

import { UPDATE_URI, UPDATE_TEXT } from '../constants/actionTypes';

const initialState = {};

/**
 * Reducer for the current screen
 * @param {object} state 
 * @param {int} action 
 */
const imageDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_URI: {
            return ({ ...state, uri: action.payload });
        }
        case UPDATE_TEXT: {
            return ({ ...state, text: action.payload});
        }
        default:
            return state;
    }
}

export default imageDataReducer;