// React
import React, { useState } from 'react';
import useMeasure from 'react-use-measure';
import { useSpring, animated } from 'react-spring';

// Next
import { useRouter } from 'next/router';

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
  min-height: 400px;
  background: linear-gradient(0deg, rgba(var(--dark-grey-background),0.9) 60%, rgba(var(--dark-grey-background),0.5) 100%), url(${props => props.backgroundImg}) center / cover no-repeat, transparent;
  display: flex;
  align-items: center;
`;

const SectionContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  /* padding-top: 2rem;
  padding-bottom: 2rem; */
  position: relative;
  padding: 1rem 0;
  
  &.align-left {
    text-align: left;
  }

  &.align-right {
    text-align: right;
  }
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
  var router = useRouter();

  var route;
  if (router.route == '/') {
    route = 'home';
  } else {
    route = router.route.substring(1);
  }

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
        const { heading, colouredHeading, description, features, items, image, colouredFootnote, footnote, id, hasContent, order } = sectionDetails.fields;
        var alignment;
        if (order % 2 == 0) {
          alignment = 'left';
        }
        else {
          alignment = 'right';
        }
        return (
          <>
            <Section
              key={id}
              id={id}
              backgroundImg={'https:' + image.fields.file.url}
              className={route}>
              <SectionContainer>
                <DetailsSectionHeader
                  heading={heading}
                  colouredHeading={colouredHeading}
                  alignment={alignment} />

                <DetailsSectionBody
                  description={description}
                  features={features ? features : items}
                  alignment={alignment} />

                {(footnote !== null && colouredFootnote !== null)
                  ?
                  <DetailsSectionFooter
                    colouredFootnote={colouredFootnote}
                    footnote={footnote}
                    alignment={alignment} />
                  :
                  (footnote !== null && colouredFootnote == null)
                    ?
                    <DetailsSectionFooter
                      footnote={footnote}
                      alignment={alignment} />
                    : null}

                {/* {hasContent
                  ?
                  <ViewMoreButton onClick={togglePanel}>
                    View More
                  </ViewMoreButton>
                  : null} */}

              </SectionContainer>
            </Section>
            <PanelContent style={panelContentAnimatedStyle}>
              <PanelContentInner ref={ref}>
                {panelContent !== null && typeof panelContent !== 'undefined'
                  ?
                  <>
                    {panelContent.filter(section => section.fields.forSection == id)
                      .map(item => {
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