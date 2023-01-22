// React
import React from 'react';

// Next
import Head from 'next/head';

// Contentful
import client from '/contentful/contentful.data';

// Components
import HeroImage from '../../components/hero-image/hero-image.component';
import SeperationHeader from '../../components/seperation-header/seperation-header.component';
import DetailsSection from '../../components/details-section/details-section.component';
import CarouselSlider from '../../components/carousel/carousel.component';

// Images

// Data

// Styles
import styled from 'styled-components';

export async function getStaticProps() {

  const resHeaders = await client.getEntries({
    content_type: 'header'
  });
  const resultHeader = Array.from(resHeaders.items).filter(item => item.fields.route == '/sport');

  const resSportSections = await client.getEntries({
    content_type: 'sportSection'
  });
  const resultSportSections = Array.from(resSportSections.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  const resBrands = await client.getEntries({
    content_type: 'sportBrands'
  });
  const resultBrands = Array.from(resBrands.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  return {
    props: {
      header: resultHeader,
      sportSections: resultSportSections,
      brands: resultBrands
    },
    revalidate: 1
  };
};

const Sport = ({ header, sportSections, brands }) => {
  return (
    <>
      <Head>
        <title>PJC Sport & Cycles - Sport</title>
        <meta name="description" content="PJC SPort & Cycles is a local bicycle store that caters for the entire familiy. We offer a wide range of mountain bikes for adults and kids.
        We also stock most school sports equipment along with ballet outfits." />
        <meta name='keywords' content='school sport equipment centurion, school sport equipment wierda park, swimming, ballet, cricket, hockey, rugby, darts, table tennis, ping pong'></meta>
        <meta name="robots" content="index,follow"></meta>
        <link rel="canonical" href="https://www.pjcsport.co.za/sport"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        <HeroImage content={header} />
        <SeperationHeader childrenLvl1='Sport Equipment' />
        <DetailsSection content={sportSections} />
        <CarouselSlider content={brands} />
      </main>
    </>
  );
};

export default Sport;
