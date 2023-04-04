// React
import React from 'react';
// import { Tooltip } from '@nextui-org/react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const ItemColor = ({ color }) => {
  return (
    // <Tooltip content={color}>
      <Color
        className='round-image'
        color={color} />
    // </Tooltip>
  );
};

export default ItemColor;

const Color = styled.div`
  background: var(${props => props.color});
  width: 15px;
  height: 15px;
`;