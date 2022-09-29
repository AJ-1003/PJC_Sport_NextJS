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

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
