import React from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';

const Password = (props) => {
    return (
        <section className="section password-container">
            <p className="subtitle is-5 has-text-centered">Generated password</p>
            <h2 className="title is-4 has-text-centered" title="Click to copy this password" onClick={props.onCopyPassword}>{props.password}</h2>
            <p className="has-text-centered">Click on password text to copy!</p>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        password: state.password
    }
}

const mapPropsToDispatch = (dispatch) => {
    return {
        onCopyPassword: () => dispatch({ type: actionTypes.COPY_PASSWORD })
    }
}

export default connect(mapStateToProps, mapPropsToDispatch)(Password);