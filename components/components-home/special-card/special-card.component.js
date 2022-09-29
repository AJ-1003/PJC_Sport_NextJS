// React
import React from 'react';

// Next
import Image from 'next/image';

// Contentful
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Card = styled.div`
  min-width:35%;
  padding: 10px;
  /* margin: 0 auto; */
  flex: 1;
`;

const Heading = styled.div`
  margin: 0 auto 0 5%;
  position: relative;
  top: 15px;
  font-family: 'Racing Sans One', cursive;
  font-size: 1.5rem;
  color: var(--red);
  background: rgba(var(--light-grey-background), 0.7);
  width: fit-content;
  padding: 1rem;
  z-index: 1;
`;

const ImageContainer = styled.div`
  margin: 0 auto;
  width: 70%;
`;

const DescriptionContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  position: relative;
  bottom: 10px;
  background: rgba(var(--red-background), 0.9);
  padding: 0.3rem 1rem 1.2rem;
  margin: 0 1rem;
  z-index: 1;
  text-align: center;
  color: #fff;
`;

const TsCs = styled.div`
  font-size: 10px;
  text-align: center;
  padding-right: 10px;
`;

const SpecialCard = ({ specialDetails }) => {

  const { title, image, altText, description } = specialDetails.fields;

  return (
    <Card>
      <Heading className='rounded-corners'>
        <h2>{title}</h2>
      </Heading>
      <ImageContainer>
        <Image className='rounded-corners' src={'https:' + image.fields.file.url} alt={altText} width='50vw' height='50vh' layout='responsive' />
      </ImageContainer>
      <DescriptionContainer className='rounded-corners'>
        {documentToReactComponents(description)}
        <TsCs>
          <span>T&apos;s & C&apos;s Apply</span>
        </TsCs>
      </DescriptionContainer>
    </Card>
  );
};

export default SpecialCard;
