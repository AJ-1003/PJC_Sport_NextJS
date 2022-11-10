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
  padding: 2rem;
  display : flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 10px;
  width: 80%;
  margin: 2rem auto 2rem;
  background: rgba(var(--pink-background), 0.2);
  font-family: 'Lato', sans-serif;
`;

const BalletItemsContainer = ({ content }) => {
  return (
    <Container className='rounded-corners'>
      {content.map(item => {
        return (
          <BalletItem key={item.sys.id} content={item} />
        )
      })}
    </Container>
  );
};

export default BalletItemsContainer;
