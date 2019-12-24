import { connect } from "react-redux";
import Login from "./login";

import {loginUser, clearSessionErrors} from "../../actions/session_actions";

const mstp = state => ({
    errors: state.errors.session
})

const mdtp = dispatch => ({
    loginUser: user => dispatch(loginUser(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

export default connect(mstp, mdtp)(Login);