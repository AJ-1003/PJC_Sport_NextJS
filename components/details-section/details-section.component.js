// React
import React, { useState } from 'react';

// Next
import { useRouter } from 'next/router';

// Contentful

// Components
import DetailsSectionBody from './details-section-body.component';
import DetailsSectionFooter from './details-section-footer.component';
import DetailsSectionHeader from './details-section-header.component';
import BicycleCard from '../components-bicycles/bicycle-card/bicycle-card.component';
import ItemCard from '../item-card/item-card.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const DetailsSection = ({ content, panelContent, type }) => {
  const [show, setShow] = useState(false);
  const [nextShow, setNextShow] = useState(false);
  const [contentId, setContentId] = useState('');
  var router = useRouter();

  function ShowPanelContent(id) {
    setShow(!show);
    setContentId(id);
    setNextShow(!nextShow);
  }

  var route;
  if (router.route == '/') {
    route = 'home';
  } else {
    route = router.route.substring(1);
  }

  return (
    <>
      {content.map((sectionDetails) => {
        const {
          heading,
          colouredHeading,
          description,
          features,
          items,
          image,
          colouredFootnote,
          footnote,
          id,
          hasContent,
          order,
        } = sectionDetails.fields;
        var alignment;
        if (order % 2 == 0) {
          alignment = 'left';
        } else {
          alignment = 'right';
        }
        return (
          <>
            <Section
              key={id}
              id={id}
              backgroundImg={'https:' + image.fields.file.url}
              className={route}
            >
              <SectionContainer>
                <DetailsSectionHeader
                  heading={heading}
                  colouredHeading={colouredHeading}
                  alignment={alignment}
                />

                <DetailsSectionBody
                  description={description}
                  features={features ? features : items}
                  alignment={alignment}
                />

                {footnote !== null && colouredFootnote !== null ? (
                  <DetailsSectionFooter
                    colouredFootnote={colouredFootnote}
                    footnote={footnote}
                    alignment={alignment}
                  />
                ) : footnote !== null && colouredFootnote == null ? (
                  <DetailsSectionFooter
                    footnote={footnote}
                    alignment={alignment}
                  />
                ) : null}

                {hasContent ? (
                  <ViewMoreButtonContainer className={alignment}>
                    <ViewMoreButton
                      className="rounded-corners"
                      onClick={() => ShowPanelContent(id)}
                    >
                      View More
                    </ViewMoreButton>
                  </ViewMoreButtonContainer>
                ) : null}
              </SectionContainer>
            </Section>

            {type == 'bicycles' ? (
              <>
                {(show &&
                  panelContent !== null &&
                  typeof panelContent !== 'undefined' &&
                  contentId == id) ||
                (nextShow &&
                  panelContent !== null &&
                  typeof panelContent !== 'undefined' &&
                  contentId == id) ? (
                  <>
                    <PanelContent>
                      {panelContent
                        .filter((bicycle) => bicycle.fields.forSection == id)
                        .map((item) => {
                          return (
                            <>
                              <BicycleCard key={item.sys.id} content={item} />
                            </>
                          );
                        })}
                    </PanelContent>
                  </>
                ) : null}
              </>
            ) : null}

            {type == 'products' ? (
              <>
                {(show &&
                  panelContent !== null &&
                  typeof panelContent !== 'undefined' &&
                  contentId == id) ||
                (nextShow &&
                  panelContent !== null &&
                  typeof panelContent !== 'undefined' &&
                  contentId == id) ? (
                  <>
                    <PanelContent>
                      {panelContent
                        .filter((product) => product.fields.forSection == id)
                        .map((item) => {
                          return (
                            <>
                              <ItemCard key={item.sys.id} content={item} />
                            </>
                          );
                        })}
                    </PanelContent>
                  </>
                ) : null}
              </>
            ) : null}
          </>
        );
      })}
    </>
  );
};

export default DetailsSection;

const Section = styled.div`
  min-height: 400px;
  background: linear-gradient(
      0deg,
      rgba(var(--dark-grey-background), 0.9) 60%,
      rgba(var(--dark-grey-background), 0.5) 100%
    ),
    url(${(props) => props.backgroundImg}) center / cover no-repeat, transparent;
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

const ViewMoreButtonContainer = styled.div`
  &.left {
    text-align: left;
  }

  &.right {
    text-align: right;
  }
`;

const ViewMoreButton = styled.button`
  cursor: pointer;
  width: fit-content;
  padding: 10px 15px;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
  background: var(--orange);
`;

const PanelContent = styled.div``;
