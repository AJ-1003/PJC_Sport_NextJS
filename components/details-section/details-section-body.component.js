// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Body = styled.div`

`;

const DetailsSectionBody = ({ description, features }) => {
  return (
    <Body>
      <p>{description}</p>
      <ul>
        {features.map(feature => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </Body>
  );
};

export default DetailsSectionBody;

