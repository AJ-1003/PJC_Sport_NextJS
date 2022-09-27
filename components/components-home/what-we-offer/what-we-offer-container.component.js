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
  justify-content: space-between;
  gap: 10px;
  width: 90%;
  margin: 1rem auto;
`

const WhatWeOfferContainer = ({ content }) => {
  return (
    <Container>
      {content.map(card => {
        return (
          <WhatWeOfferCard key={card.sys.id} cardDetails={card} />
        )
      })}
    </Container>
  );
};

export default WhatWeOfferContainer;
