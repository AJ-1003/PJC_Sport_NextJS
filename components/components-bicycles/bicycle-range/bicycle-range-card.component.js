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
  background: linear-gradient(270deg, rgba(3,2,2,0.5) 50%, rgba(237,29,34,0.7) 100%), url(${props => props.backgroundImg}) center / cover no-repeat, transparent;
  min-width:25%;
  padding: 10px;
  margin: auto;
  height: 200px;
  cursor: pointer;
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
