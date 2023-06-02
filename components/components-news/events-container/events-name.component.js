// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const EventsName = ({ name }) => {
  return (
    <Heading>
      <h2>{name}</h2>
    </Heading>
  );
};

export default EventsName;

const Heading = styled.div`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  padding: 1rem 0;
`;