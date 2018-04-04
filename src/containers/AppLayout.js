import React, { Component } from 'react';
import PasswordGenerator from './PasswordGenerator';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Notes from '../components/Notes/Notes';

class AppLayout extends Component {
    render() {
        return (
            <div>
                <Header />
                <PasswordGenerator />
                <Notes/>
                <Footer />
            </div>
        );
    }
}

export default AppLayout;