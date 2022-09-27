// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Footer = styled.div`

`;

const DetailsSectionFooter = ({ colouredFootnote, footnote }) => {
  return (
    <Footer>
      <p><span>{colouredFootnote}</span> {footnote}</p>
    </Footer>
  );
};

export default DetailsSectionFooter;
