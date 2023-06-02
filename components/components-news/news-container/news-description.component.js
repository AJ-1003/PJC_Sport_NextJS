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

const NewsDescription = ({ description }) => {
  return (
    <Description>
      <p>{documentToReactComponents(description)}</p>
    </Description>
  );
};

export default NewsDescription;

const Description = styled.div`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
`;