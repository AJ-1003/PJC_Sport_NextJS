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
import ServicesContainer from '../../components/components-services/services-container/services-container.component';

// Images

// Data

// Styles
import styled from 'styled-components';

export async function getStaticProps() {

  const resHeaders = await client.getEntries({
    content_type: 'header'
  });
  const resultHeader = Array.from(resHeaders.items).filter(item => item.fields.route == '/services');

  const resServices = await client.getEntries({
    content_type: 'services'
  });
  const resultServices = Array.from(resServices.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  const resServiceSection = await client.getEntries({
    content_type: 'serviceSection'
  });
  const resultServiceSection = Array.from(resServiceSection.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  const resBrands = await client.getEntries({
    content_type: 'servicesBrands'
  });
  const resultBrands = Array.from(resBrands.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  return {
    props: {
      header: resultHeader,
      services: resultServices,
      serviceSections: resultServiceSection,
      brands: resultBrands
    },
    revalidate: 1
  };
};

const Services = ({ header, services, serviceSections, brands }) => {
  return (
    <>
      <Head>
        <title>PJC Sport & Cycles - Services</title>
        <meta name="description" content="Our services include tubeless conversions, full bicycle services, pivot services, suspension services on 
        selected suspension models, replacing components, and any other general maintenance work." />
        <meta name="robots" content="index,follow"></meta>
        <link rel="canonical" href="https://www.pjcsport.co.za"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroImage content={header} />
        <SeperationHeader childrenLvl1='Services Offered' />
        <ServicesContainer content={services} />
        <DetailsSection content={serviceSections} />
        <CarouselSlider content={brands} />
      </main>
    </>
  );
};

export default Services;
