import {RECEIVE_CURRENT_USER} from "../actions/session_actions";

const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    user: null
}

const sessionReducer = (state=initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            localStorage.setItem("token", action.payload.data.token)
            nextState["token"] = localStorage.getItem("token")
            nextState["isAuthenticated"] = true
            nextState["user"] = action.payload.data.user.id
            return nextState;
        default:
            return state;
    }

}

export default sessionReducer;