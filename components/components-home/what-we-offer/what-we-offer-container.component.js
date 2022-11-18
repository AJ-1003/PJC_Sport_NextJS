// React
import React from 'react';

// Components
import WhatWeOfferCard from './what-we-offer-card.component';

// Images

// Data

// Styles
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const WhatWeOfferContainer = ({ content }) => {
  return (
    <Container>
      {content.map(card => (
        <WhatWeOfferCard key={card.sys.id} cardDetails={card} />
      )
      )}
    </Container>
  );
};

export default WhatWeOfferContainer;
