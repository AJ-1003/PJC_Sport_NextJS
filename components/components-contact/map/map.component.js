// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Map = styled.div`
  margin: 0 auto;
`;

const MapLocation = () => {
  return (
    <Map className='rounded-corners'>
      <iframe
        allowFullScreen={true} 
        loading='lazy'
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAP_API_KEY}&amp;q=183+Koedoe+street%2C+Wierda+Park%2C+Centurion&amp;zoom=15`}
        height='500px'
        width='600px'>
      </iframe>
    </Map>
  );
};

export default MapLocation;
