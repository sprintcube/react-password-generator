import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';

class LengthSlider extends Component {
    render() {
        return (
            <section className="section" >
                <div className="container">
                    <div className="tile is-parent has-text-centered">
                        <div className="tile is-child">
                            <p className="subtitle">Slider will go here</p>
                            <button onClick={this.props.onLengthChange}>Change</button>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLengthChange: () => dispatch({ type: actionTypes.CHANGE_PASSWORD_LENGTH })
    }
};

export default connect(null, mapDispatchToProps)(LengthSlider);