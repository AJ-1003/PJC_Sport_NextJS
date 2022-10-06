// React
import React from 'react';

// Next

// Contentful

// Components
import ServiceCard from './service-card/service-card.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ServicesContainer = ({ content }) => {
  return (
    <Container>
      {content.map(service => {
        return (
          <ServiceCard key={service.sys.id} serviceDetails={service} />
        )
      })}
    </Container>
  );
};

export default ServicesContainer;
