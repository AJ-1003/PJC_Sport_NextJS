// React
import React from 'react';

// Next

// Contentful

// Components
import BalletItem from '../ballet-item/ballet-item.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Lato', sans-serif;
  padding: 2rem;
  display : flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 10px;
  width: 80%;
  margin: 2rem auto 2rem;
  background: rgba(var(--pink-background), 0.2);
  border-radius: 0.5rem;
  
  @media screen and (min-width: 1024px) {

  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    margin: 0;
    width: 100%;
    border-radius: 0;
  }
`;

const BalletItemsContainer = ({ content }) => {
  return (
    <Container>
      {content.map(item => {
        return (
          <BalletItem key={item.sys.id} content={item} />
        )
      })}
    </Container>
  );
};

export default BalletItemsContainer;
