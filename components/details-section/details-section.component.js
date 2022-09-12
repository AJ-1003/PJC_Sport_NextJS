// React
import React from 'react';

// Next

// Contentful

// Components
import DetailsSectionHeader from './details-section-header.component';
import DetailsSectionBody from './details-section-body.component';
import DetailsSectionFooter from './details-section-footer.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const BicycleSection = styled.div`

`;

const DetailsSection = ({ header, body, footer }) => {
  return (
    <BicycleSection>
      <DetailsSectionHeader details={header} />
      <DetailsSectionBody details={body} />
      {footer !== null ? <DetailsSectionFooter details={footer} /> : null}
    </BicycleSection>
  );
};

export default DetailsSection;
