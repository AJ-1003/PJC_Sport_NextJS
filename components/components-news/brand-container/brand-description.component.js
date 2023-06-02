// React
import React from 'react';

// Next

// Contentful
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const BrandDescription = ({ description }) => {
  return (
    <Description>
      <p>{documentToReactComponents(description)}</p>
    </Description>
  );
};

export default BrandDescription;

const Description = styled.div`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`;