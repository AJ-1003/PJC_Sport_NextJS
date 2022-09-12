// React
import React from 'react';

// Next
import Link from 'next/link';

// Components

// Images
import Facebook from '/assets/footer/icons8-facebook.svg';
import Instagram from '/assets/footer/icons8-instagram.svg';

// Data

// Styles
import styled from 'styled-components';
import Image from 'next/image';

const FooterContainer = styled.footer`
  background: rgb(51, 58, 64);

  .footer-content {
    color: #fff;
    margin: 0 auto;
    padding: 1rem 0;
    width: 80%;
    display: flex;
    justify-content: space-between;
  }
`;

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <div className='footer-content'>
        <div>
          <Link href='contact'>
            <h3>Contact us</h3>
          </Link>
          <ul>
            <li>012 653 1200</li>
            <li>info@pjcsport.co.za</li>
          </ul>
        </div>
        <div>
          <h3>Follow Us</h3>
          <div className='social-icons'>
            <Link href='https://www.facebook.com/pjcsport/'>
              <a rel='noreferrer' target='_blank'>
                <Facebook />
              </a>
            </Link>
            <Link href='https://www.instagram.com/pjcsportcenturion/?hl=en'>
              <a rel='noreferrer' target='_blank'>
                <Instagram />
              </a>
            </Link>
          </div>
        </div>
        <div>
          <p>PJC Sport &amp; Cycles ©&nbsp;{currentYear}</p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
