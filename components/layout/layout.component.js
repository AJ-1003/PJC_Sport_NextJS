// React
import React from 'react';

// Next

// Components
import Navigation from '../navigation/navigation.component';
import Footer from '../footer/footer.component';
import BackToTop from '../../utils/button-back-to-top/button-back-to-top.component';

// Images

// Data

// Styles

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className='page-content'>
        {children}
      </div>
      <BackToTop />
      <Footer />
    </>
  );
};

export default Layout;
