// React
import React, { useEffect, useRef } from 'react';

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

  const decemberDays = [24, 25, 26, 27, 28, 29, 30, 31];
  const januaryDays = [1, 2, 3];

  const currentDate = new Date();
  var todayMonth = useRef(currentDate.getMonth());
  var todayDay = useRef(currentDate.getDate());
  
  useEffect(() => {
    const date = new Date();
    todayMonth.current = date.getMonth();
    todayDay.current = date.getDate();
  }, []);

  return (
    <Header>
      {(todayMonth.current == 11 && decemberDays.includes(todayDay.current)) || (todayMonth.current == 0 && januaryDays.includes(todayDay.current))
        ?
        <>
          <h4>Please take note of our times for</h4>
          <h2>December</h2>
        </>
        :
        <>
          <h4>Come on in</h4>
          <h2>We&apos;re open</h2>
          <h4>Times may vary on public holidays</h4>
        </>}
    </Header>
  );
};

export default TradingHoursHeader;
