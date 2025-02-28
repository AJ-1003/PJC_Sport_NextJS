// React
import React, { useEffect, useRef } from 'react';

// Next

// Contentful

// Components
import TradingHoursDay from './trading-hours-day.component';
import TradingHoursDecemberDay from './trading-hours-december-day.component';
import TradingHoursNote from './trading-hours-note.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const TradingHoursBody = ({ content }) => {

  const decemberDays = [16, 24, 25, 26, 27, 28, 29, 30, 31];
  const januaryDays = [1, 2, 3];

  const currentDate = new Date();
  var todayMonth = useRef(currentDate.getMonth());
  var todayDay = useRef(currentDate.getDate());
  var currentYear = useRef(currentDate.getFullYear);

  useEffect(() => {
    const date = new Date();
    todayDay.current = date.getDate();
    todayMonth.current = date.getMonth();
  }, []);

  return (
    <Body>
      <TradingHourDays>
        {(todayMonth.current == 11 && decemberDays.includes(todayDay.current)) || (todayMonth.current == 0 && januaryDays.includes(todayDay.current))
          ?
          <>
            <TradingHoursDecemberDay date='16 December' openTime='' closingTime='' days={[16]} />
            <TradingHoursDecemberDay date='23 December' openTime='8:30' closingTime='17:00' days={[23]} />
            <TradingHoursDecemberDay date='24 December' openTime='8:30' closingTime='16:00' days={[24]} />
            {/* <TradingHoursDecemberDay date='29 December' openTime='9:00' closingTime='2:00' days={[29]} /> */}
            {/* <TradingHoursDecemberDay date='30 December' openTime='9:00' closingTime='2:00' days={[30]} /> */}
            <TradingHoursDecemberDay date={`25 Dec ${currentYear} - 2 Jan ${currentYear + 1}`} openTime='' closingTime='' days={[25, 26, 27, 28, 29, 30, 31, 1, 2]} />
            <TradingHoursDecemberDay date={`3 Jan ${currentYear + 1}`} openTime='8:30' closingTime='17:00' days={[3]} />
          </>
          :
          <>
            {content.map(day => {
              return (
                <TradingHoursDay key={day.sys.id} content={day} />
              )
            })}
          </>
        }
      </TradingHourDays>
      {/* <TradingHoursNote /> */}
      <Address>
        <h4>183 Koedoe Street</h4>
        <h5>Wierda Park, Centurion</h5>
      </Address>
    </Body>
  );
};

export default TradingHoursBody;

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

const Header = styled.div`
  padding: 2rem 0;

  h2 {
    font-family: 'Racing Sans One', sans-serif;
    color: var(--red);
    font-size: 2rem;
  }
`;