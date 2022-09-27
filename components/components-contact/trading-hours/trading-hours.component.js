// React
import React from 'react';

// Next

// Contentful

// Components
import TradingHoursBody from './trading-hours-body.component';
import TradingHoursFooter from './trading-hours-footer.component';
import TradingHoursHeader from './trading-hours-header.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  background: grey;
  margin: auto;
  text-align: center;
  padding: 2rem 0;
`;

const TradingHours = ({ content }) => {
  return (
    <Container className='rounded-corners'>
      <TradingHoursHeader />
      <TradingHoursBody content={content} />
      <TradingHoursFooter />
    </Container>
  );
};

export default TradingHours;
