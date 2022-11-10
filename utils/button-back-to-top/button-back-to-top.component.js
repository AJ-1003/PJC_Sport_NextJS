// React
import React from 'react';
import { useEffect, useState } from 'react';
import { FiChevronsUp } from 'react-icons/fi';

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

const BackToTopButton = styled.button`
  position: fixed;
  bottom: 50px;
  right: 50px;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  font-size: 1.5rem;

  .icon {
    position: relative;
    top: 5%;
  }
`;

const BackToTop = () => {

  const [backToTopBtn, setBackToTopBtn] = useState(false);

  var router = useRouter();
  var route;
  if (router.route == '/') {
    route = 'home';
  } else {
    route = router.route.substring(1);
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopBtn(true);
      } else {
        setBackToTopBtn(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      {backToTopBtn && (
        <BackToTopButton
          className={
            route == 'home' ? homeStyles.backgroundColour :
              route == 'bicycles' ? bicycleStyles.backgroundColour :
                route == 'bicycles/[slug]' ? bicycleStyles.backgroundColour :
                  route == 'services' ? servicesStyles.backgroundColour :
                    route == 'sport' ? sportStyles.backgroundColour :
                      route == 'ballet' ? balletStyles.backgroundColour :
                        route == 'contact' ? contactStyles.backgroundColour :
                          ''
          }
          onClick={scrollUp}>
          <div className='icon'>
            <FiChevronsUp />
          </div>
        </BackToTopButton>
      )}
    </>
  );
};

export default BackToTop;