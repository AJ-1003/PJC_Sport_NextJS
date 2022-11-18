// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Header = styled.div`
  padding-bottom: 2rem;

  h2 {
    font-family: 'Racing Sans One', sans-serif;
    color: var(--red);
    font-size: 2rem;
  }
`;

const TradingHoursHeader = () => {
  return (
    <Header>
      <h4>Come on in</h4>
      <h2>We&apos;re open</h2>
      <h4>Times may vary on public holidays</h4>
    </Header>
  );
};

export default TradingHoursHeader;
