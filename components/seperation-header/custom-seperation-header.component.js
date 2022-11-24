// React
import React from 'react';

// Next
import { useRouter } from 'next/router';

// Components

// Images

// Data

// Styles
import styled from 'styled-components';
import homeStyles from '/styles/Home.module.css';
import bicycleStyles from '/styles/Bicycles.module.css';
import servicesStyles from '/styles/Services.module.css';
import sportStyles from '/styles/Sport.module.css';
import balletStyles from '/styles/Ballet.module.css';
import contactStyles from '/styles/Contact.module.css';

const Header = styled.div`
  font-family: 'Lato', sans-serif;
  background: var(--dark-grey);

  .black-friday {
    position: relative;
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 3rem;
    font-weight: 300;
    letter-spacing: 0.5rem;
    text-shadow: 0 0 10px #00b3ff,
    0 0 20px #00b3ff,
    0 0 30px #00b3ff,
    0 0 40px #00b3ff,
    0 0 60px #00b3ff,
    0 0 70px #00b3ff;
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
        {childrenLvl1}
      </h2>
      {childrenLvl2 !== '' || childrenLvl2 !== null || typeof childrenLvl2 !== 'undefined'
        ?
        <h3 className='header-text-h3'>{childrenLvl2}</h3>
        : null}
    </Header>
  );
};

export default CustomSeperationHeader;
