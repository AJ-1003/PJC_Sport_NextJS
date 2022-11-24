// React
import React from 'react';

// Next

// Contentful

// Components
import SpecialCard from '../special-card/special-card.component';

// Images
// import specialsParallax from '../../../assets/home/specials.webp';

// Data

// Styles
import styled from 'styled-components';

const Container = styled.div`
  // Uncomment only for Black Friday //
  background: var(--grey);
`;

const Content = styled.div`
  padding: 2rem;
  display : flex;
  flex-flow: row wrap;
  gap: 1rem;
  width: 80%;
  margin: 0 auto;

  @media screen and (min-width: 1024px) and (max-width: 1535px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    display : flex;
    flex-flow: column wrap;
    padding: 0;
    gap: 0;
  }
`;

const SpecialsContainer = ({ content }) => {
  return (
    <Container>
      <Content>
        {content.map(special => {
          return (
            <SpecialCard key={special.sys.id} specialDetails={special} />
          )
        })}
      </Content>
    </Container>
  );
};

export default SpecialsContainer;
