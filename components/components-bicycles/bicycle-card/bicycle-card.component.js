// React
import React from 'react';

// Next
import Image from 'next/image';
import Link from 'next/link';

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';
import ButtonLink from '../../../utils/button-link/button-link.component';

const Card = styled.div`
  
`;

const CardContent = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const CardLeft = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

const CardRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: rgba(var(--grey-background), 0.1);
  padding: 0 1rem;
`;

const Heading = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
`;

const Description = styled.div`
  height: 40%;
  display: flex;
  /* align-items: center; */
  margin: 0.5rem 0;

  p {
    margin: 0;
  }
`;

const Details = styled.div`
  height: 15%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

const AvailableSizes = styled.div`
  display: flex;
  flex-direction: row;
`;

const Sizes = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-decoration: none;
  list-style: none;
  margin: 0 auto;
  padding-left: 5px;
  width: fit-content;

  li {
    padding-right: 5px;
  }
`;

const Overlay = styled.div`
  background: linear-gradient(270deg, rgba(31,31,31,0.5) 50%, rgba(71,71,71,0.7) 100%), url(${props => props.backgroundImg}) center / cover no-repeat;
`;

const PriceContainer = styled.div`
  
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
`;

const PriceWas = styled.div`
  font-weight: 400;
  text-decoration: line-through;
  color: #808080;
`;

const PriceNow = styled.div`
  
`;

const ViewMore = styled.div`
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 0;
`;

const TsCs = styled.span`
  font-size: 10px;
`;

const LineBreak = styled.div`
  background: #313131;
  height: 1px;
  width: 80%;
  margin: 5px auto;
`;

const BicycleCard = ({ content }) => {
  const {
    name,
    brand,
    model,
    description,
    cardImage,
    cardImageWidth,
    cardImageHeight,
    noStockImage,
    availableSizes,
    priceNow,
    priceWas,
    altText,
    inStock,
    onSpecial } = content.fields;
  return (
    <Card>
      <CardContent>
        <CardLeft>
          {inStock ?
            <>
              <Image className='bicycle-card-img rounded-corners' src={'https:' + cardImage.fields.file.url} width={cardImageWidth} height={cardImageHeight} alt={altText} />
            </>
            :
            <Overlay className='rounded-corners' backgroundImg={'https:' + cardImage.fields.file.url} >
              <Image className='bicycle-card-img rounded-corners' src={'https:' + noStockImage.fields.file.url} width={cardImageWidth} height={cardImageHeight} alt={altText} />
            </Overlay>
          }
        </CardLeft>
        <CardRight className='rounded-corners'>
          <Heading>
            <h2>{brand} {model}</h2>
          </Heading>
          <Description>
            <p>{description}</p>
          </Description>
          <Details>
            <AvailableSizes>
              <div>
                <span className='bold'>Avaialable sizes: </span>
              </div>
              <Sizes>
                {availableSizes.map(size => {
                  return (
                    <li key={size}>{size}</li>
                  )
                })}
              </Sizes>
            </AvailableSizes>
            <PriceContainer>
              {onSpecial ?
                <Price>
                  <PriceWas>Was - R{priceWas}.00</PriceWas>
                  <PriceNow className='bold'>Now - R{priceNow}.00</PriceNow>
                </Price>
                :
                <PriceNow className='bold'>R{priceNow}.00</PriceNow>
              }
            </PriceContainer>
          </Details>
          <ViewMore>
            <TsCs>Other models available. T&apos;s &amp; C&apos;s apply</TsCs>
            <ButtonLink to={'/bicycles/' + name} color='--orange' fill={true}>
              View Bicycle
            </ButtonLink>
          </ViewMore>
        </CardRight>
      </CardContent>
      <LineBreak />
    </Card>
  );
};

export default BicycleCard;
