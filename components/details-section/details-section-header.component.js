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
import homeStyles from '/styles/Home.module.css';
import bicycleStyles from '/styles/Bicycles.module.css';
import servicesStyles from '/styles/Services.module.css';
import sportStyles from '/styles/Sport.module.css';
import balletStyles from '/styles/Ballet.module.css';
import contactStyles from '/styles/Contact.module.css';

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
`;

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