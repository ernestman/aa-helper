import React from "react";
import {withRouter} from "react-router-dom";

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
                <h1>Register Form</h1>
                <form onSubmit={this.handleRegister}>
                    <p>Email</p>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput("email")}
                    />

                    <p>Password</p>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                    />

                    <p>Confirm Password</p>
                    <input
                        type="password"
                        value={this.state.password2}
                        onChange={this.handleInput("password2")}
                    />

                    <button className="main-btn">Register</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Register);