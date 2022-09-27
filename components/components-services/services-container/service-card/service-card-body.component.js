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

const ServiceCardBody = ({ content }) => {
  return (
    <Body>
      <ul>
        {content.map(item => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>
    </Body>
  );
};

export default ServiceCardBody;
