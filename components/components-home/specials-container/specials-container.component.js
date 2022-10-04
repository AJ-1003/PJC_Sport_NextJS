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
  /* background: url('../../../assets/home/specials.webp'); */
  /* background: linear-gradient(270deg, rgba(var(--grey-background),0.6) 10%, rgba(var(--grey-background),0.5) 100%); */
`;

const Content = styled.div`
  padding: 2rem;
  display : flex;
  flex-flow: row wrap;
  gap: 1rem;
  width: 90%;
  margin: 0 auto;
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
