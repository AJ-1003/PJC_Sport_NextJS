// React
import React from 'react';

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Header = styled.section`
  text-align: center;
  padding: 2rem 0;
  color: rgba(255,255,255,0);
  border-color: rgb(255,255,255);
  background: #f5f5f5;
  display: flex;
  flex-direction: column;

  .header-text-h2 {
    background: rgba(255,255,255,0);
    color: #ed1d22;
    font-family: 'Racing Sans One', serif;
  }

  .header-text-h3 {
    background: rgba(255,255,255,0);
    color: #ed1d22;
    font-family: 'Racing Sans One', serif;
  }
`;

// style="text-align: center;padding: 2rem 0;color: rgba(255,255,255,0);border-color: rgb(255,255,255);background: #f5f5f5;"
// style="background: rgba(255,255,255,0);color: #ed1d22;font-family: 'Racing Sans One', serif;"


const SeperationHeader = ({ childrenLvl1, childrenLvl2 = '' }) => {
  
  const checkLevel2 = () => {
    if (childrenLvl2 == '') {
      return;
    }
    else {
      return (<h3 className='header-text-h3'>{ childrenLvl2 }</h3>);
    }
  }
  
  return (
    <Header>
      <h2 className='header-text-h2'>{ childrenLvl1 }</h2>
      {checkLevel2()}
    </Header>
  );
};

export default SeperationHeader;
