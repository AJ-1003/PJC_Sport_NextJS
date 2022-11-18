// React
import React from 'react';
import { useEffect } from 'react';

// Next

// Contentful

// Components

// Images

// Data
import today from '../../../functions/contact.functions';

// Styles
import styled from 'styled-components';

const Day = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &.red {
    color: var(--red);
  }
`;

const Weekday = styled.div`

`;

const Time = styled.div`

`;

const Underline = styled.div`
  height: 2px;
  background: #31313107;
`;

const TradingHoursDay = ({ content }) => {
  useEffect(() => {
    today;
  },[]);
  const { weekday, openTime, closingTime } = content.fields;
  return (
    <>
      <Day className={today == weekday ? 'bold red' : ''}>
        <Weekday>
          {weekday}
        </Weekday>
        <Time>
          {openTime == "" || openTime == null || typeof openTime == 'undefined'
            ?
            <span>{closingTime}</span>
            :
            <span>{openTime} to {closingTime}</span>}
        </Time>
      </Day>
      <Underline />
    </>
  );
};

export default TradingHoursDay;
