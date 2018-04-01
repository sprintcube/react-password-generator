import React from 'react';

const PasswordOptions = (props) => {
    return (
        <section className="section">
            <div className="container">
                <div className="tile is-parent has-text-centered">
                    <div className="tile is-child">
                        <div className="field">
                            <div className="control">
                                <label className="radio">
                                    <input type="radio" name="question" /> Yes
                            </label>
                                <label className="radio">
                                    <input type="radio" name="question" /> No
                            </label>
                            </div>
                            <p className="control">
                                <a className="button is-info">
                                    Search
                            </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PasswordOptions;