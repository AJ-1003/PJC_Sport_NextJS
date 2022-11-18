// React
import React from 'react';
import { isDesktop, isMobile, MobileView } from 'react-device-detect';

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


/* ---------------< Larger than mobile >--------------- */
const Card = styled.div`
  
`;

const CardContent = styled.div`
  width: 80%;
  margin: 1rem auto;
  /* padding: 1rem; */
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
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
    width: 40%;
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

const SpecialBadge = styled.div`
  overflow: hidden;
  position: absolute;
  width: 150px;
  height: 150px;
  top: 0;
  right: 0;

  .badge-content {
    left: 5px;
    top: 20px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    display: block;
    width: 200px;
    padding: 10px 0;
    background-color: var(--red-hover);
    box-shadow: 0 0px 10px ;
    color: #fff;
    text-shadow: 0 1px 1px rgba(0,0,0,.2);
    text-transform: uppercase;
    text-align: center;
    border: 2px dashed #fff;
    outline : 5px solid #313131;

    @media screen and (min-width: 768px) {
      left: 15px;
      top: 20px;
      width: 200px;
      padding: 5px 0;
    }

    @media screen and (max-width: 767px) {
      left: 0px;
      top: 20px;
      width: 180px;
      padding: 5px 0;
    }
  }

  @media screen and (max-width: 767px) {
    width: 130px;
    height: 130px;
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
  height: 20%;
  display: flex;
  /* align-items: center; */
  margin: 0.5rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  p {
    margin: 0;
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
  justify-content: space-between;
  margin: 0.5rem 0;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 14px;
  }

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
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

  @media screen and (max-width: 767px) {
    height: 25%;
    padding: 0.5rem 1rem;
  }
`;

const TsCs = styled.span`
  font-size: 10px;
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
              <Image className='rounded-corners' src={'https:' + cardImage.fields.file.url} width={cardImageWidth} height={cardImageHeight} alt={altText} />
            </>
            :
            <Overlay backgroundImg={'https:' + cardImage.fields.file.url} >
              <Image className='rounded-corners' src={'https:' + noStockImage.fields.file.url} width={cardImageWidth} height={cardImageHeight} alt={altText} />
            </Overlay>
          }
        </CardLeft>
        <CardRight>
          {onSpecial ?
            <SpecialBadge>
              <span className='badge-content'>On Special</span>
            </SpecialBadge>
            : null}
          <Heading>
            <h2>{brand} {model}</h2>
          </Heading>
          <Description>
            {description}
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
                  <span className='bold'>Price: </span>
                  <PriceNow className='bold'>Now - R{priceNow}.00</PriceNow>
                  <PriceWas>Was - R{priceWas}.00</PriceWas>
                </Price>
                :
                <Price>
                  <span className='bold'>Price: </span>
                  <PriceNow className='bold'>R{priceNow}.00</PriceNow>
                </Price>
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
