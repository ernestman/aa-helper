import * as SessionUtil from "../util/session_api_util";

export const SESSION_CREATED = "SESSION_CREATED";
export const LOAD_USER = "LOAD_USER";
export const SESSION_DELETED = "SESSION_DELETED";

export const createSession = payload => ({
    type: SESSION_CREATED,
    payload: payload
})

export const loadUser = payload => ({
    type: LOAD_USER,
    payload: payload
})

export const deleteSession = () => ({
    type: SESSION_DELETED
})




// thunk action creators
export const registerUser = user => dispatch => (
    SessionUtil.register(user)
        .then(
            payload => dispatch(createSession(payload))
        )
)

export const loginUser = user => dispatch => (
    SessionUtil.login(user)
        .then(
            payload => dispatch(createSession(payload))
        )
)

export const retrieveUser = () => dispatch => (
    SessionUtil.getUser()
        .then(
            payload => dispatch(loadUser(payload))
        )
)

export const logoutUser = () => dispatch => (
    SessionUtil.logout()
        .then(
            () => dispatch(deleteSession())
        )
)