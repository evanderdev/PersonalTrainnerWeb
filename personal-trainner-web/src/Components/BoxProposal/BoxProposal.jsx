import React from 'react';

import './style.css';

const BoxProposal = ({ description, img, name }) => {
    return (
        <main className="box-content">
            <div className="img-content"><img src={img} alt={name} /></div>
            <span>{name}</span>
            <div className="content">
                <div className="plus-content">+</div>
                <div className="description-content">{description}</div>
            </div>

        </main>
    )
}

export default BoxProposal;