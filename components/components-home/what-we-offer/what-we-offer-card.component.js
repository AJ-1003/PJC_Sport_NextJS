// React
import React, { useRef } from 'react';

// Next

// Components
import ButtonLink from '/utils/button-link/button-link.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const WhatWeOfferCard = ({ cardDetails }) => {
  let ref = useRef(null);
  const { title, contentText, altText, image, toPage } = cardDetails.fields;
  return (
    <Card
      // className='rounded-corners'
      backgroundImg={'https:' + image.fields.file.url}>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardBody>
        <p>{contentText}</p>
      </CardBody>
      <CardFooter>
        <ButtonLink to={toPage} color='--red' fill={true}>
          View More
        </ButtonLink>
      </CardFooter>
    </Card>
  );
};

export default WhatWeOfferCard;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: end;
  min-height: 350px;
  margin: 0 auto;
  padding: 2rem;
  color: #fff;
  background: linear-gradient(270deg, rgba(var(--grey-background),0.6) 60%, rgba(var(--grey-background),0.6) 100%), url(${props => props.backgroundImg}) center / cover no-repeat, transparent;

  @media screen and (min-width: 1024px) {
    width: 25%;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 50%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const CardHeader = styled.div`
  font-family: 'Racing Sans One', cursive;
  font-size: 1.5rem;
  text-align: center;
`;

const CardBody = styled.div`
  font-family: 'Montserrat', sans-serif;
  bottom: 0;
  text-align: center;
  min-height: 120px;
`;

const CardFooter = styled.div`
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2rem;
`;