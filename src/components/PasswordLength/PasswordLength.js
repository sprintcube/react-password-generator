import React from 'react';
import { connect } from 'react-redux';

const PasswordLength = (props) => {
    return (
        <section className="hero password-length">
            <div className="hero-body">
                <div className="container has-text-centered">
                    <h2 className="title is-4">Password Length: {props.length}</h2>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        length: state.length
    }
}

export default connect(mapStateToProps)(PasswordLength);