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

const BicycleRangeCard = ({ bicycleRangeDetails }) => {
  const { title, image, linkToSection } = bicycleRangeDetails.fields;
  return (
    <Card
      backgroundImg={'https:' + image.fields.file.url}>
      <Link href={'#' + linkToSection} legacyBehavior>
        {title}
      </Link>
    </Card>

  );
};

export default BicycleRangeCard;

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
  color: #ffffff;
  font-family: 'Racing Sans One', cursive;
  font-size: 2.5rem;
  transition: 0.2s;
  text-align: center;

  &:hover {
    color: var(--orange);
    transition: 0.2s;
  }

  @media screen and (max-width: 767px) {
    margin: 0;
    min-height: 150px;
  }
`;