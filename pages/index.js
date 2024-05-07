// React
import React, { useEffect } from 'react';

// Next
import Head from 'next/head';
import Image from 'next/image';

// Contentful
import client from '/contentful/contentful.data';

// Components
import SpecialsContainer from '../components/components-home/specials-container/specials-container.component';
import WeekendRides from '../components/components-home/weekend-rides/weekend-rides.component';
import HeroImage from '../components/hero-image/hero-image.component';
import ButtonLink from '../utils/button-link/button-link.component';
import WhatWeOfferContainer from '/components/components-home/what-we-offer/what-we-offer-container.component';
import SeperationHeader from '/components/seperation-header/seperation-header.component';
import BrandOfMonthContainer from '../components/components-news/brand-container/brand-container.component';

// Images
import celebrate from '../assets/home/40 Years.png';

// Data
import monthName from '../functions/home.functions';

// Styles
import styled from 'styled-components';

export async function getStaticProps() {
  const resWwo = await client.getEntries({
    content_type: 'whatWeOffer',
  });
  const resultWwo = Array.from(resWwo.items).sort(
    (a, b) => parseInt(a.fields.order) - parseInt(b.fields.order)
  );

  const resSpecials = await client.getEntries({
    content_type: 'special',
  });
  const resultSpecials = Array.from(resSpecials.items).sort(
    (a, b) => parseInt(a.fields.order) - parseInt(b.fields.order)
  );

  const resHeaders = await client.getEntries({
    content_type: 'header',
  });
  const resultHeader = Array.from(resHeaders.items).filter(
    (item) => item.fields.route == '/'
  );

  const resBrand = await client.getEntries({
    content_type: 'brandOfTheMonth',
  });
  const resultBrand = Array.from(resBrand.items).sort(
    (a, b) => parseInt(a.fields.order) - parseInt(b.fields.order)
  );

  return {
    props: {
      whatWeOfferCards: resultWwo,
      specials: resultSpecials,
      header: resultHeader,
      brand: resultBrand,
    },
    revalidate: 1,
  };
}

const Home = ({ whatWeOfferCards, specials, header, brand }) => {
  useEffect(() => {
    monthName;
  }, []);

  return (
    <>
      <Head>
        <title>Bicycles | Bicycle Services | School Sports | Ballet</title>
        <meta
          name="description"
          content="PJC Sport & Cycles is a local bicycle store that caters for the entire familiy. We offer a wide range of mountain bikes for adults and kids.
        We also stock most school sports equipment along with ballet outfits."
        />
        <meta
          name="keywords"
          content="pjc, pjc sport, pjc sports, pj sport, pj sports, pjc cycles, pj cycles, pj cycle shop, pjc bike shop, pj bike shop, bicycle shop centurion, cycle shop centurion, bicycle shop wierda park, bike shop centurion, bike shop wierda park, sport cycles, sport & cycles, sport and cycles, cycling shop, bicycle shop, centurion cycles"
        ></meta>
        <meta name="robots" content="index,follow"></meta>

        <link rel="canonical" href="https://www.pjcsport.co.za"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroImage
          content={header}
          buttons={
            <>
              <ButtonLink to="#specials" color="--red" fill={true}>
                View Specials
              </ButtonLink>
              <ButtonLink
                to="/news"
                color="--white"
                textColor="--grey"
                fill={true}
              >
                News, Events, and Tips
              </ButtonLink>
            </>
          }
        ></HeroImage>
        <SeperationHeader childrenLvl1={'What We Offer'} />
        <WhatWeOfferContainer content={whatWeOfferCards} />
        <CelebrationContainer>
          <div>
            <Image
              src={celebrate}
              alt="celebrate"
              width="500"
              height="500"
              title="Celebrate"
              responsive={true}
            />
          </div>
          <div className='celebrate-details'>
            <h2>Your one-stop-shop for school sports gear and bicycles.</h2>
            <p>
              We continue to strive for delivering excellent customer service,
              expert advice, and ensuring no grinding gears or flat tyre will
              keep you from enjoying the outdoors.
            </p>
            <div className='celebration-pill'>
              <p>
                Make sure you watch this space as something is happening behind
                the scenes and you don&apos;t want to miss out!
              </p>
            </div>
          </div>
        </CelebrationContainer>
        <SeperationHeader
          id="specials"
          childrenLvl1={monthName}
          childrenLvl2={'Specials'}
        />
        {/* <CustomSeperationHeader id='specials' childrenLvl1='Black Friday' childrenLvl2='Offer only valid from 25/11/2022 - 03/12/2022.' /> */}
        {/* <ChristmasSeperationHeader id='specials' childrenLvl1='Christmas' childrenLvl2='Offer only valid from 05/12/2022 - 03/12/2022.' /> */}
        <SpecialsContainer content={specials} />
        {brand == '' || brand == null || typeof brand == 'undefined' ? null : (
          <>
            <SeperationHeader
              id="brand-of-the-month"
              childrenLvl1={'Brand of the Month'}
            />
            <BrandOfMonthContainer content={brand} />
          </>
        )}
        <WeekendRides />
      </main>
    </>
  );
};

const CelebrationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-top: 6rem;
  padding-bottom: 6rem;
  text-align: center;
  font-family: 'Montserrat', sans-serif;

  div {
    h2 {
      padding-top: 2rem;
    }
  }

  .celebrate-details {
    width: 80%;
    margin: auto;
  }

  .celebration-pill {
    padding: 0.5rem 2rem;
    background: rgba(237, 29, 32, 0.8);
    width: fit-content;
    margin: auto;
    border-radius: 3rem;
    box-shadow: 2px 2px 10px;
    color: white;
    font-weight: bold;
  }
`;

export default Home;
