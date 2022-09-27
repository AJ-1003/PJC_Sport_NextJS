// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Color = styled.div`
  background: var(${props => props.color});
  width: 15px;
  height: 15px;
`;

const ItemColor = ({ color }) => {
  return (
    <Color
      className='round-image'
      color={color} />
  );
};

export default ItemColor;
