// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Day = styled.div`

`;

const TradingHoursDay = () => {
  return (
    <Day>
      <div className='day-info'>
        <div className='weekday'>
          <p>Day</p>
        </div>
        <div className='day-time'>
          <p>Time</p>
        </div>
      </div>
      <div className='day-underline' />
    </Day>
  );
};

export default TradingHoursDay;
