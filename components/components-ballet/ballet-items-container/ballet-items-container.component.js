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
  padding: 20px;
  display : flex;
  flex-flow: row wrap;
  justify-content: space-between;
  gap: 10px;
  width: 80%;
  margin: 0 auto;
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
