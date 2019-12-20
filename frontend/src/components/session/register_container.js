import {connect} from "react-redux";
import Register from "./register";
import {registerUser} from "../../actions/session_actions";

const mstp = (state) => ({

})

const mdtp = (dispatch) => ({
    registerUser: user => dispatch(registerUser(user))
})

export default connect(mstp, mdtp)(Register)