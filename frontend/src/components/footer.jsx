import React from "react";


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-main">
                <div className="footer-links">
                    <p>Connect</p>
                    <a href="http://linkedin.com/in/ernestman/" id="linkedin" target="_blank">
                        <i className="fab fa-linkedin fa-s"></i>&nbsp;LinkedIn
                        </a>
                    <a href="http://github.com/ernestman/" id="github-ftr" target="_blank">
                        <i className="fab fa-github"></i>&nbsp;Github
                        </a>
                    <a href="http://angel.co/ernestman/" id="angellist-ftr" target="_blank">
                        <i className="fab fa-angellist"></i>&nbsp;Angellist
                        </a>
                </div>
                <div className="footer-links">
                    <p>About</p>
                    <a href="https://ernieman.com" id="personalsite" target="_blank">
                        <i className="far fa-user"></i>&nbsp;Portfolio
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>UI and Design inspired by Asana. By Ernie Man</p>
            </div>
        </div>
    )
}

export default Footer;