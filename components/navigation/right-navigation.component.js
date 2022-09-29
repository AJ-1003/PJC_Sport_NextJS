// React
import React from 'react';

// Next
import Link from 'next/link';
import { useRouter } from 'next/router';

// Components

// Images

// Data

// Styles
import styled from 'styled-components';
import homeStyles from '/styles/Home.module.css';
import bicycleStyles from '/styles/Bicycles.module.css';
import servicesStyles from '/styles/Services.module.css';
import sportStyles from '/styles/Sport.module.css';
import balletStyles from '/styles/Ballet.module.css';
import contactStyles from '/styles/Contact.module.css';

const RightNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row nowrap;
  padding-right: 20px;
  color: #fff;
  text-transform: uppercase;

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
  }
`;

const RightNavigation = ({ open, closeSideNav }) => {
  var router = useRouter();
  var route;
  if (router.route == '/') {
    route = 'home';
  } else {
    route = router.route.substring(1);
  }
  return (
    <RightNav open={open}>
      <div className='nav-link'>
        <Link href='/'>
          <a className={`bold ${route == 'home' ? homeStyles.textColour : ''}`} onClick={closeSideNav}>Home</a>
        </Link>
      </div>
      <div className='nav-link'>
        <Link href='/bicycles'>
          <a className={`bold ${route == 'bicycles' ? bicycleStyles.textColour : ''}`} onClick={closeSideNav}>Bicycles</a>
        </Link>
      </div>
      <div className='nav-link'>
        <Link href='/services'>
          <a className={`bold ${route == 'services' ? servicesStyles.textColour : ''}`} onClick={closeSideNav}>Services</a>
        </Link>
      </div>
      <div className='nav-link'>
        <Link href='/sport'>
          <a className={`bold ${route == 'sport' ? sportStyles.textColour : ''}`} onClick={closeSideNav}>Sport</a>
        </Link>
      </div>
      <div className='nav-link'>
        <Link href='/ballet'>
          <a className={`bold ${route == 'ballet' ? balletStyles.textColour : ''}`} onClick={closeSideNav}>Ballet</a>
        </Link>
      </div>
      <div className='nav-link'>
        <Link href='/contact'>
          <a className={`bold ${route == 'contact' ? contactStyles.textColour : ''}`} onClick={closeSideNav}>Contact</a>
        </Link>
      </div>
    </RightNav>
  );
};

export default RightNavigation;
