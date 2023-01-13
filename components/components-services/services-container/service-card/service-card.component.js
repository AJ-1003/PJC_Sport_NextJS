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
  color: #fff;
  padding: 1rem 0.5rem 1rem;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0.5rem 0;
  }
`;

const Header = styled.div`
  color: #000;
  padding: 2rem 0;
  background: linear-gradient(0deg, rgba(var(--blue-background),0.8) 20%, rgba(var(--grey-background),0.8) 100%);
  border-radius: 0.5rem 0.5rem 0 0;

  @media screen and (max-width: 767px) {
    border-radius: 0;
  }
`;

const Body = styled.div`
  padding: 0 1rem;
  background: linear-gradient(180deg, rgba(var(--blue-background),0.8) 10%, rgba(var(--grey-background),0.9) 40%), url('/anton-savinov-2Qlj2Gaft7w-unsplash.jpg') center / cover no-repeat;
  

  @media screen and (min-width: 767px) and (max-width: 1024px) {
    min-height: 390px;
  }

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    min-height: 0;
  }
`;

const Footer = styled.div`
  color: #000;
  padding: 2rem 0;
  background: linear-gradient(0deg, rgba(var(--blue-background),0.8) 20%, rgba(var(--grey-background),0.8) 100%);
  border-radius: 0 0 0.5rem 0.5rem;

  @media screen and (max-width: 767px) {
    border-radius: 0;
  }
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
