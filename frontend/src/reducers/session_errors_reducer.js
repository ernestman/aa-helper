import {
    SESSION_ERRORS,
    CUSTOM_SESSION_ERRORS,
    CLEAR_SESSION_ERRORS
} from "../actions/session_actions";

const sessionErrorsReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case SESSION_ERRORS:
            return action.errors.response.data
        case CUSTOM_SESSION_ERRORS:
            return action.errors
        case CLEAR_SESSION_ERRORS:
            return {}
        default:
            return state;
    }
    
}

export default sessionErrorsReducer;