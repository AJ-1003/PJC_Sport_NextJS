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
  border: 1px solid black;
  background: #ececec;
  min-width:35%;
  padding: 10px;
  margin: auto;
  flex: 1;
`;

const ServiceCard = ({ serviceDetails }) => {

  const { heading, serviceItems, price } = serviceDetails.fields;

  return (
    <Card>
      <ServiceCardHeader content={heading} />
      <ServiceCardBody content={serviceItems} />
      <ServiceCardFooter content={price} />
    </Card>
  );
};

export default ServiceCard;
