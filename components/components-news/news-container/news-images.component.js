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
      {images.length > 3 ?
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
          centerMode={false}
          removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}>
          {images.map(image => {
            return (
              <CarouselItem
                key={image.sys.id}>
                <Image src={'https:' + image.fields.file.url} width='450px' height='250px' alt='image' />
              </CarouselItem>
            );
          })}
        </Carousel> :
        <Images>
          {images.map(image => {
            return (
              <Image className='image' key={image.sys.id} src={'https:' + image.fields.file.url} width='450px' height='250px' alt='image' />
            );
          })}
        </Images>
      }
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

const Images = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
`;