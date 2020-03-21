import React, {useState, useEffect} from "react";
import {withRouter, Link} from "react-router-dom";

const Register = (props) => {
    const [email, setEmail] = useState("")
    const [sfOffice, setOffice] = useState("sf")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")

    const handleEmail = (e) => { setEmail(e.target.value) }
    const handleOffice = (e) => { setOffice(e.target.value) }
    const handlePassword = (e) => { setPassword(e.target.value) }
    const handlePassword2 = (e) => { setPassword2(e.target.value) }

    const handleRegister = (e) => {
        e.preventDefault();
        const newUser = {
            email: email,
            sf_office: sfOffice,
            password: password,
            password2: password2
        }
        if (password === password2) {
            props.registerUser(newUser)
                .then(
                    res => {
                        if (res.payload) props.history.push("/")
                    }
                )
        } else {
            let errors = {
                password: ["Passwords do not match"]
            }
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
                                value={email}
                                placeholder="name@company.com"
                                onChange={handleEmail}
                            />
                        </div>

                        <div className="register-form-input">
                            <p className="register-form-label">a/A Office</p>
                            <select className="session-form-input" value={sfOffice} onChange={handleOffice}>
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
                        value={password}
                        placeholder="Password"
                        onChange={handlePassword}
                    />

                    <ul className="errors-ele">{passwordErrors}</ul>

                    <p className="session-form-label">Confirm Password</p>
                    <input
                        className="session-form-input"
                        type="password"
                        value={password2}
                        placeholder="Confirm password"
                        onChange={handlePassword2}
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

export default withRouter(Register);