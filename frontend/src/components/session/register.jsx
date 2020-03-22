import React, {useState, useEffect} from "react";
import {withRouter, Link} from "react-router-dom";
import {connect} from "react-redux";
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

const Register = (props) => {

    const [registerForm, setRegisterForm] = useState({
        email: "",
        sf_office: "sf",
        password: "",
        password2: ""
    })

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            email: registerForm.email,
            sf_office: registerForm.sfOffice === "sf" ? true : false,
            password: registerForm.password,
            password2: registerForm.password2
        }
        if (registerForm.password === registerForm.password2) {
            props.registerUser(newUser)
                .then( res => {
                        if (res.payload) props.history.push("/")
                    }
                )
        } else {
            let errors = { password: ["Passwords do not match"] }
            props.customSessionErrors(errors)
        }
    }

    useEffect( () => {
        return function cleanup() {
            props.clearSessionErrors()
        }
    }, []);

    const emailErrors = props.errors.email;
    const passwordErrors = props.errors.password;

    return (
        <div className="session-container">
            <div className="sessions-container">
                <h1 className="session-header">Sign Up</h1>
                <form className="session-form" onSubmit={handleRegister}>
                    <div className="register-form-top">
                        <div className="register-form-input">
                            <p className="register-form-label">Email</p>
                            <input
                                className="session-form-input"
                                type="text"
                                value={registerForm.email}
                                placeholder="name@company.com"
                                onChange={ e => setRegisterForm({ ...registerForm, email: e.target.value }) }
                            />
                        </div>

                        <div className="register-form-input">
                            <p className="register-form-label">a/A Office</p>
                            <select 
                                className="session-form-input"
                                value={registerForm.sfOffice}
                                onChange={ e => setRegisterForm({ ...registerForm, sfOffice: e.target.value }) }
                            >
                                <option value="sf">San Francisco</option>
                                <option value="ny">New York</option>
                            </select>
                        </div>
                    </div>

                    <ul className="errors-ele">{emailErrors}</ul>

                    <p className="session-form-label">Password</p>
                    <input
                        className="session-form-input"
                        type="password"
                        value={registerForm.password}
                        placeholder="Password"
                        onChange={ e => setRegisterForm({ ...registerForm, password: e.target.value }) }
                    />

                    <ul className="errors-ele">{passwordErrors}</ul>

                    <p className="session-form-label">Confirm Password</p>
                    <input
                        className="session-form-input"
                        type="password"
                        value={registerForm.password2}
                        placeholder="Confirm password"
                        onChange={ e => setRegisterForm({ ...registerForm, password2: e.target.value }) }
                    />

                    <button className="form-btn">Sign up</button>
                </form>
                <div className="form-redirect">
                    <p>Already have an account?</p>&nbsp;
                        <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>
    )
}

export default withRouter(connect(mstp, mdtp)(Register));