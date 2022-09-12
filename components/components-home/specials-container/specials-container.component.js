// React
import React from 'react';

// Next

// Contentful

// Components
import SpecialCard from '../special-card/special-card.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  display : flex;
  flex-flow: row wrap;
  background:white;
  gap: 10px;
  width: 90%;
  margin: 1rem auto;
`;

const SpecialsContainer = ({ specialsDetails }) => {
  return (
    <Container>
      {specialsDetails.map(special => {
        return (
          <SpecialCard key={special.order} specialDetails={special} />
        )
      })}
    </Container>
  );
};

export default SpecialsContainer;
