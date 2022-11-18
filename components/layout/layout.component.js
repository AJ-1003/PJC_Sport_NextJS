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
import styled from 'styled-components';

const LayoutContainer = styled.div`
  margin: 0;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Navigation />
      {children}
      <BackToTop />
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
