// React
import React, {useEffect, useRef} from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const TradingHoursDecemberDay = ({ date, openTime, closingTime, days }) => {

  const decemberDays = Array.from(days);

  const currentDate = new Date();
  var todayDay = useRef(currentDate.getDate());

  useEffect(() => {
    const date = new Date();
    todayDay.current = date.getDate();
  }, []);

  return (
    <>
      <Day className={decemberDays.includes(todayDay.current) ? 'bold red' : ''}>
        <Weekday>
          {date}
        </Weekday>
        <Time>
          {openTime == "" || openTime == null || typeof openTime == 'undefined'
            ?
            <span>Closed</span>
            :
            <span>{openTime} AM to {closingTime} PM</span>}
        </Time>
      </Day>
      <Underline />
    </>
  );
};

export default TradingHoursDecemberDay;

const Day = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &.red {
    color: var(--red);
  }
`;

const Weekday = styled.div``;

const Time = styled.div``;

const Underline = styled.div`
  height: 2px;
  background: #31313107;
`;