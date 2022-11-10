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
  position: relative;
  text-align: center;
  height: 500px;
  width: 600px;

  .gmap_canvas {
    overflow: hidden;
    background: none;
    height: 500px;
    width: 600px;
    border: 1px 1px solid;
  }
`;

const MapLocation = () => {
  return (
    <Map className='rounded-corners'>
      <div className='gmap_canvas'>
        <iframe width='600' height='500' id='gmap_canvas' src='https://maps.google.com/maps?q=183%20Koedoe&t=&z=17&ie=UTF8&iwloc=&output=embed' frameBorder='0' scrolling='no'>
        </iframe>
      </div>
    </Map>
  );
};

export default MapLocation;
