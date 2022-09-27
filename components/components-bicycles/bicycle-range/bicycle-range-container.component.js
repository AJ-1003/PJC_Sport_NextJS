// React
import React from 'react';

// Next

// Contentful

// Components
import BicycleRangeCard from './bicycle-range-card.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  display : flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  /* gap: 10px; */
`;

const BicycleRangeContainer = ({ content }) => {
  return (
    <Container>
      {content.map(bicycleRange => {
        return (
          <BicycleRangeCard key={bicycleRange.sys.id} bicycleRangeDetails={bicycleRange} />
        )
      })}
    </Container>
  );
};

export default BicycleRangeContainer;
