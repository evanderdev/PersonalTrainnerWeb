import React, { useState } from 'react';
import styled from 'styled-components';
import NavRow from '../../Components/NavRow/NavRow';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 40px;
  right: 30px;
  z-index: 20;
  display: none;

  @media (max-width: 790px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 20%) ;
    border-radius: 10px;
    transform-origin: .5px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const NavBurger = () => {
    const [open, setOpen] = useState(false)
    
    return (
      <>
        <StyledBurger open={open} onClick={() => setOpen(!open)}>
          <div />
          <div />
          <div />
        </StyledBurger>
        <NavRow open={open}/>
      </>
    )
  }
  
  export default NavBurger;