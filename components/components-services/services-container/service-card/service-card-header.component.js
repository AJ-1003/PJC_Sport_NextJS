// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const ServiceCardHeader = ({ heading, subHeading }) => {
  return (
    <Header>
      <h3>{heading}</h3>
      <p>{subHeading}</p>
    </Header>
  );
};

export default ServiceCardHeader;

const Header = styled.div`
  min-height: 55px;
  font-family: 'Racing Sans One', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`;