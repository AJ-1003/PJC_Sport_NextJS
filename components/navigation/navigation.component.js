// React
import React from 'react';
import { Outlet } from 'react-router-dom';

// Next
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Contentful

// Components
import BurgerToggle from './burger-toggle.component';
import HeroImage from '../hero-image/hero-image.component';

// Images
import logo from '../../assets/navigation/Logo.png';

// Data

// Styles
import styled from 'styled-components';

const Navigation = () => {

  const router = useRouter();
  const route = router.pathname.substring(1);

  return <>
    <header>
      <Nav>
        <div className='navigation_container'>
          <div className='logo_container'>
            <Link href='/'>
              <Image src={logo} alt='logo-img' width='180' height='75' title='Logo' />
            </Link>
          </div>
          <BurgerToggle />
        </div>
      </Nav>
    </header>
    {/* <Outlet /> */}
  </>;
};

export default Navigation;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  background-color: rgba(133, 133, 133, 0.2);
  position: absolute;
  z-index: 1;

  .navigation_container {
    height: 100px;
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;

    .logo_container {
      width: 200px;
      height: auto;
      padding-left: 20px;
      cursor: pointer;
    }
  }
`;