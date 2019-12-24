import {connect} from "react-redux";
import Register from "./register";
import {
    registerUser,
    customSessionErrors,
    clearSessionErrors
} from "../../actions/session_actions";

const mstp = (state) => ({
    errors: state.errors.session
})

const mdtp = (dispatch) => ({
    registerUser: user => dispatch(registerUser(user)),
    customSessionErrors: errors => dispatch(customSessionErrors(errors)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mstp, mdtp)(Register)