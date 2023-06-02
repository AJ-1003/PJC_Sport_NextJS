// React
import React, { useEffect } from 'react';

// Next
import Head from 'next/head';

// Contentful
import client from '/contentful/contentful.data';

// Components
import SpecialsContainer from '../components/components-home/specials-container/specials-container.component';
import WeekendRides from '../components/components-home/weekend-rides/weekend-rides.component';
import HeroImage from '../components/hero-image/hero-image.component';
import ButtonLink from '../utils/button-link/button-link.component';
import WhatWeOfferContainer from '/components/components-home/what-we-offer/what-we-offer-container.component';
import SeperationHeader from '/components/seperation-header/seperation-header.component';

// Images

// Data
import monthName from '../functions/home.functions';

// Styles

export async function getStaticProps() {

  const resWwo = await client.getEntries({
    content_type: 'whatWeOffer'
  });
  const resultWwo = Array.from(resWwo.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  const resSpecials = await client.getEntries({
    content_type: 'special'
  });
  const resultSpecials = Array.from(resSpecials.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  const resHeaders = await client.getEntries({
    content_type: 'header'
  });
  const resultHeader = Array.from(resHeaders.items).filter(item => item.fields.route == '/');

  return {
    props: {
      whatWeOfferCards: resultWwo,
      specials: resultSpecials,
      header: resultHeader
    },
    revalidate: 1
  };
};

const Home = ({ whatWeOfferCards, specials, header }) => {

  useEffect(() => {
    monthName;
  }, []);

  return (
    <>
      <Head>
        <title>Bicycles | Bicycle Services | School Sports | Ballet</title>
        <meta name='description' content='PJC Sport & Cycles is a local bicycle store that caters for the entire familiy. We offer a wide range of mountain bikes for adults and kids.
        We also stock most school sports equipment along with ballet outfits.' />
        <meta name='keywords' content='pjc, pjc sport, pjc sports, pj sport, pj sports, pjc cycles, pj cycles, pj cycle shop, pjc bike shop, pj bike shop, bicycle shop centurion, cycle shop centurion, bicycle shop wierda park, bike shop centurion, bike shop wierda park, sport cycles, sport & cycles, sport and cycles, cycling shop, bicycle shop, centurion cycles'></meta>
        <meta name='robots' content='index,follow'></meta>
        <link rel='canonical' href='https://www.pjcsport.co.za'></link>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <HeroImage
          content={header}
          buttons={
            <>
              <ButtonLink to='#specials' color='--red' fill={true} >
                View Specials
              </ButtonLink>
              <ButtonLink to='/news' color='--white' textColor='--grey' fill={true} >
                Brand of the Month
              </ButtonLink>
            </>
          }>
        </HeroImage>
        <SeperationHeader
          childrenLvl1={'What We Offer'} />
        <WhatWeOfferContainer content={whatWeOfferCards} />
        <SeperationHeader
          id='specials'
          childrenLvl1={monthName}
          childrenLvl2={'Specials'} />
        {/* <CustomSeperationHeader id='specials' childrenLvl1='Black Friday' childrenLvl2='Offer only valid from 25/11/2022 - 03/12/2022.' /> */}
        {/* <ChristmasSeperationHeader id='specials' childrenLvl1='Christmas' childrenLvl2='Offer only valid from 05/12/2022 - 03/12/2022.' /> */}
        <SpecialsContainer content={specials} />
        <WeekendRides />
      </main>
    </>
  );
};

export default Home;