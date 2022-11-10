// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  width: fit-content;
  padding: 10px 15px;
  background: var(${props => props.color});
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &.fill {
    background: var(${props => props.color});
    color: #fff;
  }

  &.outline {
    border: 1px solid var(${props => props.color});
    color: #313131;
  }

  &:hover {
    background: var(${props => props.color + '-hover'});
    transition: 0.3s;
    color: #fff;
  }
`;

const ButtonSubmit = ({ color, fill, children }) => {
  return (
    <Button
      className={`rounded-corners ${fill ? 'fill' : 'outline'}`}
      color={color}
      type='submit'>
      {children}
    </Button>
  );
};

export default ButtonSubmit;