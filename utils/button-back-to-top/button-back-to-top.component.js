// React
import React, { useEffect, useState } from 'react';
import { FiChevronsUp } from 'react-icons/fi';

// Next
import { useRouter } from 'next/router';

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
    scrollUp();
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
                          route == 'news' ? newsStyles.backgroundColour :
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
  z-index: 99;

  .icon {
    position: relative;
    top: 5%;
  }

  @media screen and (min-width: 1024px) and (max-width: 1535px) {
    bottom: 80px;
    right: 50px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    bottom: 80px;
    right: 50px;
  }

  @media screen and (max-width: 767px) {
    bottom: 30px;
    right: 30px;
  }
`;