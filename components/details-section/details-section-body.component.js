// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const DetailsSectionBody = ({ description, features, alignment }) => {
  var left = [];
  var right = [];

  for (var i = 0; i < features.length; i++) {
    if (i < features.length / 2) {
      left[i] = features[i]
    }
    else {
      right[i] = features[i]
    }
  }
  return (
    <Body className={alignment}>
      <p>{description}</p>
      <Features className={alignment}>
        <Left>
          <ul>
            {left.map(feature => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </Left>
        <Right>
          <ul>
            {right.map(feature => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </Right>
      </Features>
    </Body>
  );
};

export default DetailsSectionBody;

const Body = styled.div`
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  margin: 1rem 0;

  &.left {
    text-align: left;
  }

  &.right {
    text-align: right;
  }
`;

const Features = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  
  &.left {
    justify-content: start;
  }

  &.right {
    justify-content: end;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    text-align: left;
    padding: 3px 0;
  }
`;

const Left = styled.div``;

const Right = styled.div``;