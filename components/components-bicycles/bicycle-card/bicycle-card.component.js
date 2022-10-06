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


  .bicycle-card-img {
    
  }
`;

const Overlay = styled.div`
  background: linear-gradient(270deg, rgba(31,31,31,0.5) 50%, rgba(71,71,71,0.7) 100%), url(${props => props.backgroundImg}) center / cover no-repeat;
`;

const CardRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  
  
  .heading{ 
    height: 15%;
    display: flex;
    align-items: center;
  }

  .description {
    height: 40%;
    display: flex;
    align-items: center;
  }

  .details {
    height: 15%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .available-sizes {
      display: flex;
      flex-direction: row;
      
      .sizes {
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
      }
    }

    .price {
      font-weight: 600;

      .price-was {
        font-weight: 400;
        text-decoration: line-through;
        color: #808080;
      }
    }
  }

  .view-more {
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;
`;

export const LineBreak = styled.div`
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
        <CardRight>
          <div className='heading'>
            <h2>{brand} {model}</h2>
          </div>
          <div className='description'>
            <p>{description}</p>
          </div>
          <div className='details'>
            <div className='available-sizes'>
              <div>
                <span>Avaialable sizes: </span>
              </div>
              <ul className='sizes'>
                {availableSizes.map(size => {
                  return (
                    <li key={size}>{size}</li>
                  )
                })}
              </ul>
            </div>
            <div className='price'>
              {onSpecial ?
                <Price>
                  <div className='price-was'>Was - R{priceWas}.00</div>
                  <div className='price-now'>Now - R{priceNow}.00</div>
                </Price>
                :
                <span className='price-now'>R{priceNow}.00</span>
              }
            </div>
          </div>
          <div className='view-more'>
            <ButtonLink to={'/bicycles/' + name} color='--orange' fill={true}>
              View Bicycle
            </ButtonLink>
          </div>
        </CardRight>
      </CardContent>
      <LineBreak />
    </Card>
  );
};

export default BicycleCard;
