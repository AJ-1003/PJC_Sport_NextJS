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

const ServiceCard = ({ content }) => {

  const { header, body, footer } = content;

  return (
    <Card>
      <ServiceCardHeader details={header} />
      <ServiceCardBody details={body} />
      <ServiceCardFooter details={footer} />
    </Card>
  );
};

export default ServiceCard;
