/**
 * Action generating for updating the uploaded image's URI
 */

import { UPDATE_URI, UPDATE_TEXT } from '../constants/actionTypes';

/**
 * Updates the image URI
 * @param {string} uri 
 */
export const updateURI = (uri) => (
    {
        type: UPDATE_URI,
        payload: uri,
    }
);

/**
 * Updates the translated image text (from ocr)
 * @param {string} text 
 */
export const updateText = (text) => (
    {
        type: UPDATE_TEXT,
        payload: text,
    }
);