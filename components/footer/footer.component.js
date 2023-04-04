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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterContainer>
      <Content>
        <ContentLeft>
          <Link href='contact/#contact-us' legacyBehavior>
            <h3 className='pointer'>Contact us</h3>
          </Link>
          <ul>
            <li>012 653 1200</li>
            <li>queries@pjcsport.co.za</li>
          </ul>
        </ContentLeft>
        <ContentCenter>
          <h3>Follow Us</h3>
          <SocialIcons>
            <Link href='https://www.facebook.com/pjcsport/?hl=en'>
              <a rel='noopener noreferrer' target='_blank'>
                <Facebook />
              </a>
            </Link>
            <Link href='https://www.instagram.com/pjcsportcenturion/?hl=en'>
              <a rel='noopener noreferrer' target='_blank'>
                <Instagram />
              </a>
            </Link>
          </SocialIcons>
        </ContentCenter>
        <ContentRight>
          <p>PJC Sport &amp; Cycles ©&nbsp;{currentYear}</p>
        </ContentRight>
      </Content>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background: rgb(51,58,64);
  color: #fff;
`;

const Content = styled.div`
  padding: 2rem;
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
    
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
  }
`;

const ContentLeft = styled.div`
  text-align: center;

  ul {
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      margin: 5px 0;
    }
  }
`;

const ContentCenter = styled.div`
  text-align: center;
`;

const SocialIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
  margin: 0 auto;
`;

const ContentRight = styled.div`
  text-align: center;
`;