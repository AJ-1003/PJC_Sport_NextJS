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

const Button = styled.div`
  width: fit-content;
  padding: 10px 15px;
  border: none;
  /* margin: 0 auto; */
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;

  &.fill {
    border: 1px solid var(${props => props.color});
    background: var(${props => props.color});
    color: #fff;
    transition: 0.3s;
  }

  &.outline {
    border: 1px solid var(${props => props.color});
    color: #313131;
    transition: 0.3s;
  }

  &:hover {
    border: 1px solid var(${props => props.color + '-hover'});
    /* background: transparent; */
    background: var(${props => props.color + '-hover'});
    transition: 0.3s;
    color: var(--grey);
  }
`;

const ButtonLink = ({ to, color, fill, children, target, rel }) => {
  return (
    <Button className={`rounded-corners ${fill ? 'fill' : 'outline'}`} color={color}>
      <Link href={to} target={target} rel={rel} scroll={true}>
        {children}
      </Link>
    </Button>
  )
}

export default ButtonLink;
