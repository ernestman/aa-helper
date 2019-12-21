import {LOAD_USER, SESSION_CREATED, SESSION_DELETED} from "../actions/session_actions";

const userReducer = (state={}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case LOAD_USER:
            return action.payload.data;
        case SESSION_CREATED:
            return action.payload.data.user;
        case SESSION_DELETED:
            return {};
        default:
            return state;
    }

}

export default userReducer;