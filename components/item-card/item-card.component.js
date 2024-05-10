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

const ItemCard = ({ content }) => {
  const { name, description, price, image, tsCs } = content.fields;

  var getDescriptionText = (desc) => {
    if (typeof window !== 'undefined') {
      var w = window.innerWidth;
    }

    var shortDescription;
    if (w >= 1024 && w < 1280 && desc.length > 130) {
      shortDescription = desc.substr(0, 135) + '...';
    } else if (desc.lenght > 200) {
      shortDescription = desc.substr(0, 200) + '...';
    } else {
      return desc;
    }
    return shortDescription;
  };

  return (
    <Card>
      <CardContent>
        <CardLeft>
          <Image
            className="rounded-corners"
            src={'https:' + image.fields.file.url}
            width="350px"
            height="250px"
            alt="product"
            title="product"
            loading="eager"
          />
        </CardLeft>
        <CardRight>
          <Heading>
            <h2>{name}</h2>
          </Heading>
          <Description>{documentToReactComponents(description)}</Description>
          <Details>
            <PriceContainer>
              <Price>
                <span className="bold">From: </span>
                <PriceNow className="bold">R{price}.00</PriceNow>
              </Price>
            </PriceContainer>
          </Details>
          <TsCs>
            T&apos;s & C&apos;s apply.
          </TsCs>
        </CardRight>
      </CardContent>
      <LineBreak />
    </Card>
  );
};

export default ItemCard;

const Card = styled.div`
  height: auto;
`;

const CardContent = styled.div`
  width: 80%;
  margin: 1rem auto;
  /* padding: 1rem; */
  display: flex;
  flex-direction: row;
  gap: 1rem;
  height: auto;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 90%;
    margin: 1rem auto;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    gap: 0;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    background: rgba(var(--dark-grey-background), 0.2);
    border-radius: 0;
  }
`;

const CardLeft = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 60%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    background: rgba(var(--light-grey-background), 0.2);
    padding: 1rem 0;
  }
`;

const CardRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(var(--grey-background), 0.1);
  padding: 0 1rem;
  position: relative;
  border-radius: 0.5rem;

  @media screen and (max-width: 767px) {
    border-radius: 0;
  }
`;

const Heading = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 25%;
    width: 80%;
  }

  @media screen and (max-width: 767px) {
    height: 25%;
    width: 80%;
  }
`;

const Description = styled.div`
  height: 40%;
  display: flex;
  /* align-items: center; */
  margin: 0.5rem 0;
  white-space: wrap;
  overflow: hidden;
  /* text-overflow: ellipsis; */

  p {
    margin: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

const Details = styled.div`
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 2rem;
  margin: auto 0;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
    height: 25%;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 25%;
  }
`;

const PriceContainer = styled.div`
  margin-top: auto;
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: start;
  align-items: center;
`;

const PriceNow = styled.div``;

const TsCs = styled.span`
  max-height: 20%;
  margin-top: auto;
  font-size: 10px;
  width: 80%;
  margin-bottom: 0.5rem;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 70%;
  }

  @media screen and (max-width: 767px) {
    width: 60%;
  }
`;

const LineBreak = styled.div`
  background: #313131;
  height: 1px;
  width: 80%;
  margin: 5px auto;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
