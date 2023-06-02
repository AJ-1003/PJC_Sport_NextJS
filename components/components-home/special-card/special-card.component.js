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

const SpecialCard = ({ specialDetails }) => {
  const { title, image, altText, description } = specialDetails.fields;
  return (
    <Card>
      <Heading className='rounded-corners'>
        <h2>{title}</h2>
      </Heading>
      <ImageContainer>
        <Image
          // className='rounded-corners'
          src={'https:' + image.fields.file.url}
          alt={altText}
          width='500'
          height='500'
          responsive='true'
          title={altText} />
      </ImageContainer>
      <DescriptionContainer className='rounded-corners'>
        <DescriptionText>
          {documentToReactComponents(description)}
        </DescriptionText>
        <TsCs>
          <span>
            {/* Offer only valid from 05/12/2022 - 30/12/2022.  */}
            T&apos;s & C&apos;s Apply
          </span>
        </TsCs>
      </DescriptionContainer>
    </Card>
  );
};

export default SpecialCard;

const Card = styled.div`
  min-width: 35%;
  max-width: 50%;
  padding: 10px;
  margin: 0 auto;
  flex: 1;

  @media screen and (max-width: 767px) {
    padding: 0;
    width: 100%;
    margin: 0;
    max-width: 100%;
  }
`;

const Heading = styled.div`
  margin: 0 auto 0 5%;
  position: relative;
  top: 15px;
  font-family: 'Racing Sans One', sans-serif;
  font-size: 1.5rem;
  color: var(--red);
  background: rgba(var(--light-grey-background), 0.7);
  width: fit-content;
  padding: 1rem;
  z-index: 1;

  @media screen and (min-width: 1024px) and (max-width: 1535px) {
    font-size: 1.2rem;
    left: 5%;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1rem;
    left: 0;
    top: 0;
    margin: 0;
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
    text-align: center;
  }

  @media screen and (max-width: 767px) {
    font-size: 1rem;
    left: 0;
    top: 0;
    margin: 0;
    width: 100%;
    border-radius: 0;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 70%;

  img {
    border-radius: 0.5rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    margin: 0;
    width: 100%;

    img {
      border-radius: 0;
    }
  }

  @media screen and (max-width: 767px) {
    margin: 0;
    width: 100%;
    
    img {
      border-radius: 0;
    }
  }
`;

const DescriptionContainer = styled.div`
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  position: relative;
  bottom: 10px;
  background: rgba(var(--red-background), 0.9);
  padding: 0.3rem 1rem 1.2rem;
  margin: 0 1rem;
  z-index: 1;
  text-align: center;
  color: #fff;
  border-radius: 0.5rem;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    bottom: 0;
    width: 100%;
    margin: 0;
    border-radius: 0 0 0.5rem 0.5rem;
  }

  @media screen and (max-width: 767px) {
    bottom: 0;
    width: 100%;
    margin: 0;
    border-radius: 0;
  }
`;

const DescriptionText = styled.div`
  @media screen and (min-width: 1024px) and (max-width: 1535px) {
    min-height: 70px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 0.8rem;
    min-height: 70px;
  }

  @media screen and (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

const TsCs = styled.div`
  font-size: 10px;
  text-align: center;
  padding-right: 10px;
`;