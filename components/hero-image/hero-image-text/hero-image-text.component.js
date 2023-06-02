// React
import React from 'react';

// Components

// Images

// Data

// Styles
import styled from 'styled-components';
import balletStyles from '/styles/Ballet.module.css';
import bicycleStyles from '/styles/Bicycles.module.css';
import contactStyles from '/styles/Contact.module.css';
import homeStyles from '/styles/Home.module.css';
import newsStyles from '/styles/News.module.css';
import servicesStyles from '/styles/Services.module.css';
import sportStyles from '/styles/Sport.module.css';

const HeroImageText = ({ colouredHeading, heading, contentText, route, buttons }) => {
  return (
    <HeaderTextContainer className='rounded-corners'>
      {heading == null || heading == undefined || heading == ''
        ?
        <h1 className={`${route == 'home' ? homeStyles.textColour :
          route == 'bicycles' ? bicycleStyles.textColour :
            route == 'services' ? servicesStyles.textColour :
              route == 'sport' ? sportStyles.textColour :
                route == 'ballet' ? balletStyles.textColour :
                  route == 'contact' ? contactStyles.textColour :
                    route == 'news' ? newsStyles.textColour :
                      ''}
                      ${route == 'ballet' ? 'ballet-text' : ''}`}>{colouredHeading}</h1>
        :
        <>
          <h1 className={`${route == 'home' ? homeStyles.textColour :
            route == 'bicycles' ? bicycleStyles.textColour :
              route == 'services' ? servicesStyles.textColour :
                route == 'sport' ? sportStyles.textColour :
                  route == 'ballet' ? balletStyles.textColour :
                    route == 'contact' ? contactStyles.textColour :
                      route == 'news' ? newsStyles.textColour :
                        ''}
          ${route == 'ballet' ? 'ballet-text' : ''}`}>{colouredHeading}</h1>
          <h2 className={`${route == 'ballet' ? 'ballet-text' : ''}`}>{heading}</h2>
        </>
      }
      <p className={`${route == 'ballet' ? 'ballet-text-p' : ''}`}>{contentText}</p>
      <Buttons>{buttons}</Buttons>
    </HeaderTextContainer>
  );
};

export default HeroImageText;

const HeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff40;
  padding: 2rem;
  width: 60%;
  font-family: 'Racing Sans One', sans-serif;
  color: #ffffff;
  align-items: center;
  
  @media screen and (max-width: 767px) {
    width: 80%;
  }

  h1 {
    font-weight: bold;
    font-size: 3rem;
    text-transform: uppercase;

    @media screen and (max-width: 767px) {
      font-size: 2rem;
    }
  }

  h2 {
    font-weight: 400;
    font-size: 2rem;
    text-transform: uppercase;

    @media screen and (max-width: 767px) {
      font-size: 2rem;
    }
  }

  p {
    font-family: "Montserrat", sans-serif;

    @media screen and (max-width: 767px) {
      font-size: 1rem;
    }
  }

  .ballet-text {
    font-family: 'Raleway', sans-serif;
  }

  .ballet-text-p {
    font-family: 'Lato', sans-serif;
    font-size: 1.1rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media screen and (max-width: 767px) {
    align-items: center;
    flex-direction: column;
  }
`;