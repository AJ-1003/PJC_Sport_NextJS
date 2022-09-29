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
  padding: 2rem;
  display : flex;
  flex-flow: row wrap;
  background: white;
  gap: 1rem;
  width: 90%;
  margin: 0 auto;
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
