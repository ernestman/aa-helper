import {
    SESSION_CREATED,
    SESSION_DELETED
} from "../actions/session_actions";

const userReducer = (state={}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case SESSION_CREATED:
            return action.payload.data.user;
        case SESSION_DELETED:
            return {};
        default:
            return state;
    }
}

export default userReducer;