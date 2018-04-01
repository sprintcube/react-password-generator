import React, { Component } from 'react';
import PasswordLength from '../components/PasswordLength/PasswordLength';
import PasswordOptions from '../components/PasswordOptions/PasswordOptions';
import Password from '../components/Password/Password';
import LengthSlider from '../components/LengthSlider/LengthSlider';

class PasswordGenerator extends Component {
    render() {
        return (
            <div className="container">
                <PasswordLength/>
                <LengthSlider/>
                <PasswordOptions/>
                <Password/>
            </div>
        );
    }
}

export default PasswordGenerator;