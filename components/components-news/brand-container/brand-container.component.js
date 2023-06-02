// React
import React from 'react';

// Next

// Contentful

// Components
import BrandImages from './brand-images.component';
import BrandHeader from './brand-header.component';
import BrandDescription from './brand-description.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const BrandOfMonthContainer = ({ content }) => {
  return (
    <Container>
      {content.map(brandItem => {
        const { brand, description, images, brandHeader } = brandItem.fields;
        return (
          <>
            <BrandHeader header={brandHeader} />
            {description == '' || description == null || typeof description == 'undefined'
              ? null
              :
              <>
                <BrandDescription description={description} />
              </>}
            {images == '' || images == null || typeof images == 'undefined'
              ? null
              :
              <>
                <BrandImages images={images} />
              </>}
          </>
        )
      })}
    </Container>
  );
};

export default BrandOfMonthContainer;

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  padding: 2rem 0;
`;