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
  margin: 0 10%;
  font-family: "Montserrat", sans-serif;
`;

const TradingHourDays = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Address = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
      <Address>
        <h4>183 Koedoe Street</h4>
        <h5>Wierda Park, Centurion</h5>
      </Address>
    </Body>
  );
};

export default TradingHoursBody;
