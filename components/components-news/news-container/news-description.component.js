// React
import React from 'react';

// Next

// Contentful
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const NewsDescription = ({ description }) => {
  return (
    <div>
      {documentToReactComponents(description)}
    </div>
  );
};

export default NewsDescription;
