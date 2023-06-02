// React
import React from 'react';

// Next
import { useRouter } from 'next/router';

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';
import bicycleStyles from '/styles/Bicycles.module.css';
import homeStyles from '/styles/Home.module.css';
import servicesStyles from '/styles/Services.module.css';
import sportStyles from '/styles/Sport.module.css';

const DetailsSectionHeader = ({ heading, colouredHeading, alignment }) => {
  var router = useRouter();

  var route;
  if (router.route == '/') {
    route = 'home';
  } else {
    route = router.route.substring(1);
  }
  return (
    <Header className={alignment}>
      {(heading !== null && colouredHeading !== null ?
        <>
          <h2>{heading}</h2>
          <h2
            className={
              route == 'home' ? homeStyles.textColour :
                route == 'bicycles' ? bicycleStyles.textColour :
                  route == 'services' ? servicesStyles.textColour :
                    route == 'sport' ? sportStyles.textColour :
                      // route == 'ballet' ? balletStyles.textColour :
                      // route == 'contact' ? contactStyles.textColour :
                      ''
            }>{colouredHeading}</h2>
        </>
        :
        <h2
          className={
            route == 'home' ? homeStyles.textColour :
              route == 'bicycles' ? bicycleStyles.textColour :
                route == 'services' ? servicesStyles.textColour :
                  route == 'sport' ? sportStyles.textColour :
                    // route == 'ballet' ? balletStyles.textColour :
                    // route == 'contact' ? contactStyles.textColour :
                    ''
          }>{colouredHeading}</h2>
      )}
    </Header>
  );
};

export default DetailsSectionHeader;

const Header = styled.div`
  font-family: 'Racing Sans One', cursive;
  font-size: 1.5rem;
  color: #fff;
  margin: 1rem 0;

  &.left {
    text-align: left;
  }

  &.right {
    text-align: right;
  }

  @media screen and (min-width: 1024px) {

  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {

  }

  @media screen and (max-width: 767px) {
    font-size: 1.2rem;
  }
`;