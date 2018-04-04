import React from 'react';
import { connect } from 'react-redux';

const Password = (props) => {
    return (
        <section className="section password-container">
            <p className="subtitle is-5 has-text-centered">Generated password</p>
            <h2 className="title is-4 has-text-centered">{props.password}</h2>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        password: state.password
    }
}

export default connect(mapStateToProps)(Password);