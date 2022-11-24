// React
import React from 'react';

// Next
import { useRouter } from 'next/router';

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Header = styled.div`
  font-family: 'Lato', sans-serif;
  background: var(--dark-grey);
  padding: 1rem 0;
  
  h3 {
    color: #fff;
    position: relative;
    width: 100%;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.5rem;
    text-shadow: 0 0 10px #00b3ff,
    0 0 20px #00b3ff,
    0 0 30px #00b3ff;
    text-align: center;

    @media screen and (max-width: 767px) {
      width: 90%;
      height: 100px;
      margin: 0 auto;
    }
  }
`;

const CustomSeperationHeader = ({ id, childrenLvl1, childrenLvl2 }) => {
  var router = useRouter();
  var route;
  if (router.route == '/') {
    route = 'home';
  } else {
    route = router.route.substring(1);
  }
  return (
    <Header id={id}>
      <h2 className='black-friday'>
        {/* {childrenLvl1} */}
        Bla<span className='delay1'>c</span>k
        Fr<span className='delay2'>i</span>da<span className='delay3'>y</span>
      </h2>
      {childrenLvl2 !== '' || childrenLvl2 !== null || typeof childrenLvl2 !== 'undefined'
        ?
        <h3 className='header-text-h3'>{childrenLvl2}</h3>
        : null}
    </Header>
  );
};

export default CustomSeperationHeader;
