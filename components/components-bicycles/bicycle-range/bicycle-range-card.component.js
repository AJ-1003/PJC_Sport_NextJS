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
  border: 1px solid black;
  background: linear-gradient(270deg, rgba(3,2,2,0.5) 50%, rgba(237,29,34,0.7) 100%), url(${props => props.backgroundImg}) center / cover no-repeat, transparent;
  min-width:25%;
  padding: 10px;
  margin: auto;
  flex: 1;
  height: 250px;
`;

const BicycleRangeCard = ({ bicycleRangeDetails }) => {

  const { title, image, linkToSection } = bicycleRangeDetails.fields;

  return (
    <Card
      backgroundImg={'https:' + image.fields.file.url}>
      <Link href={'#' + linkToSection}>
        <a>{title}</a>
      </Link>
    </Card>
  );
};

export default BicycleRangeCard;
