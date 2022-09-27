// React
import React from 'react';

// Next
import Image from 'next/image';

// Components
import ButtonLink from '/utils/button-link/button-link.component';

// Images

// Data

// Styles
import styled from "styled-components";

const Card = styled.div`
  margin: 5px;
  width: 25%;
  margin: 0 auto;
  padding: 5px;
  background: lightgray;

  .card-header {
    width: auto;

    .card-image {
      width: 50px;
    }
  }

  .card-body {
    text-align: center;
    min-height: 120px;
  }

  .card-footer {
    text-align: center;
    padding: 1rem;
  }
`

const WhatWeOfferCard = ({ cardDetails }) => {

  const {title, contentText, altText, image, toPage} = cardDetails.fields;

  return (
    <Card>
      <div className='card-header'>
        <Image className='card-image rounded-corners' src={'https:' + image.fields.file.url} alt={altText} width='50vw' height='50vh' layout='responsive' />
      </div>
      <div className='card-body'>
        <div className='card-heading'>
          <h4>{title}</h4>
        </div>
        <div className='card-content'>
          <p>{contentText}</p>
        </div>
      </div>
      <div className='card-footer'>
        <ButtonLink to={toPage} color='--red'>
          View More
        </ButtonLink>
      </div>
    </Card>
  );
};

export default WhatWeOfferCard;