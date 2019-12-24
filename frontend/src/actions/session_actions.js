import * as SessionUtil from "../util/session_api_util";

export const SESSION_CREATED = "SESSION_CREATED";
export const LOAD_USER = "LOAD_USER";
export const SESSION_DELETED = "SESSION_DELETED";

export const SESSION_ERRORS = "SESSION_ERRORS";
export const CUSTOM_SESSION_ERRORS = "CUSTOM_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

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

export const sessionErrors = errors => ({
    type: SESSION_ERRORS,
    errors: errors
})

export const customSessionErrors = errors => ({
    type: CUSTOM_SESSION_ERRORS,
    errors: errors
})

export const clearSessionErrors = () => ({
    type: CLEAR_SESSION_ERRORS
})

//================== thunk action creators =================
export const registerUser = user => dispatch => (
    SessionUtil.register(user)
        .then(
            payload => dispatch(createSession(payload))
        )
        .catch(
            errors => dispatch(sessionErrors(errors))
        )
)

export const loginUser = user => dispatch => (
    SessionUtil.login(user)
        .then(
            payload => dispatch(createSession(payload))
        )
        .catch(
            errors => dispatch(sessionErrors(errors))
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