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
  display: flex;
  flex-direction: column;
  gap: 5px;

  p {
    margin: 0;
  }
`;

const TradingHoursFooter = () => {
  return (
    <Footer>
      <p className='mx-0'>Contact us</p>
      <p className='mx-0'>012 653 1200</p>
      <p className='mx-0'>info@pjcsport.co.za</p>
    </Footer>
  );
};

export default TradingHoursFooter;
