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
  font-family: 'Montserrat', sans-serif;

  .nav-link {
    padding: 10px 15px;
  }

  @media (max-width: 767px) {
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
  const router = useRouter();
  var route;
  if (router.route == '/') {
    route = 'home';
  } else {
    route = router.route.substring(1);
  }
  return (
    <RightNav open={open}>
      <div className={`nav-link bold ${route == 'home' ? homeStyles.textColour : ''}`}>
        <Link
          href='/'
          scroll={true}>
          <a onClick={closeSideNav}>Home</a>
        </Link>
      </div>
      <div className={`nav-link bold ${route == 'bicycles' || route == 'bicycles/[slug]' ? bicycleStyles.textColour : ''}`}>
        <Link
          href='/bicycles'
          scroll={true}>
          <a onClick={closeSideNav}>Bicycles</a>
        </Link>
      </div>
      <div className={`nav-link bold ${route == 'services' ? servicesStyles.textColour : ''}`}>
        <Link
          href='/services'
          scroll={true}>
          <a onClick={closeSideNav}>Services</a>
        </Link>
      </div>
      <div className={`nav-link bold ${route == 'sport' ? sportStyles.textColour : ''}`}>
        <Link
          href='/sport'
          scroll={true}>
          <a onClick={closeSideNav}>Sport</a>
        </Link>
      </div>
      <div className={`nav-link bold ${route == 'ballet' ? balletStyles.textColour : ''}`}>
        <Link
          href='/ballet'
          scroll={true}>
          <a onClick={closeSideNav}>Ballet</a>
        </Link>
      </div>
      <div className={`nav-link bold ${route == 'contact' ? contactStyles.textColour : ''}`}>
        <Link
          href='/contact'
          scroll={true}>
          <a onClick={closeSideNav}>Contact</a>
        </Link>
      </div>
    </RightNav>
  );
};

export default RightNavigation;
