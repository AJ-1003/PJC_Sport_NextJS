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

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background: linear-gradient(250deg, rgba(var(--dark-grey-background),0.7) 70%, rgba(var(--grey-background),0.2) 100%), url(${props => props.backgroundImg}) center / cover no-repeat, transparent;
  min-width:25%;
  padding: 10px;
  margin: auto;
  height: 200px;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Racing Sans One', cursive;
  font-size: 2.5rem;
  transition: 0.2s;

  a:hover {
    color: var(--orange);
    transition: 0.2s;
  }
`;

const BicycleRangeCard = ({ bicycleRangeDetails }) => {
  const { title, image, linkToSection } = bicycleRangeDetails.fields;
  return (
    <Link href={'#' + linkToSection}>
      <Card
        backgroundImg={'https:' + image.fields.file.url}>
        <a>{title}</a>
      </Card>
    </Link>
  );
};

export default BicycleRangeCard;
