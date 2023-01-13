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
  font-size: 1.3rem;
`;

const ServiceCardFooter = ({ content }) => {
  return (
    <Footer className='bold'>
      {content}
    </Footer>
  );
};

export default ServiceCardFooter;
