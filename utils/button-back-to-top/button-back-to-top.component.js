// React
import React from 'react';
import { FiChevronsUp } from 'react-icons/fi';
import { useEffect, useState } from 'react';

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

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
      behavior: 'smooth'
    });
  };

  return (
    <>
      {backToTopBtn && (
        <BackToTopButton onClick={scrollUp}>
          <div className='icon'>
            <FiChevronsUp />
          </div>
        </BackToTopButton>
      )}
    </>
  );
};

export default BackToTop;