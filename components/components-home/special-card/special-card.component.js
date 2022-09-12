// React
import React from 'react';

// Next
import Image from 'next/image';

// Contentful
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid black;
  background: #ececec;
  min-width:35%;
  padding: 10px;
  margin: auto;
  flex: 1;
`;

const SpecialCard = ({ specialDetails }) => {

  const { title, image, altText, description } = specialDetails.fields;

  return (
    <Card>
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <Image className='card-image' src={'https:' + image.fields.file.url} alt={altText} width='50vw' height='50vh' layout='responsive' />
      </div>
      <div>
        {documentToReactComponents(description)}
      </div>
    </Card>
  );
};

export default SpecialCard;
