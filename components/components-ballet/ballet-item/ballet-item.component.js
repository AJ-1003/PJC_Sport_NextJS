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
  border: 1px solid black;
  background: #ececec;
  min-width: 25%;
  padding: 10px;
  margin: auto;
  flex: 1;
`;

const BalletItem = () => {
  return (
    <Item>
      <div className='item-image'>
        <Image src='/assets/home/what-we-offer/wwo-ballet.webp' width='50px' height='50px' />
      </div>
      <div className='item-description'>
        <p>Description</p>
      </div>
      <div className='item-color'>
        <ItemColor />
      </div>
    </Item>
  );
};

export default BalletItem;
