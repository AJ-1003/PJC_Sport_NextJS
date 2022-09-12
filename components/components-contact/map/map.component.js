// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const MapLocation = () => {
  return (
    <div>
      <iframe
        allowFullScreen="true" 
        loading="lazy"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCN142tm0KUUyWYFj0_lfGpPOzXhp2i-UQ&amp;q=183+Koedoe+street%2C+Wierda+Park%2C+Centurion&amp;zoom=15"
        height="500px"
        width='500px'>
      </iframe>
    </div>
  );
};

export default MapLocation;
