import {
    ROUTE_ERRORS,
    CLEAR_ROUTE_ERRORS
} from "../actions/route_actions";

export default (state="", action) => {
    Object.freeze(state);

    switch(action.type) {
        case ROUTE_ERRORS:
            return action.errors
        case CLEAR_ROUTE_ERRORS:
            return ""
        default:
            return state;
    }
}