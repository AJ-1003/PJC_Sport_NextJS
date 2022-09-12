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

const DetailsSectionBody = ({ details }) => {
  return (
    <Body>
      <p>{details}</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </Body>
  );
};

export default DetailsSectionBody;
