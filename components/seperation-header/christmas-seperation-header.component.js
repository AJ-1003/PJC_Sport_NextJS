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
  background: var(--background-grey);
  padding: 1rem 0;
  display: flex;
  flex-direction: column;

  .christmas {
    position: relative;
    top: 1rem;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 0.5rem;
    text-shadow: 0 0 10px red,
    0 0 15px red,
    0 0 20px red,
    0 0 25px red,
    0 0 35px red,
    0 0 45px red,
    0 0 50px green,
    0 0 55px green,
    0 0 60px green,
    0 0 65px green,
    0 0 70px green;
  }

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


const ChristmasSeperationHeader = ({ id, childrenLvl1, childrenLvl2 }) => {
  var router = useRouter();
  var route;
  if (router.route == '/') {
    route = 'home';
  } else {
    route = router.route.substring(1);
  }
  return (
    <>
      <ul className='lightrope'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Header id={id}>

        <h2 className='christmas'>
          {childrenLvl1}
        </h2>
        {childrenLvl2 !== '' || childrenLvl2 !== null || typeof childrenLvl2 !== 'undefined'
          ?
          <h3 className='header-text-h3'>{childrenLvl2}</h3>
          : null}
      </Header>
    </>

  );
};

export default ChristmasSeperationHeader;
