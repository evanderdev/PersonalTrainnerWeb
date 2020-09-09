import React from 'react';
import styled from 'styled-components';

import './style.css'

const Ul = styled.ul`

    @media (max-width: 790px) {
        flex-flow: column nowrap;
        background-color: rgb(60, 83, 163, 90%);
        position: fixed;
        transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 250px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        a {
        color: white;
        }
    }
`;

const NavRow = ({ open }) => {
    return (
        <Ul className="nav-content" open={open}>
            <a href="./">Início</a>
            <a href="./sobre">Sobre mim</a>
            <a href="./planos">Planos</a>
            <a href="./formacaoecursos">Formação e Cursos</a>
            <a href="./beneficios">Benefícios</a>
        </Ul>
    )
}

export default NavRow;