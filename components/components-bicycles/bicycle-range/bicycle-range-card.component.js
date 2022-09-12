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
  background: #ececec;
  min-width:20%;
  padding: 10px;
  margin: auto;
  flex: 1;
`;

const BicycleRangeCard = () => {
  return (
    <Card>
      <Link href='#'>
        <a>12&quot; Bicycles</a>
      </Link>
    </Card>
  );
};

export default BicycleRangeCard;
