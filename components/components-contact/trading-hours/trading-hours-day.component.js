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

const Day = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &.red {
    color: var(--red);
  }
`;

<<<<<<< HEAD
const Weekday = styled.div``;

const Time = styled.div``;
=======
const Weekday = styled.div`

`;

const Time = styled.div`

`;
>>>>>>> origin/main

const Underline = styled.div`
  height: 2px;
  background: #31313107;
`;