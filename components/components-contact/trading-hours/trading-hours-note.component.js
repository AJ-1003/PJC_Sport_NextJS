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
      <h5>Please note that we will be closed 16 December and 25 December 2024 - 02 January 2025. We will open again on 03 January 2025.</h5>
      <br />
      <h4>Merry Christmas and a Happy New Year</h4>
    </Container>
  );
};

export default TradingHoursNote;

const Container = styled.div`
  padding-top: 2rem;
  font-family: "Montserrat", sans-serif;
  
  h4 {
    color: var(--red);
  }

  h5 {
    color: var(--black);
  }
`;