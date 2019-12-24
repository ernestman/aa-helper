import React from "react";
import { withRouter, Link } from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentWillUnmount() {
        this.props.clearSessionErrors()
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
                <h1 className="session-header">Log In</h1>
                <form className="session-form" onSubmit={this.handleLogin}>
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

                    <button className="form-btn">Log in</button>
                </form>
                <div className="form-redirect">
                    <p>Don't have an account?</p>&nbsp;
                    <Link to="/register">Sign Up</Link>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);