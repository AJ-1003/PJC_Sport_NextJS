// React
import Image from 'next/image';
import React from 'react';

// Next

// Contentful

// Components
import ItemColor from '../../item-color/item-color-dot.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const Item = styled.div`
  /* border: 1px solid black; */
  /* background: #ececec; */
  min-width: 25%;
  padding: 0.5rem;
  margin: auto;
  flex: 1;
`;

const ImageContainer = styled.div`
  text-align: center;
  padding: 2rem;

  .hover {
    transition: 0.3s;
  }

  .hover:hover {
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

const DescriptionContainer = styled.div`
  text-align: center;
`;

const ColorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5px;
  height: 20px;
  align-items: center;
`;

const BalletItem = ({ content }) => {
  const { description, image, colors, order } = content.fields;
  return (
    <Item>
      <ImageContainer>
        <Image className='round-image' src={'https:' + image.fields.file.url} width='200' height='200' alt={'item-' + order} />
      </ImageContainer>
      <DescriptionContainer>
        <p>{description}</p>
      </DescriptionContainer>
      <ColorContainer>
        {colors.map(color => {
          return (
            <>
              {color !== 'Assorted colours'
                ?
                <ItemColor key={color} color={color} />
                : <span>{color}</span>}
            </>
          )
        })}
      </ColorContainer>
    </Item>
  );
};

export default BalletItem;
