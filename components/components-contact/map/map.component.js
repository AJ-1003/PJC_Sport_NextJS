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
    <Map className='rounded-corners'>
      <div className='gmap_canvas rounded-corners'>
        <iframe
          className='map rounded-corners'
          src='https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=183%20Koedoe%20str+(PJC%20Sport%20%26%20Cycles)&amp;ie=UTF8&amp;t=&amp;z=16&amp;iwloc=B&amp;output=embed'
          frameBorder='0'
          scrolling='no'
          marginHeight='0'
          marginWidth='0'>
        </iframe>
      </div>
    </Map>
  );
};

export default MapLocation;

const Map = styled.div`
  position: relative;
  text-align: center;
  height: 500px;
  width: 40%;

  @media screen and (min-width: 1024px) {
    width: 50%;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    height: 500px;
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    height: 400px;
    width: 100%;
  }

  .gmap_canvas {
    overflow: hidden;
    background: none;
    height: 500px;
    width: 100%;

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      height: 500px;
      width: 100%;
    }

    @media screen and (max-width: 767px) {
      height: 400px;
      width: 100%;
    }

    .map {
      width: 100%;
      height: 500px;
      border: 1px solid #31313140;

      @media screen and (min-width: 768px) and (max-width: 1023px) {
        height: 500px;
        width: 100%;
      }

      @media screen and (max-width: 767px) {
        height: 400px;
        width: 100%;
      }
    }
  }
`;