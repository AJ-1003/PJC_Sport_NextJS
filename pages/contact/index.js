// React
import React from 'react';

// Next
import Head from 'next/head';

// Contentful
import client from '/contentful/contentful.data';

// Components
import ContactForm from '../../components/components-contact/contact-form/contact-form.component';
import MapLocation from '../../components/components-contact/map/map.component';
import TradingHours from '../../components/components-contact/trading-hours/trading-hours.component';
import HeroImage from '../../components/hero-image/hero-image.component';
import SeperationHeader from '../../components/seperation-header/seperation-header.component';

// Images

// Data

// Styles
import styled from 'styled-components';

export async function getStaticProps() {

  const resHeaders = await client.getEntries({
    content_type: 'header'
  });
  const resultHeader = Array.from(resHeaders.items).filter(item => item.fields.route == '/contact');

  const resTradingHours = await client.getEntries({
    content_type: 'tradingHours'
  });
  const resultTradingHours = Array.from(resTradingHours.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  return {
    props: {
      header: resultHeader,
      tradingHours: resultTradingHours
    },
    revalidate: 1
  };
};

const Contact = ({ header, tradingHours }) => {
  return (
    <>
      <Head>
        <title>PJC Sport & Cycles - Contact</title>
        <meta name='description' content='We have been serving the community with good advice, personal service and reliable products in the bicycle market over the past 30 years.
        Contact us for more information on the products and services that we offer.' />
        <meta name='robots' content='index,follow'></meta>
        <link rel='canonical' href='https://www.pjcsport.co.za/contact'></link>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <HeroImage content={header} />
        <SeperationHeader childrenLvl1='Trading Hours' />
        <TradingHours content={tradingHours} />
        <MapContactContainer>
          <MapContactContent>
            <MapLocation />
            <ContactForm />
          </MapContactContent>
        </MapContactContainer>
      </main>
    </>
  );
};

export default Contact;

const MapContactContainer = styled.div`
  background: var(--background-grey);
`;

const MapContactContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  padding: 2rem 0;
  margin: 0 auto;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;