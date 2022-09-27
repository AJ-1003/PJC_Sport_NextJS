// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Header = styled.div`

`;

const DetailsSectionHeader = ({ heading, colouredHeading }) => {
  return (
    <Header>
      {(heading !== null && colouredHeading !== null ?
        <>
          <h2>{heading}</h2>
          <h2>{colouredHeading}</h2>
        </>
        :
        <h2>{heading}</h2>
      )}
    </Header>
  );
};

export default DetailsSectionHeader;
