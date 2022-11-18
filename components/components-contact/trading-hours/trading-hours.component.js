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
  border-radius: 0.5rem;

  @media screen and (min-width: 1024px) {

  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 60%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    border-radius: 0;
    padding-top: 2rem;
    margin: 0;
  }
`;

const TradingHours = ({ content }) => {
  return (
    <Container>
      <TradingHoursHeader />
      <TradingHoursBody content={content} />
      {/* <TradingHoursFooter /> */}
    </Container>
  );
};

export default TradingHours;
