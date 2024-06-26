// React
import React from 'react';

// Next
import Head from 'next/head';

// Contentful
import client from '/contentful/contentful.data';

// Components
import BalletItemsContainer from '../../components/components-ballet/ballet-items-container/ballet-items-container.component';
import HeroImage from '../../components/hero-image/hero-image.component';
import SeperationHeader from '../../components/seperation-header/seperation-header.component';

// Images

// Data

// Styles

export async function getStaticProps() {

  const resHeaders = await client.getEntries({
    content_type: 'header'
  });
  const resultHeader = Array.from(resHeaders.items).filter(item => item.fields.route == '/ballet');

  const resBalletItems = await client.getEntries({
    content_type: 'ballet'
  });
  const resultBalletItems = Array.from(resBalletItems.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  return {
    props: {
      header: resultHeader,
      ballet: resultBalletItems
    },
    revalidate: 1
  };
};

const Ballet = ({ header, ballet }) => {
  return (
    <>
      <Head>
        <title>PJC Sport & Cycles - Ballet</title>
        <meta name='description' content='We stock a variety of sizes and colours in ballet outfits including leotards, ballet shoes, anklets, stockings, tights, ballet jersies, ballet skirts and bags.
        Available accessories include hair gel (LaPebra), hair nets, hair pins (bobby pins) and ribbons.' />
        <meta name='robots' content='index,follow'></meta>
        <link rel='canonical' href='https://www.pjcsport.co.za/ballet'></link>
        <link rel='shortcut icon' type='image/x-icon' href='/favicon.ico' />
      </Head>

      <main>
        <HeroImage content={header} />
        <SeperationHeader childrenLvl1='Outfits & Accessories' />
        <BalletItemsContainer content={ballet} />
      </main>
    </>
  );
};

export default Ballet;
