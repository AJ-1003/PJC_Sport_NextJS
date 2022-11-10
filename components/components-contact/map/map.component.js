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
        allowFullScreen
        style={{ border: '1px solid #31313140', borderRadius: '0.5rem' }}
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}&q=183+Koedoe+street&zoom=15`}
        loading='lazy'
        width='600px'
        height='500px'>
      </iframe>
    </Map>
  );
};

export default MapLocation;
