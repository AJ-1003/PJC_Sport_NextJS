// React
import React, { Children } from 'react';

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

const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff20;
  padding: 2rem;
  width: 60%;
  font-family: 'Racing Sans One', cursive;
  color: #ffffff;
  align-items: center;
  
  h1 {
    font-weight: bold;
    font-size: 3rem;
    text-transform: uppercase;
  }

  h2 {
    font-weight: 400;
    font-size: 2rem;
    text-transform: uppercase;
  }

  p {
    font-family: "Montserrat", sans-serif;
  }
`;

const HeroImageText = ({ colouredHeading, heading, contentText, route, buttons }) => {
  return (
    <HeaderTextContainer className='rounded-corners'>
      {heading == null || heading == undefined || heading == ''
        ?
        <h1 className={
          route == 'home' ? homeStyles.textColour :
            route == 'bicycles' ? bicycleStyles.textColour :
              route == 'services' ? servicesStyles.textColour :
                route == 'sport' ? sportStyles.textColour :
                  route == 'ballet' ? balletStyles.textColour :
                    route == 'contact' ? contactStyles.textColour :
                      ''
        }>{colouredHeading}</h1>
        :
        <>
          <h1 className={
            route == 'home' ? homeStyles.textColour :
              route == 'bicycles' ? bicycleStyles.textColour :
                route == 'services' ? servicesStyles.textColour :
                  route == 'sport' ? sportStyles.textColour :
                    route == 'ballet' ? balletStyles.textColour :
                      route == 'contact' ? contactStyles.textColour :
                        ''
          }>{colouredHeading}</h1>
          <h2>{heading}</h2>
        </>
      }
      <p>{contentText}</p>
      {buttons}
    </HeaderTextContainer>
  );
};

export default HeroImageText;
