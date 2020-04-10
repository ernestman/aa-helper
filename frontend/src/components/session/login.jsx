import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";
import {connect} from "react-redux";
import { loginUser, clearSessionErrors } from "../../actions/session_actions";

const mstp = state => ({
    errors: state.errors.session
})

const mdtp = dispatch => ({
    loginUser: user => dispatch(loginUser(user)),
    clearSessionErrors: () => dispatch(clearSessionErrors())
})

const Login = (props) => {

    const [loginForm, setLoginForm] = useState( {email: "", password: ""} )
    // useState does not automatically merge and update object, need spread operater first

    const handleLogin = (e) => {
        e.preventDefault();
        props.loginUser(loginForm)
    }

    useEffect( () => {
        return function cleanup() {
            props.clearSessionErrors()
        }
    }, []);
    // argument = [] -> only executing on the first rendering
    // argument = [loginForm] -> use effect executed every time those values change

    const emailErrors = props.errors.email;
    const passErrors = props.errors.password;

    return (
        <div className="session-container">
            <div className="sessions-container">
                <h1 className="session-header">Log In</h1>
                <form className="session-form" onSubmit={handleLogin}>
                    <p className="session-form-label">Email</p>
                    <input
                        className="session-form-input"
                        type="text"
                        value={loginForm.email}
                        placeholder="name@company.com"
                        onChange={ e => setLoginForm({ ...loginForm, email: e.target.value }) }
                    />

                    <ul className="errors-ele">{emailErrors}</ul>

                    <p className="session-form-label">Password</p>
                    <input
                        className="session-form-input"
                        type="password"
                        value={loginForm.password}
                        placeholder="Password"
                        onChange={ e => setLoginForm({ ...loginForm, password: e.target.value }) }
                    />

                    <ul className="errors-ele">{passErrors}</ul>

                    <button className="form-btn">Log in</button>
                </form>
                <div className="form-redirect">
                    <p>Don't have an account?</p>&nbsp;
                        <Link to="/register">Sign Up</Link>
                </div>
            </div>
        </div>
    )

}

export default withRouter(connect(mstp, mdtp)(Login));