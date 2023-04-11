// React
import React from 'react';
import Carousel from 'react-multi-carousel';

// Next
import Image from 'next/image';

// Contentful

// Components

// Images

// Data

// Styles
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const NewsImages = ({ images }) => {
  return (
      <div>
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
        customTransition=''
        transitionDuration={500}
        containerClass=''
        itemClass=''
        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}>
        {images.map(image => {
          return (
            <CarouselItem
              key={image.sys.id}>
                <Image src={'https:' + image.fields.file.url} width='450px' height='250px' alt='image' />
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
};

export default NewsImages;

const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const CarouselItem = styled.div``;