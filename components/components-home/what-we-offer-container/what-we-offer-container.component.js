// React
import React from 'react';

// Components
import WhatWeOfferCard from '../what-we-offer-card/what-we-offer-card.component';

// Images

// Data

// Styles
import styled from "styled-components";

const WWOContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 90%;
  margin: 1rem auto;
`

const WhatWeOfferContainer = ({ cardDetails }) => {
  return (
    <WWOContainer>
      {cardDetails.map(card => {
        return (
          <WhatWeOfferCard key={card.order} cardDetails={card} />
        )
      })}
    </WWOContainer>
  );
};

export default WhatWeOfferContainer;
