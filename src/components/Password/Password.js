import React from 'react';
import { connect } from 'react-redux';

const Password = (props) => {
    return (
        <section className="section">
            <div className="container">
                <div className="tile is-parent has-text-centered">
                    <div className="tile is-child">
                        <p className="subtitle">Generated password: {props.password}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        password: state.password
    }
}

export default connect(mapStateToProps)(Password);