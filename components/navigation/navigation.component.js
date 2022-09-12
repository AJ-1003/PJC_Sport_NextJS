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

// Images
import logo from '../../assets/navigation/Logo.png';

// Data

// Styles
import styled from 'styled-components';
import HeroImage from '../hero-image/hero-image.component';

const Nav = styled.nav`
  display: flex;
  width: 100%;
  background-color: rgba(128, 128, 128, 0.205);
  position: absolute;

  .navigation_container {
    height: auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
    z-index: 2;

    .logo_container {
      width: 200px;
      padding-left: 20px;

      .logo {
        width: 100%;
        cursor: pointer;
      }
    }
  }
`;

const Navigation = () => {

  const router = useRouter();
  const route = router.pathname.substring(1);

  return (
    <>
      <header>
          <Nav>
            <div className='navigation_container'>
              <div className='logo_container'>
                <Link href='/'>
                  <div className='logo'>
                    <Image src={logo} alt='logo-img' />
                  </div>
                </Link>
              </div>
              <BurgerToggle />
            </div>
          </Nav>
      </header>
      {/* <Outlet /> */}
    </>
  );
};

export default Navigation;
