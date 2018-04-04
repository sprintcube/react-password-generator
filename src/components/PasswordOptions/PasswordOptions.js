import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from 'rc-checkbox';

import * as actionTypes from '../../store/actions';

import 'rc-checkbox/assets/index.css';

class PasswordOptions extends Component {

    componentDidMount = () => {
        const { onGeneratePassword } = this.props;
        onGeneratePassword();
    }

    render() {
        return (
            <section className="section password-options-container">
                <div className="columns">
                    <div className="column has-text-centered">
                        <label>
                            <Checkbox
                                checked={this.props.options.symbols}
                                onChange={this.props.onSymbolsChange}
                            />
                            &nbsp; Symbols
                        </label>
                        <label>
                            <Checkbox
                                checked={this.props.options.numbers}
                                onChange={this.props.onNumbersChange}
                            />
                            &nbsp; Numbers
                        </label>
                    </div>
                </div>
                <div className="columns">
                    <div class="column is-6 is-offset-3">
                        <a className="button is-info is-fullwidth" onClick={this.props.onGeneratePassword}>Generate</a>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        options: state.options
    }
}

const mapPropsToDispatch = (dispatch) => {
    return {
        onSymbolsChange: () => dispatch({ type: actionTypes.USE_SYMBOLS }),
        onNumbersChange: () => dispatch({ type: actionTypes.USE_NUMBERS }),
        onGeneratePassword: () => dispatch({ type: actionTypes.GENERATE_PASSWORD })
    }
}

export default connect(mapStateToProps, mapPropsToDispatch)(PasswordOptions);