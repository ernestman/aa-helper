import * as SessionUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"

export const receiveCurrentUser = payload => ({
    type: RECEIVE_CURRENT_USER,
    payload: payload
})

export const registerUser = user => dispatch => (
    SessionUtil.register(user)
        .then(
            payload => dispatch(receiveCurrentUser(payload))
        )
)

export const loginUser = user => dispatch => (
    SessionUtil.login(user)
        .then(
            payload => dispatch(receiveCurrentUser(payload))
        )
)