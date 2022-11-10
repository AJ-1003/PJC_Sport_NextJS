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

const Footer = styled.div`
  font-family: 'Racing Sans One', cursive;
  font-size: 1rem;
  margin: 1rem 0;

  p {
    color: #fff;
  }

  &.left {
    text-align: left;
  }

  &.right {
    text-align: right;
  }
`;

const DetailsSectionFooter = ({ colouredFootnote, footnote, alignment }) => {
  var router = useRouter();

  var route;
  if (router.route == '/') {
    route = 'home';
  } else {
    route = router.route.substring(1);
  }
  return (
    <Footer className={alignment}>
      <p><span
        className={
          route == 'home' ? homeStyles.textColour :
            route == 'bicycles' ? bicycleStyles.textColour :
              route == 'services' ? servicesStyles.textColour :
                route == 'sport' ? sportStyles.textColour :
                  // route == 'ballet' ? balletStyles.textColour :
                  // route == 'contact' ? contactStyles.textColour :
                  ''
        }>{colouredFootnote}</span> {footnote}</p>
    </Footer>
  );
};

export default DetailsSectionFooter;
