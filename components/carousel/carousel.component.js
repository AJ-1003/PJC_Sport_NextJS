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
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components';

const CarouselSlider = ({ content }) => {
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
        {content.map(brandName => {
          const { brand, image, websiteLink, width, height } = brandName.fields;
          return (
            <CarouselItem
              key={brandName.sys.id}>
              {typeof websiteLink !== 'undefined'
                ?
                <Link href={websiteLink}>
                  <a target='_blank' rel='noreferrer noopener'>
                    <Image className='pointer' src={'https:' + image.fields.file.url} width={width} height={height} alt={brand} />
                  </a>
                </Link>
                :
                <Image src={'https:' + image.fields.file.url} width={width} height={height} alt={brand} />}
            </CarouselItem>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;

const responsive = {
  largeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
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