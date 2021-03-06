import {
    SESSION_ERRORS,
    CUSTOM_SESSION_ERRORS,
    CLEAR_SESSION_ERRORS
} from "../actions/session_actions";

export default (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case SESSION_ERRORS:
            return action.errors
        case CUSTOM_SESSION_ERRORS:
            return action.errors
        case CLEAR_SESSION_ERRORS:
            return {}
        default:
            return state;
    }
    
}