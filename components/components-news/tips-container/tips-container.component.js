// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const TipsContainer = ({ content }) => {
  return (
    <Container>
      {content.map(tipTrick => {
        const { id, tip, image, steps, description, order } = tipTrick.fields;
        return (
          <div key={tipTrick.sys.id}>

          </div>
        )
      })}
    </Container>
  );
};

export default TipsContainer;

const Container = styled.div`

`;