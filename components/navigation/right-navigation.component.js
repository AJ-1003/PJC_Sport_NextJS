// React
import React from 'react';

// Next
import Link from 'next/link';

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row nowrap;
  padding-right: 20px;

  .nav-link {
    padding: 10px 15px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #313131;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100%;
    width: 60%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    .nav-link {
      color: #fff;
    }
  }
`;

const RightNavigation = ({ open, closeSideNav }) => {
  return (
    <RightNav open={open}>
      <div className='nav-link'>
        <Link href='/'>
          <a onClick={closeSideNav}>Home</a>
        </Link>
      </div>
      <div className='nav-link'>
        <Link href='bicycles'>
          <a onClick={closeSideNav}>Bicycles</a>
        </Link>
      </div>
      <div className='nav-link'>
        <Link href='services'>
          <a onClick={closeSideNav}>Services</a>
        </Link>
      </div>
      <div className='nav-link'>
        <Link href='sport'>
          <a onClick={closeSideNav}>Sport</a>
        </Link>
      </div>
      <div className='nav-link'>
        <Link href='ballet'>
          <a onClick={closeSideNav}>Ballet</a>
        </Link>
      </div>
      <div className='nav-link'>
        <Link href='contact'>
          <a onClick={closeSideNav}>Contact</a>
        </Link>
      </div>
    </RightNav>
  );
};

export default RightNavigation;
