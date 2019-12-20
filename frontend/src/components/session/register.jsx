import React from "react";
import {withRouter} from "react-router-dom";

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
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
        const newUser = Object.assign({}, this.state)
        this.props.registerUser(newUser)
            .then(
                () => this.props.history.push("/")
            )
    }

    render() {
        return (
            <div className="sessions-container">
                <h1>Register Form</h1>
                <form onSubmit={this.handleRegister}>
                    <p>email</p>
                    <input
                        type="text"
                        value={this.state.email}
                        onChange={this.handleInput("email")}
                    />

                    <p>password</p>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInput("password")}
                    />

                    <button className="main-btn">Register</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Register);