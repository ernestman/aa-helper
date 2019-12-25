import React from "react";
import {withRouter, Link} from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            sf_office: "sf",
            password: "",
            password2: ""
        }
        this.handleRegister = this.handleRegister.bind(this);
    }

    componentWillUnmount() {
        this.props.clearSessionErrors()
    }

    handleInput(inputType) {
        return (event) => {
            this.setState({ [inputType]: event.target.value })
        }
    }

    handleRegister(event) {
        event.preventDefault();
        const newUser = {
            email: this.state.email,
            password: this.state.password,
            sf_office: this.state.sf_office === "sf" ? true : false
        }
        if (this.state.password === this.state.password2) {
            this.props.registerUser(newUser)
                .then(
                    () => this.props.history.push("/")
                )
        } else {
            let errors = {
                password: ["Passwords do not match"]
            }
            this.props.customSessionErrors(errors)
        }
    }

    render() {
        return (
            <div className="sessions-container">
                <h1 className="session-header">Sign Up</h1>
                <form className="session-form" onSubmit={this.handleRegister}>
                    <div className="register-form-top">
                        <div className="register-form-input">
                            <p className="register-form-label">Email</p>
                            <input
                                className="session-form-input"
                                type="text"
                                value={this.state.email}
                                placeholder="name@company.com"
                                onChange={this.handleInput("email")}
                            />
                        </div>

                        <div className="register-form-input">
                            <p className="register-form-label">a/A Office</p>
                            <select className="session-form-input" value={this.state.sf_office} onChange={this.handleInput("sf_office")}>
                                <option value="sf">San Francisco</option>
                                <option value="ny">New York</option>
                            </select>
                        </div>
                    </div>

                    <p className="session-form-label">Password</p>
                    <input
                        className="session-form-input"
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleInput("password")}
                    />

                    <p className="session-form-label">Confirm Password</p>
                    <input
                        className="session-form-input"
                        type="password"
                        value={this.state.password2}
                        placeholder="Confirm password"
                        onChange={this.handleInput("password2")}
                    />

                    <button className="form-btn">Sign up</button>
                </form>
                <div className="form-redirect">
                    <p>Already have an account?</p>&nbsp;
                    <Link to="/login">Log in</Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Register);