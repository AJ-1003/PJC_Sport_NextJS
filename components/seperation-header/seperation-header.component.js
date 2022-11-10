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

const Header = styled.section`
  padding: 2rem 0;
  color: rgba(255,255,255,0);
  border-color: rgb(255,255,255);
  background: var(--background-grey);
  font-family: 'Racing Sans One', serif;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;

  .ballet-text {
    font-family: 'Raleway', sans-serif;
  }

  .header-text-h2 {
    margin: 0;
    font-size: 2rem;
  }

  .header-text-h3 {
    margin: 0;
    color: #ed1d22;
    font-size: 1.5rem;
    color: #000;
  }
`;

const SeperationHeader = ({ id, childrenLvl1, childrenLvl2 }) => {
  var router = useRouter();
  var route;
  if (router.route == '/') {
    route = 'home';
  } else {
    route = router.route.substring(1);
  }
  return (
    <Header id={id}>
      <h2 className={`header-text-h2 ${
        route == 'home' ? homeStyles.textColour :
          route == 'bicycles' ? bicycleStyles.textColour :
            route == 'services' ? servicesStyles.textColour :
              route == 'sport' ? sportStyles.textColour :
                route == 'ballet' ? balletStyles.textColour :
                  route == 'contact' ? contactStyles.headingColour :
                    ''
        } ${route == 'ballet' ? 'ballet-text' : ''}`}>{childrenLvl1}</h2>
      {childrenLvl2 !== '' || childrenLvl2 !== null || typeof childrenLvl2 !== 'undefined'
        ?
        <h3 className='header-text-h3'>{childrenLvl2}</h3>
        : null}
    </Header>
  );
};

export default SeperationHeader;
