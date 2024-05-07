'use client';

// React
import React from 'react';
import Carousel from 'react-multi-carousel';

// Next
import Image from 'next/image';
import Link from 'next/link';

// Contentful

// Components

// Images

// Data

// Styles
import '/node_modules/react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const BicycleCarouselSlider = ({ images, width, height, altText }) => {
  return (
    <CarouselStyled>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition=""
        transitionDuration={500}
        containerClass="container-class"
        itemClass="item-class"
        sliderClass="slider-class"
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
      >
        {images.map((image) => (
          <CarouselItem key={image.sys.id}>
            <Image
              src={`https:${image.fields.file.url}`}
              objectFit="cover"
              objectPosition="top"
              width={width}
              height={height}
              responsive="true"
              alt={altText}
              priority={true}
              quality={100}
              className="rounded-corners"
            />
          </CarouselItem>
        ))}
      </Carousel>
    </CarouselStyled>
  );
};

export default BicycleCarouselSlider;

const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselStyled = styled.div`
  .container-class {
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .slider-class {
  }

  .item-class {
    padding: 0;
  }
`;

const CarouselItem = styled.div``;
