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

const Spec = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const SpecContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Specification = ({ image, heading, spec }) => {
  return (
    <Spec>
      <Image src={image} width='50px' height='50px' alt={spec} />
      <SpecContent>
        <span>{heading}</span>
        <span>{spec}</span>
      </SpecContent>
    </Spec>
  );
};

export default Specification;
