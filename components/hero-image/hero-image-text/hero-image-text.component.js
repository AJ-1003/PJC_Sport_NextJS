// React
import React from 'react';

// Components

// Images

// Data

// Styles


const HeroImageText = ({ colouredHeading, heading, contentText }) => {

  const checkHeadingContent = () => {
    if (heading == null || heading == undefined || heading == '') {
      return (
        <h1>
          <span>{colouredHeading}</span>
        </h1>
      );
    } else {
      return (
        <h1>
          <span>{colouredHeading}</span>
          <span>{heading}</span>
        </h1>
      );
    }
  };

  return (
    <div className='hero-img-text_container'>
      {checkHeadingContent()}
      <h4>{contentText}</h4>
    </div>
  );
};

export default HeroImageText;
