// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Header = styled.div`
  font-family: 'Racing Sans One', cursive;
  /* font-size: 1.5rem; */
  text-align: center;
  /* min-height: 110px; */

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`;

const ServiceCardHeader = ({ content }) => {
  return (
    <Header>
      <h3>{content}</h3>
    </Header>
  );
};

export default ServiceCardHeader;
