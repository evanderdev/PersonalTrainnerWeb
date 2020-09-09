import React, { useState } from 'react';
import styled from 'styled-components';

import './style.css';

const BoxProposal = ({ description, img, name }) => {
    const [open, setOpen] = useState(false);
    return (
        <main className="box-content">
                <div><img src={img} alt={name}/></div>
                <h2>{name}</h2>
                <p>{description}</p>
        </main>
    )
}

export default BoxProposal;