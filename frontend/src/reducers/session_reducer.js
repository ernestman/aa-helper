import {SESSION_CREATED, SESSION_DELETED, LOAD_USER} from "../actions/session_actions";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
}

const sessionReducer = (state=initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case SESSION_CREATED:
            localStorage.setItem("token", action.payload.data.token);
            nextState["token"] = localStorage.getItem("token");
            nextState["isAuthenticated"] = true;
            return nextState;
        case LOAD_USER:
            nextState["token"] = localStorage.getItem("token");
            nextState["isAuthenticated"] = true;
            return nextState;
        case SESSION_DELETED:
            localStorage.removeItem("token");
            nextState["token"] = localStorage.getItem("token");
            nextState["isAuthenticated"] = false;
            return nextState;
        default:
            return state;
    }
}

export default sessionReducer;