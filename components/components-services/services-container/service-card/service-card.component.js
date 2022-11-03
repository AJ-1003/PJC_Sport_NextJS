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
  gap: 1rem;
  justify-content: end;
  width: 25%;
  /* height: 350px; */
  margin: 0 auto;
  padding: 2rem;
  color: #000;
`;

const ServiceCard = ({ serviceDetails }) => {
  const { heading, subHeading, serviceItems, price } = serviceDetails.fields;
  return (
    <Card>
      <ServiceCardHeader content={heading} />
      <ServiceCardBody content={serviceItems} />
      <ServiceCardFooter content={price} />
    </Card>
  );
};

export default ServiceCard;
