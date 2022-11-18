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
  gap: 2rem;
`;

const SpecContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    text-align: left;
    padding: 3px 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: auto;
`;

const Heading = styled.span`
  font-weight: 600;
`;

const Specification = ({ image, heading, spec }) => {

  console.log(spec)
  return (
    <>
      {spec !== '' || spec !== null || typeof spec !== 'undefined'
        ?
        <Spec>
          <ImageContainer>
            <Image src={image} width='50' height='50' alt={spec} />
          </ImageContainer>
          <SpecContent>
            <Heading>{heading}</Heading>
            {typeof spec == 'object'
              ?
              <ul>
                {spec.map(extra => (
                  <li key={extra}>{extra}</li>
                ))}
              </ul>
              :
              <span>{spec}</span>}
          </SpecContent>
        </Spec>
        : null}
    </>
  );
};

export default Specification;
