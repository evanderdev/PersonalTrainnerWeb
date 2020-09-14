import React from 'react';

import NavRow from '../../Components/NavRow/NavRow'

import instagramIcon from '../../Assets/Images/instagram.png'
import whatsappIcon from '../../Assets/Images/whatsapp.png'

import './style.css'

const Footer = () => {

    return (
        <div id="footer-content">
            <div className="social-content"><h2>Redes Sociais</h2>
                <ul>
                    <li><a href="https://www.instagram.com/karinnecostapersonal/" target="_blank"><img src={instagramIcon} alt="instagram" /></a></li>
                    <li><a href="https://wa.me/996140321" target="_blank"><img src={whatsappIcon} alt="Whatsapp" /></a></li>
                </ul>
            </div>

            <div className="nav-bar-footer">
                <NavRow />
            </div>

            <h2 className="copyright">Direitos reservados @ Karinne Costa - Personal Trainner</h2>
        </div>
    )
}

export default Footer;