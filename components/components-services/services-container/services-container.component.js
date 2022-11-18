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
  flex-direction: row;
  flex-wrap: wrap;

  @media screen and (min-width: 1024px) {

  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
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
