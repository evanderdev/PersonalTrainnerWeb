import React from 'react';

import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import PersonalImg from '../../Assets/Images/personal-trainner.jpg';

import './style.css'

function Personal() {
    return (
        <main id="page-content" className="container">
            <Header />
            <img className="image-top" src={PersonalImg} alt="Karinne Costa" />
            <footer>
                <Footer />
            </footer>

        </main>
    )
}

export default Personal;