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
  font-family: 'Montserrat', sans-serif;
  bottom: 0;
  text-align: center;
  min-height: 220px;
  
  li {
    list-style: none;
  }
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
