// React
import React from 'react';

// Next

// Contentful

// Components
import ServiceCard from '../service-card/service-card.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  display : flex;
  flex-flow: row wrap;
  background:white;
  gap: 10px;
`;

const content = {
  header: 'Header',
  body: 'Body',
  footer: 'Footer'
}

const ServicesContainer = () => {
  return (
    <Container>
      <ServiceCard content={content} />
      <ServiceCard content={content} />
      <ServiceCard content={content} />
      <ServiceCard content={content} />
    </Container>
  );
};

export default ServicesContainer;
