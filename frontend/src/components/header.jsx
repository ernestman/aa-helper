import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteSession } from "../actions/session_actions";
import Logo from "../../images/aa_logo.svg";

const mstp = state => ({
    isAuthenticated: state.session.isAuthenticated
})

const mdtp = dispatch => ({
    deleteSession: () => dispatch(deleteSession())
})

const Header = (props) => {

    const sessionLinks = props.isAuthenticated ? (
        <div className="session-links">
            <div className="session-lnk" onClick={() => props.deleteSession()}>
                Logout
            </div>
        </div>
    ) : (
        <div className="session-links">
            <div className="session-lnk"><Link to="/login">Log In</Link></div>
            <div className="session-lnk"><Link to="/register">Register</Link></div>
        </div>
        )

    return (
        <div className="header-container">
            <Link to="/" id="main-icon"><img id="logo" src={Logo} /></Link>
            {/* <div className="header-links"></div> */}
            {sessionLinks}
        </div>
    )
}

export default connect(mstp, mdtp)(Header);
