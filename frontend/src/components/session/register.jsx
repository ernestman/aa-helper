import React from "react";
import {withRouter, Link} from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            password2: ""
        }
        this.handleRegister = this.handleRegister.bind(this);
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
            password: this.state.password
        }
        // debugger
        if (this.state.password === this.state.password2) {
            this.props.registerUser(newUser)
                .then(
                    () => this.props.history.push("/")
                )
        }
    }

    render() {
        return (
            <div className="sessions-container">
                <h1 className="session-header">Register</h1>
                <form className="session-form" onSubmit={this.handleRegister}>
                    <p className="session-form-label">Email</p>
                    <input
                        type="text"
                        value={this.state.email}
                        placeholder="name@company.com"
                        onChange={this.handleInput("email")}
                    />

                    <p className="session-form-label">Password</p>
                    <input
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleInput("password")}
                    />

                    <p className="session-form-label">Confirm Password</p>
                    <input
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