import React from 'react';

import NavBurger from '../../Components/NavBurger/NavBurger';

import Logo from '../../Assets/Images/logo.png';

import './style.css'

const Footer = () => {

    return (
        <header>
            <div className="logo-content">
                <img src={Logo} alt="Karinne Costa Personal Trainner" />
            </div>

            <div className="nav-bar">
                <NavBurger />
            </div>
        </header>
    )
}

export default Footer;