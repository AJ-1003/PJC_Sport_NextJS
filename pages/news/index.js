// React
import React from 'react';

// Next
import Head from 'next/head';

// Contentful
import client from '/contentful/contentful.data';

// Components
import BrandOfMonthContainer from '../../components/components-news/brand-container/brand-container.component';
import NewsContainer from '../../components/components-news/news-container/news-container.component';
import TipsContainer from '../../components/components-news/tips-container/tips-container.component';
import HeroImage from '../../components/hero-image/hero-image.component';
import SeperationHeader from '/components/seperation-header/seperation-header.component';

// Images

// Data

// Styles

export async function getStaticProps() {

  const resHeaders = await client.getEntries({
    content_type: 'header'
  });
  const resultHeader = Array.from(resHeaders.items).filter(item => item.fields.route == '/news');

  const resNews = await client.getEntries({
    content_type: 'latestNewsAndEvents'
  });
  const resultNews = Array.from(resNews.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  const resTips = await client.getEntries({
    content_type: 'tipsAndTricks'
  });
  const resultTips = Array.from(resTips.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  const resBrand = await client.getEntries({
    content_type: 'brandOfTheMonth'
  });
  const resultBrand = Array.from(resBrand.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  return {
    props: {
      header: resultHeader,
      news: resultNews,
      tips: resultTips,
      brand: resultBrand
    },
    revalidate: 1
  };
};

const News = ({ header, news, tips, brand }) => {
  return (
    <>
      <Head>
        <title>PJC Sport & Cycles - News</title>
        <meta name='description' content='' />
        <meta name='keywords' content=''></meta>
        <meta name='robots' content='index,follow'></meta>
        <link rel='canonical' href='https://www.pjcsport.co.za/sport'></link>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <HeroImage content={header} />
        <SeperationHeader childrenLvl1={'Latest News & Events'} />
        <NewsContainer content={news} />
        <SeperationHeader childrenLvl1={'Tips & Tricks'} />
        <TipsContainer content={tips} />
        <SeperationHeader childrenLvl1={'Brand of the Month'} />
        <BrandOfMonthContainer content={brand} />
      </main>
    </>
  );
};

export default News
