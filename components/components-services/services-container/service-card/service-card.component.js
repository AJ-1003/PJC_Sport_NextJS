// React
import React from 'react';

// Next

// Contentful

// Components
import ServiceCardBody from './service-card-body.component';
import ServiceCardFooter from './service-card-footer.component';
import ServiceCardHeader from './service-card-header.component';

// Images

// Data

// Styles
import styled from 'styled-components';


const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 25%;
  margin: 0 auto;
  color: #000;
  background: linear-gradient(60deg, rgba(var(--blue-background),0.5) 20%, rgba(var(--grey-background),0.8) 100%);
`;

const Header = styled.div`
  padding: 2rem 0 1rem;
`;

const Body = styled.div`
  padding: 0 1rem;
`;

const Footer = styled.div`
  padding: 1rem 0 2rem;
`;

const ServiceCard = ({ serviceDetails }) => {
  const { heading, subHeading, serviceItems, price } = serviceDetails.fields;
  return (
    <Card>
      <Header>
        <ServiceCardHeader heading={heading} subHeading={subHeading} />
      </Header>
      <Body>
        <ServiceCardBody content={serviceItems} />
      </Body>
      <Footer>
        <ServiceCardFooter content={price} />
      </Footer>
    </Card>
  );
};

export default ServiceCard;
