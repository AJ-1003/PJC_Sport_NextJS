// React
import React from 'react';

// Next
import Link from 'next/link';

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Button = styled.button`
  width: fit-content;
  padding: 8px 10px;
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

const ButtonLink = ({ to, color, fill, children }) => {
  return (
    <Button
      className={`rounded-corners ${fill ? 'fill' : 'outline'}`}
      color={color}>
      <Link href={to}>
        {children}
      </Link>
    </Button>
  )
}

export default ButtonLink;
