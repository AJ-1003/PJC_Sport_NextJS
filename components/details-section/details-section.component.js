// React
import React, { useState } from 'react';
import useMeasure from 'react-use-measure';
import { useSpring, animated } from 'react-spring';

// Next

// Contentful

// Components
import DetailsSectionHeader from './details-section-header.component';
import DetailsSectionBody from './details-section-body.component';
import DetailsSectionFooter from './details-section-footer.component';
import BicycleCard from '../components-bicycles/bicycle-card/bicycle-card.component';
import ItemCard from '../item-card/item-card.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const Section = styled.div`
  background: linear-gradient(270deg, rgba(3,2,2,0.5) 50%, rgba(237,29,34,0.7) 100%), url(${props => props.backgroundImg}) center / cover no-repeat, transparent;
`;

const SectionContainer = styled.div`

`;

const ViewMoreButton = styled.div`
  cursor: pointer;
`;

const PanelContent = styled.div`

`;

const PanelContentInner = styled.div`

`;

const DetailsSection = ({ content, panelContent, type }) => {

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [ref, bounds] = useMeasure();

  const toggleWrapperAnimatedStyle = useSpring({
    transform: isCollapsed ? 'rotate(0deg)' : 'rotate(180deg)'
  });
  const panelContentAnimatedStyle = useSpring({
    height: isCollapsed ? false : bounds.height
  });

  const togglePanel = () => {
    setIsCollapsed(prevState => !prevState)
  };

  return (
    <>
      {content.map(sectionDetails => {
        const { heading, colouredHeading, description, features, items, image, colouredFootnote, footnote, id, hasContent } = sectionDetails.fields;
        return (
          <>
            <Section
              key={sectionDetails.sys.id}
              id={id}
              backgroundImg={'https:' + image.fields.file.url}>
              <SectionContainer>
                <DetailsSectionHeader
                  heading={heading}
                  colouredHeading={colouredHeading} />

                <DetailsSectionBody
                  description={description}
                  features={features ? features : items} />

                {(footnote !== null && colouredFootnote !== null)
                  ?
                  <DetailsSectionFooter
                    colouredFootnote={colouredFootnote}
                    footnote={footnote} />
                  :
                  (footnote !== null && colouredFootnote == null)
                    ?
                    <DetailsSectionFooter
                      footnote={footnote} />
                    : null}

                {hasContent
                  ?
                  <ViewMoreButton onClick={togglePanel}>
                    View More
                  </ViewMoreButton>
                  : null}


              </SectionContainer>
            </Section>
            <PanelContent style={panelContentAnimatedStyle}>
              <PanelContentInner ref={ref}>
                {panelContent !== null && typeof panelContent !== 'undefined'
                  ?
                  <>
                    {panelContent.filter(section => section.fields.forSection == id).map(item => {
                      return (
                        <>
                          {
                            type == 'bicycles'
                              ?
                              <BicycleCard key={item.sys.id} content={item} />
                              :
                              <ItemCard key={item.sys.id} content={item} />
                          }
                        </>
                      )
                    })}
                  </>
                  : null}
              </PanelContentInner>
            </PanelContent>
          </>
        )
      })}
    </>
  );
};

export default DetailsSection;