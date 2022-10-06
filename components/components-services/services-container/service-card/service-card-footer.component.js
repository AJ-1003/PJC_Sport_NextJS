// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Footer = styled.div`
  bottom: 0;
  text-align: center;
  padding: 2rem;
`;

const ServiceCardFooter = ({ content }) => {
  return (
    <Footer>
      {content}
    </Footer>
  );
};

export default ServiceCardFooter;
