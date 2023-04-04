// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const ServiceCardBody = ({ content }) => {
  return (
    <Body>
      <Items>
        {content.map(item => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </Items>
    </Body>
  );
};

export default ServiceCardBody;

const Body = styled.div`
  font-family: 'Montserrat', sans-serif;
  min-height: 300px;
`;

const Items = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 10px;

  li {
    list-style: none;
    text-align: center;
  }
`;