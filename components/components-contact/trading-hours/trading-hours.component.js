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
  width: 80%;
  background: grey;
  margin: 0 auto;
  text-align: center;
`;

const TradingHours = () => {
  return (
    <Container>
      <TradingHoursHeader />
      <TradingHoursBody />
      <TradingHoursFooter />
    </Container>
  );
};

export default TradingHours;
