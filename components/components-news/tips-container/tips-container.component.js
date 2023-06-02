// React
import React, { useState, useEffect } from 'react';

// Next
import Image from 'next/image';

// Contentful
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const TipsContainer = ({ content }) => {
  const [details, setDetails] = useState(content[0]);

  function GetEntryDetails(id) {
    const index = content.findIndex(obj => {
      return obj.sys.id === `${id}`
    });
    setDetails(content[index]);
  };

  return (
    <Container>
      <TipsList className='rounded-corners'>
        <Heading>Tips and Tricks</Heading>
        <Underline />
        <TipListContent>
          {content.map(tipTrick => {
            const { tip } = tipTrick.fields;
            return (
              <div key={tipTrick.sys.id}>
                <h4 onClick={() => GetEntryDetails(tipTrick.sys.id)}>{tip}</h4>
                <LightUnderline />
              </div>
            )
          })}
        </TipListContent>
      </TipsList>
      <TipDetails className='rounded-corners'>
        <Heading>Details</Heading>
        <Underline />
        <TipDetailsContent>
          {details.fields.description == '' || details.fields.description == null || typeof details.fields.description == 'undefined'
            ? null
            :
            <>
              <TipDescription>
                {documentToReactComponents(details.fields.description)}
              </TipDescription>
            </>}
          <TipSteps >
            {details.fields.steps.map(step => {
              return (
                <>
                  <Step>{step}</Step>
                </>
              )
            })}
          </TipSteps>
        </TipDetailsContent>
      </TipDetails>
      <TipImage className='rounded-corners'>
        <Image
          className='rounded-corners'
          src={'https:' + details.fields.image.fields.file.url}
          alt={details.fields.tip}
          width='250'
          height='250'
          responsive='true'
          title={details.fields.tip} />
      </TipImage>
    </Container>
  );
};

export default TipsContainer;

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  margin: 0 auto;
  padding: 2rem 0;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const TipsList = styled.div`
  width: 20%;
  text-align: center;
  background-color: var(--background-light-grey);
  padding: 1rem;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const TipListContent = styled.div`
  max-height: 350px;
  overflow-y: scroll;
  padding: 1rem;

  h4 {
    cursor: pointer;
  }
`;

const TipDetails = styled.div`
  width: 50%;
  background-color: var(--background-light-grey);
  padding: 1rem;
  overflow: hidden;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const TipDetailsContent = styled.div`
  max-height: 350px;
  overflow-y: scroll;
  padding: 1rem;
  margin: 0;

  p {
    margin: 0;
  }
`;

const TipDescription = styled.div`
  padding: 0 0 0.5rem;
`;

const TipSteps = styled.ul`
  padding: 0 1rem;
`;

const Step = styled.li`
  line-height: 1.5rem;
`;

const TipImage = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-light-grey);
  padding: 1rem;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Underline = styled.hr`
  width: 90%;
`;

const LightUnderline = styled.hr`
  width: 50%;
  color: var(--background-grey);
`;

const Heading = styled.h2`
  text-align: center;
`;