import React from "react";

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p>Created using <b>React</b> at <b className="has-text-info"><a href="https://www.pnglabz.com">PNG Labz</a></b></p>
                    <p className="field">
                        <a className="button is-small" href="https://github.com/pnglabz/react-password-generator" title="View source code on GitHub">
                            <span className="icon is-small">
                                <i className="fab fa-github"></i>
                            </span>
                            <span>GitHub</span>
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;