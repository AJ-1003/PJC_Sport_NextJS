// React
import React from 'react';

// Next
import { useRouter } from 'next/router';

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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  top: 0;

  &.hero-text-section {
    text-align: center;
  }

  &.home {
    background: linear-gradient(270deg, rgba(var(--grey-background),0.5) 60%, rgba(var(--red-background),0.5) 100%), url(${props => props.backgroundImg}) center / cover no-repeat, transparent;
  }

  &.bicycles {
    background: linear-gradient(250deg, rgba(var(--grey-background),0.5) 20%, rgba(var(--orange-background),0.5) 100%), url(${props => props.backgroundImg}) center / cover no-repeat, transparent;
  }

  &.services {
    background: linear-gradient(230deg, rgba(var(--grey-background),0.5) 60%, rgba(var(--blue-background),0.5) 100%), url(${props => props.backgroundImg}) center / cover no-repeat, transparent;
  }

  &.sport {
    background: linear-gradient(130deg, rgba(var(--grey-background),0.5) 60%, rgba(var(--green-background),0.5) 100%), url(${props => props.backgroundImg}) center / cover no-repeat, transparent;
  }

  &.ballet {
    background: linear-gradient(190deg, rgba(var(--grey-background),0.5) 60%, rgba(var(--pink-background),0.5) 100%), url(${props => props.backgroundImg}) center / cover no-repeat, transparent;
  }

  &.contact {
    background: linear-gradient(170deg, rgba(var(--grey-background),0.5) 20%, rgba(var(--grey-background),0.2) 100%), url(${props => props.backgroundImg}) center / cover no-repeat, transparent;
  }
`;

const HeroImage = ({ children, content, buttons }) => {
  var router = useRouter();
  return (
    <>
      {content.map(header => {
        const { colouredHeading, contentText, heading, image, order } = header.fields;
        var route;
        if (router.route == '/') {
          route = 'home';
        } else {
          route = router.route.substring(1);
        }
        return (
          <HeroImageContainer
            key={order}
            backgroundImg={'https:' + image.fields.file.url}
            className={`hero-text-section ${route}`} >
            {children}
            <HeroImageText
              colouredHeading={colouredHeading}
              heading={heading}
              contentText={contentText}
              route={route}
              buttons={buttons} />
          </HeroImageContainer>
        )
      })
      }
    </>
  );
};

export default HeroImage;
