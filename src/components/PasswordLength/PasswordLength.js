import React from 'react';
import { connect } from 'react-redux';

const PasswordLength = (props) => {
    return (
        <section className="section">
            <div className="container">
                <div className="tile is-parent has-text-centered">
                    <div className="tile is-child">
                        <p className="title">Password Length: {props.length}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = state => {
    return {
        length: state.length
    }
}

export default connect(mapStateToProps, null)(PasswordLength);