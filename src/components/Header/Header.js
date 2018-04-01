import React from "react";

const Header = (props) => {
    return (
        <section className="section">
            <div className="container has-text-centered">
                <h1 className="title">Password Generator</h1>
                <h2 className="subtitle">
                    A simple tool to generate random <strong>Password</strong> strings
                </h2>
            </div>
        </section>
    );
}

export default Header;