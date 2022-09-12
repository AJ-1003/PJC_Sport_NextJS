// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';
import TradingHoursDay from './trading-hours-day.component';

const Body = styled.div`

`;

const TradingHoursBody = () => {
  return (
    <Body>
      <div className='trading-hours'>
        <TradingHoursDay />
      </div>
      <div className='address'>
        <h3>Address 1</h3>
        <h4>Address 2</h4>
      </div>
    </Body>
  );
};

export default TradingHoursBody;
