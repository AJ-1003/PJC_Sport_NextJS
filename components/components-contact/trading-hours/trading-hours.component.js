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
  width: 40%;
  background: rgba(var(--grey-background), 0.2);
  margin: 2rem auto;
  text-align: center;
  padding-top: 2rem;
`;

const TradingHours = ({ content }) => {
  return (
    <Container className='rounded-corners'>
      <TradingHoursHeader />
      <TradingHoursBody content={content} />
      {/* <TradingHoursFooter /> */}
    </Container>
  );
};

export default TradingHours;
