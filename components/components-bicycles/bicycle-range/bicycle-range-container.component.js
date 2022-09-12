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
  /* gap: 10px; */
`;

const BicycleRangeContainer = () => {
  return (
    <Container>
      <BicycleRangeCard/>
      <BicycleRangeCard/>
      <BicycleRangeCard/>
      <BicycleRangeCard/>
      <BicycleRangeCard/>
      <BicycleRangeCard/>
      <BicycleRangeCard/>
    </Container>
  );
};

export default BicycleRangeContainer;
