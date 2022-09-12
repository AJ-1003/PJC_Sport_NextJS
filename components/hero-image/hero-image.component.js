// React
import React from 'react';

// Next

// Contentful
import client from '/contentful/contentful.data';

// Components
import HeroImageText from './hero-image-text/hero-image-text.component';

// Images

// Data

// Styles
import styled from 'styled-components';

export async function getStaticProps() {

  const res = await client.getEntries({
    content_type: 'header'
  });

  const result = Array.from(res.items).sort((a, b) => parseInt(a.fields.order) - parseInt(b.fields.order));

  return {
    props: {
      header: result
    },
    revalidate: 1
  };
};

const HeroImageContainer = styled.div`
  background: linear-gradient(270deg, rgba(3,2,2,0.5) 50%, rgba(237,29,34,0.7) 100%), url(${props => props.backgroundImg}) center / cover no-repeat, transparent;
  height: 500px;
  position: relative;
  top: 0;
  z-index: 0;

  &.hero-text-section {
    text-align: center;
  }
`;

const HeroImage = ({ children, content }) => {
  return (
    <>
      {content.map(header => {

        const { altText, colouredHeading, contentText, heading, image, order, route } = header.fields;

        return (
          <HeroImageContainer
            key={order}
            backgroundImg={'https:' + image.fields.file.url}
            className={`hero-text-section ${route}-color`} >
            {children}
            <HeroImageText colouredHeading={colouredHeading} heading={heading} contentText={contentText} />
          </HeroImageContainer>
        )
      })
      }
    </>
  );
};

export default HeroImage;
