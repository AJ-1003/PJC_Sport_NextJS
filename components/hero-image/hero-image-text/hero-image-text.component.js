// React
import React from 'react';

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const HeaderTextContainer = styled.div`
  
`;

const HeroImageText = ({ colouredHeading, heading, contentText }) => {
  return (
    <HeaderTextContainer>
      {heading == null || heading == undefined || heading == ''
        ?
        <h1>
          <span>{colouredHeading}</span>
        </h1>
        :
        <h1>
          <span>{colouredHeading}</span>
          <span>{heading}</span>
        </h1>
      }
      <h4>{contentText}</h4>
    </HeaderTextContainer>
  );
};

export default HeroImageText;
