// React
import Head from 'next/head';
import React from 'react';

// Next

// Contentful

// Components
import Layout from '../components/layout/layout.component';

// Images

// Data

// Styles
import '../styles/globals.css';
import '../styles/404.styles.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" type="image/x-icon" href="/assets/favicon/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon/favicon-16x16.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
