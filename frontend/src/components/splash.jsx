import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import MainGif from "../../images/aa_splash.gif";
import AsanaChecks from "../../images/asana-checks.png"

const mstp = state => ({
    isAuthenticated: state.session.isAuthenticated
})

const Splash = (props) => {
    const splashLink = props.isAuthenticated ? (
        <Link to="/food" className="big-btn">Food Nearby</Link>
    ) : (
        <Link to="register" className="big-btn">Sign Up</Link>
    )
    return (
        <div className="splash-container">
            <div className="splash-head">
                <h1>Welcome to a/A Helper</h1>
                <p className="splash-text">a/A Helper is a dashboard App Academy students can use that takes care of the little things, so students can focus on what matters most</p>
                {splashLink}
                {/* <Link to="/register" className="big-btn">Sign up</Link> */}
                {/* <img id="main-gif" src={MainGif}/> */}
                <img src={AsanaChecks}/>
            </div>

            <div className="splash-feature">
                <div className="feature-container">
                    <div className="info-container">
                        <div className="info-card">
                            <h3>Get organized</h3>
                            <p className="splash-text">Random text</p>
                        </div>

                        <div className="info-card">
                            <h3>Stay on track</h3>
                            <p className="splash-text">Random text</p>
                        </div>

                        <div className="info-card">
                            <h3>Hit deadlines</h3>
                            <p className="splash-text">Random text</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="splash-feature-other">
                <div className="feature-container">
                    <div className="feature-info">
                        <h2>Dashboard Feature</h2>
                        <p className="splash-text">View your calendar and the weekly weather forecast to plan and stay on top of things</p>
                    </div>
                </div>
            </div>

            <div className="splash-feature">
                <div className="feature-container">
                    <div className="feature-info">
                        <h2>Routes Feature</h2>
                        <p className="splash-text">See public transportation times and schedules as well as directions for your routes to and from the App Academy office</p>
                    </div>
                </div>
            </div>

            <div className="splash-feature-other">
                <div className="feature-container">
                    <div className="feature-info">
                        <h2>Food Feature</h2>
                        <p className="splash-text">Discover great restaurants and good food nearby</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default connect(mstp, null)(Splash);