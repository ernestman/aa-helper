import { connect } from "react-redux";
import Login from "./login";

import { loginUser } from "../../actions/session_actions";

const mstp = state => ({

})

const mdtp = dispatch => ({
    loginUser: user => dispatch(loginUser(user))
})

export default connect(mstp, mdtp)(Login);