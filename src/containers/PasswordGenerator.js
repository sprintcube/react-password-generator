import React from 'react';
import PasswordLength from '../components/PasswordLength/PasswordLength';
import PasswordOptions from '../components/PasswordOptions/PasswordOptions';
import Password from '../components/Password/Password';
import LengthSlider from '../components/LengthSlider/LengthSlider';

const PasswordGenerator = (props) => {
    return (
        <div>
            <PasswordLength />
            <LengthSlider />
            <section class="section password-options-container">
                <div className="columns">
                    <div className="column is-half">
                        <PasswordOptions />
                    </div>
                    <div className="column is-half">
                        <Password />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PasswordGenerator;