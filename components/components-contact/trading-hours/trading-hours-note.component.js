// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const TradingHoursNote = () => {
  return (
    <Container>
      <h5>Please note that we will not be open on Saturday 8th April and Monday 10th April. We will re-open again on Tuesday 11th April.</h5>
    </Container>
  );
};

export default TradingHoursNote;

const Container = styled.div`
  padding-top: 2rem;
  color: var(--red);
  font-family: "Montserrat", sans-serif;
`;