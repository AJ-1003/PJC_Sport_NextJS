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
      <iframe src={`https://'${process.env.NEXT_PUBLIC_MAP_API_KEY}'/locator-plus/2bjt/locator-plus.html`}
        width='600px' height='500px'
        loading='lazy'>
      </iframe>
    </Map>
  );
};

export default MapLocation;
