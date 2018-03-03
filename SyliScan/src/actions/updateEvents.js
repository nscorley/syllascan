/**
 * Action generating for events
 */

import { ADD_EVENT, REMOVE_EVENT, UPDATE_EVENT } from '../constants/actionTypes';

/**
 * Adds the event
 * @param {object} event 
 * @param {int} id
 */
export const addEvent = (event, id) => (
    {
        type: ADD_EVENT,
        id,
        event,
    }
);

/**
 * Updates the event
 * @param {object} event
 * @param {int} id
 */
export const updateEvent = (event, id) => (
    {
        type: UPDATE_EVENT,
        id,
        event
    }
);

/**
 * Deletes the event
 * @param {int} id
 */
export const removeEvent = (id) => (
    {
        type: REMOVE_EVENT,
        id,
    }
);