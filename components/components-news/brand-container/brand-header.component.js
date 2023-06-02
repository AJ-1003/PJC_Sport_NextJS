// React
import React from 'react';

// Next
import Image from 'next/image';

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const BrandHeader = ({ header }) => {
  return (
    <Header>
      <Image className='rounded-corners' src={'https:' + header.fields.file.url} width='450px' height='50px' alt='header' />
    </Header>
  );
};

export default BrandHeader;

const Header = styled.div`
  text-align: center;
`;