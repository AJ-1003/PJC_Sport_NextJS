// React
import React from 'react';

// Next
import Head from 'next/head';

// Contentful
import client from '/contentful/contentful.data';

// Components
import CarouselSlider from '../../components/carousel/carousel.component';
import BicycleRangeContainer from '../../components/components-bicycles/bicycle-range/bicycle-range-container.component';
import DetailsSection from '../../components/details-section/details-section.component';
import HeroImage from '../../components/hero-image/hero-image.component';
import SeperationHeader from '../../components/seperation-header/seperation-header.component';

// Images

// Data

// Styles

export async function getStaticProps() {

  const resHeaders = await client.getEntries({
    content_type: 'header'
  });
  const resultHeader = Array.from(resHeaders.items).filter(item => item.fields.route == '/bicycles');

  const resBicycleRanges = await client.getEntries({
    content_type: 'bicycleRanges'
  });
  const resultBicycleRanges = Array.from(resBicycleRanges.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  const resBrands = await client.getEntries({
    content_type: 'bicycleBrands'
  });
  const resultBrands = Array.from(resBrands.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  const resBicycleSections = await client.getEntries({
    content_type: 'bicycleSection'
  });
  const resultBicycleSections = Array.from(resBicycleSections.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  const resBicycles = await client.getEntries({
    content_type: 'bicycle'
  });
  const resultBicyclesToBeSorted = function () {
    return Array.from(resBicycles.items).sort((a, b) => {
      if (a.fields.brand == b.fields.brand) {
        if (a.fields.priceNow === b.fields.priceNow) { return 0 }
        return (a.fields.priceNow < b.fields.priceNow) ? -1 : 1;
      } else {
        return (a.fields.brand < b.fields.brand) ? -1 : 1;
      }
    });
  };
  const resultBicycles = resultBicyclesToBeSorted();

  const resAccessoriesGear = await client.getEntries({
    content_type: 'accessoriesAndGearSection'
  });
  const resultAccessoriesGear = Array.from(resAccessoriesGear.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  return {
    props: {
      header: resultHeader,
      bicycleRanges: resultBicycleRanges,
      brands: resultBrands,
      bicycleSections: resultBicycleSections,
      bicycles: resultBicycles,
      accessoriesGear: resultAccessoriesGear
    },
    revalidate: 1
  };
};

const Bicycles = ({ header, bicycleRanges, brands, bicycleSections, bicycles, accessoriesGear }) => {
  const type = 'bicycles';
  return (
    <>
      <Head>
        <title>PJC Sport & Cycles - Bicycles</title>
        <meta name="description" content='Looking for affordable and reliable mountain bikes? We stock a wide range of mountain bikes for both kids and adults ranging from 12" to 29".
        Including the following brands: Merida, Avalanche, Signal, Apex, Axis, Silverback, Titan Racing, Muna, Momsen.' />
        <meta name="robots" content="index,follow"></meta>
        <link rel="canonical" href="https://www.pjcsport.co.za/bicycles"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HeroImage content={header} />
        <SeperationHeader childrenLvl1='Bicycle Ranges' />
        <BicycleRangeContainer content={bicycleRanges} />
        <CarouselSlider content={brands} />
        <DetailsSection content={bicycleSections} panelContent={bicycles} type={type} />
        <SeperationHeader childrenLvl1='Accessories & Gear' />
        <DetailsSection content={accessoriesGear} />
      </main>
    </>
  )
};

export default Bicycles;