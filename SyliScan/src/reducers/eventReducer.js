/**
 * Reducer for event information
 */

import { ADD_EVENT, UPDATE_EVENT, REMOVE_EVENT } from '../constants/actionTypes';

const start = new Date();
const end = new Date();
end.setTime(end.getTime() + 1 * 60 * 60 * 1000);

// empty array of events
const initialState = [];

/**
 * Reducer for the current screen
 * @param {object} state 
 * @param {int} action 
 */
const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENT: {
            const e = action.event;

            // action is of form { type, id, event }
            return [
                ...state, 
                {
                    id: e.id,
                    event: e.event,
                    type: e.type,
                }
            ];
        }
           
        case UPDATE_EVENT: {
             // action is of form { type, id, event }
            return state.map((e) => e.id == action.id ? {...e, event: action.event} : e);
        }
        case REMOVE_EVENT: {
            // action of form { type, id }
            return state.filter((e) => e.id != action.id);
        }
        default:
            return state;
    }
}

export default eventReducer;