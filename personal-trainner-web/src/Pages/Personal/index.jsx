import React from 'react';

import NavBurger from '../../Components/NavBurger/NavBurger';
import BoxProposal from '../../Components/BoxProposal/BoxProposal';

import Logo from '../../Assets/Images/logo.png';
import PersonalImg from '../../Assets/Images/personal-trainner.jpg';
import Presencial from '../../Assets/Images/presencial.jpg';

import './style.css'

function Personal() {
    return (
        <main id="page-content" className="container">
            <header className="page-header">
                <img src={Logo} alt="Karinne Costa Personal Trainner" />

                <div className="nav-bar">
                <NavBurger />
                </div>
            </header>

            <img className="image-top" src={PersonalImg} alt="Karinne Costa"/>

            <div className="proposal-content">
                <BoxProposal description="Consultoria Presencial Consultoria PresencialConsultoria Presencial
                Consultoria PresencialConsultoria PresencialConsultoria Presencial Consultoria Presencial
                Consultoria PresencialConsultoria PresencialConsultoria PresencialConsultoria Presencial" 
                img={Presencial} name="Consultoria Presencial" />
                <BoxProposal description="Consultoria Presencial" img={Presencial} name="Consultoria Presencial" />
                <BoxProposal description="Consultoria Presencial" img={Presencial} name="Consultoria Presencial" />
                <BoxProposal description="Consultoria Presencial" img={Presencial} name="Consultoria Presencial" />
                <BoxProposal description="Consultoria Presencial" img={Presencial} name="Consultoria Presencial" />
                <BoxProposal description="Consultoria Presencial" img={Presencial} name="Consultoria Presencial" />
            </div>
            
        </main>
    )
}

export default Personal;