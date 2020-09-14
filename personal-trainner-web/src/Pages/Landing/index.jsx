import React from 'react';

import BoxProposal from '../../Components/BoxProposal/BoxProposal';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';

import PersonalImg from '../../Assets/Images/personal-trainner.jpg';
import Presencial from '../../Assets/Images/presencial.jpg';

import './style.css'

function Personal() {
    return (
        <main id="page-content" className="container">
            <Header />

            <img className="image-top" src={PersonalImg} alt="Karinne Costa" />

            <div className="container-content">
                <h2 className="h2-content">tenha resultados agora!</h2>

                <div className="proposal-content">
                    <BoxProposal description="Consultoria Presencial"
                        img={Presencial} name="Consultoria Presencial"
                    />

                    <BoxProposal description="Consultoria Presencial"
                        img={Presencial} name="Consultoria Presencial"
                    />

                    <BoxProposal description="Consultoria Presencial"
                        img={Presencial} name="Consultoria Presencial"
                    />

                    <BoxProposal description="Consultoria Presencial"
                        img={Presencial} name="Consultoria Presencial"
                    />
                </div>
            </div>

            <footer>
                <Footer />
            </footer>

        </main>
    )
}

export default Personal;