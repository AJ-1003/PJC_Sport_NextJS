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
  margin: 0 20%;
`;

const TradingHourDays = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const TradingHoursBody = ({ content }) => {
  return (
    <Body>
      <TradingHourDays>
        {content.map(day => {
          return (
            <TradingHoursDay key={day.sys.id} content={day} />
          )
        })}
      </TradingHourDays>
      <div className='address'>
        <h3>183 Koedoe Street</h3>
        <h4>Wierda Park, Centurion</h4>
      </div>
    </Body>
  );
};

export default TradingHoursBody;
