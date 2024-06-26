// React
import React, { useState } from 'react';

// Components
import RightNavigation from './right-navigation.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const BurgerToggle = () => {

  const [open, setOpen] = useState(false);

  const closeSideNav = () => {
    setOpen(false);
  };

  return (
    <>
      <BurgerMenu open={open} onClick={() => setOpen(!open)}>
        <div className='burger-line' />
        <div className='burger-line' />
        <div className='burger-line' />
      </BurgerMenu>
      <RightNavigation open={open} closeSideNav={closeSideNav} />
    </>
  );
};

export default BurgerToggle;

const BurgerMenu = styled.div`
  width: 2rem;
  height: 2rem;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  .burger-line {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#fff' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;