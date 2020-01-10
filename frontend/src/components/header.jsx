import React from "react";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {deleteSession} from "../actions/session_actions";
import {clearRoutes} from "../actions/route_actions";
import Logo from "../../images/aa_logo.svg";
import CircleLogo from "../../images/aa_circle_logo.png";

const mstp = state => ({
    token: state.session.token,
    routeId: Object.keys(state.entities.routes)[0]
})

const mdtp = dispatch => ({
    deleteSession: () => dispatch(deleteSession()),
    clearRoutes: () => dispatch(clearRoutes())
})

const Header = (props) => {

    const handleLogout = event => {
        event.preventDefault();
        props.clearRoutes();
        props.deleteSession()
        props.history.push("/")
    }

    const handleRoutePage = event => {
        event.preventDefault();
        if (props.routeId) {
            props.history.push(`/routes/${props.routeId}`)
        } 
        else {
            props.history.push("/routes")
        }
    }

    const sessionLinks = props.token ? (
        <div className="session-links">
            <div className="session-lnk" onClick={handleRoutePage}>Routes</div>
            <div className="session-lnk" onClick={handleLogout}>Logout</div>
        </div>
    ) : (
        <div className="session-links">
            <div className="session-lnk"><Link to="/login">Log In</Link></div>
            <div className="session-lnk"><Link to="/register">Sign Up</Link></div>
        </div>
        )

    return (
        <div className="header-container">
            <div className="header-links">
                {/* <Link to="/" id="logo"><img src={Logo} /></Link> */}
                <Link to="/" id="logo"><img src={CircleLogo} /></Link>
                <Link to="/food" id="food-link" className="session-lnk">Food & Restaurants</Link>
            </div>
            {sessionLinks}
        </div>
    )
}

export default withRouter(connect(mstp, mdtp)(Header));
