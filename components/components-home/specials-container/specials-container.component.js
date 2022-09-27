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

const SpecialsContainer = ({ content }) => {
  return (
    <Container>
      {content.map(special => {
        return (
          <SpecialCard key={special.sys.id} specialDetails={special} />
        )
      })}
    </Container>
  );
};

export default SpecialsContainer;
