import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (e) => { setEmail(e.target.value) }
    const handlePassword = (e) => { setPassword(e.target.value) }

    const handleLogin = (e) => {
        e.preventDefault();
        const user = {email: email, password: password}
        props.loginUser(user)
            .then(
                res => {
                    if (res.payload) props.history.push("/")
                }
            )
    }

    useEffect( () => {
        return function cleanup() {
            props.clearSessionErrors()
        }
    }, []);

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
                        value={email}
                        placeholder="name@company.com"
                        onChange={handleEmail}
                    />

                    <ul className="errors-ele">{emailErrors}</ul>

                    <p className="session-form-label">Password</p>
                    <input
                        className="session-form-input"
                        type="password"
                        value={password}
                        placeholder="Password"
                        onChange={handlePassword}
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

export default withRouter(Login);