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

const Container = styled.div`
  display : flex;
  flex-flow: row wrap;

  @media screen and (max-width: 767px) {
    display : flex;
    flex-flow: column;
  }
`;