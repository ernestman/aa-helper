import React from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleInput(inputType) {
        return (event) => {
            this.setState({ [inputType]: event.target.value })
        }
    }

    handleLogin(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state)
        this.props.loginUser(user)
            .then(
                () => this.props.history.push("/")
            )
    }

    render() {

        return (
            <div className="sessions-container">
                <h1>Login Form</h1>
                <form onSubmit={this.handleLogin}>
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

                    <button className="main-btn">Log in</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Login);