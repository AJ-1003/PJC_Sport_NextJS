// React
import React from 'react';

// Next
import Head from 'next/head';
import Image from 'next/image';

// Contentful
import client from '/contentful/contentful.data';

// Components
import BicycleSpecifications from '../../components/components-bicycles/bicycle-details-specifications/bicycle-details-specifications.component';
import SeperationHeader from '../../components/seperation-header/seperation-header.component';
import BicycleSkeleton from '../../components/skeletons/bicycle-skeleton.component';
import BicycleCarouselSlider from '../../components/carousel/bicycleCarousel.component';

// Images

// Data

// Styles
import styled from 'styled-components';

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'bicycle',
  });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.name,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'bicycle',
    'fields.name': params.slug,
  });

  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      bicycle: items[0],
    },
    revalidate: 1,
  };
};

const BicycleDetails = ({ bicycle }) => {
  if (!bicycle) {
    return <BicycleSkeleton />;
  }

  const {
    name,
    brand,
    model,
    description,
    frameMaterial,
    availableSizes,
    fork,
    rearShock,
    chainwheel,
    frontDerailleur,
    rearDerailleur,
    shifters,
    chain,
    cassette,
    bottomBracket,
    speed,
    brakes,
    wheels,
    frontHub,
    rearHub,
    tyres,
    stem,
    seatPost,
    extras,
    priceNow,
    priceWas,
    cardImage,
    cardImages,
    detailsImageWidth,
    detailsImageHeight,
    altText,
    onSpecial,
    tsCs,
  } = bicycle.fields;

  // console.log(cardImages);

  var specs = {
    frameMaterial,
    fork,
    rearShock,
    chainwheel,
    frontDerailleur,
    rearDerailleur,
    shifters,
    chain,
    cassette,
    bottomBracket,
    speed,
    brakes,
    wheels,
    frontHub,
    rearHub,
    tyres,
    stem,
    seatPost,
    extras,
  };

  var sizes = '';

  availableSizes.map((size) => {
    sizes += ' ' + size;
  });

  const header = `${brand} ${model}`;

  return (
    <>
      <Head>
        <title>
          PJC Sport & Cycles - {brand} {model}
        </title>
        <meta
          name="description"
          content={`${brand} ${model}. ${description}`}
        />
        <meta name="robots" content="index,follow"></meta>
        <link
          rel="canonical"
          href={`https://www.pjcsport.co.za/${name}`}
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main>
        <div className="slug-top">
          <div className="bicycle-hero">
            <div className="bicycle-hero-content rounded-corners">
              <div className="bicycle-img-container rounded-corners">
                {typeof cardImages !== 'undefined' &&
                cardImages !== '' &&
                cardImages !== null ? (
                  cardImages.length > 1 ? (
                    <div className="bicycle-img">
                      <BicycleCarouselSlider
                        images={cardImages}
                        width={detailsImageWidth / 3}
                        height={detailsImageHeight / 3}
                        altText={altText}
                      />
                    </div>
                  ) : (
                    <div className="bicycle-img">
                      <Image
                        src={'https:' + cardImage.fields.file.url}
                        objectFit="cover"
                        objectPosition="top"
                        width={detailsImageWidth / 3}
                        height={detailsImageHeight / 3}
                        responsive="true"
                        alt={altText}
                        priority={true}
                        quality={100}
                        className="rounded-corners"
                      />
                    </div>
                  )
                ) : (
                  <p>No image</p>
                )}
              </div>
              <div className="bicycle-details rounded-corners">
                <div className="bd-top">
                  <h2>Description</h2>
                  <p>{description}</p>
                </div>
                <div className="bd-bottom">
                  <hr />
                  <AvailableSizes>
                    <div>
                      <span className="bold">Avaialable sizes: </span>
                    </div>
                    <Sizes>
                      {availableSizes.map((size) => {
                        return <li key={size}>{size}</li>;
                      })}
                    </Sizes>
                  </AvailableSizes>
                  <PriceContainer>
                    {onSpecial ? (
                      <Price>
                        <span className="bold">Price: </span>
                        <PriceNow className="bold">
                          Now - R{priceNow}.00
                        </PriceNow>
                        <PriceWas>Was - R{priceWas}.00</PriceWas>
                      </Price>
                    ) : (
                      <Price>
                        <span className="bold">Price: </span>
                        <PriceNow className="bold">R{priceNow}.00</PriceNow>
                      </Price>
                    )}
                  </PriceContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SeperationHeader childrenLvl1="Specifications" />
        <Details>
          <DetailsContainer>
            <DetailsSection>
              <DetailsBottomSection>
                <Bottom>
                  <BicycleSpecifications content={specs} />
                </Bottom>
                <TsCs>
                  Bicycle specifications and color may vary from manufacturer
                  website. Other models available. T&apos;s & C&apos;s apply.
                </TsCs>
              </DetailsBottomSection>
            </DetailsSection>
          </DetailsContainer>
        </Details>
      </Main>
    </>
  );
};

export default BicycleDetails;

const Main = styled.main`
  /* background: url(${(props) => props.backgroundImg}) top / 100% no-repeat; */
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;

  .slug-top {
    background: linear-gradient(
      250deg,
      rgba(var(--grey-background), 0.5) 20%,
      rgba(var(--orange-background), 0.5) 100%
    );

    .bicycle-hero {
      padding: 8rem 0 2rem;
      width: 70%;
      margin: auto;
      position: relative;

      .bicycle-hero-content {
        padding: 1rem;
        gap: 3rem;
        display: flex;
        flex-direction: row-reverse;

        .bicycle-img-container {
          width: 50%;

          @media screen and (max-width: 767px) {
            width: 100%;
          }

          .bicycle-img {
          }

          @media screen and (min-width: 768px) and (max-width: 1023px) {
            width: 100%;
            gap: 1rem;
          }

          @media screen and (max-width: 767px) {
            gap: 1rem;
          }
        }

        .bicycle-details {
          width: 50%;
          padding: 2rem;
          background: var(--background-grey);
          display: flex;
          flex-direction: column;

          .bd-top {
          }

          .bd-bottom {
            margin-top: auto;
          }

          h2 {
            color: var(--orange);
          }

          @media screen and (min-width: 768px) and (max-width: 1023px) {
            width: 100%;
            gap: 2rem;
          }

          @media screen and (max-width: 767px) {
            padding: 1rem;
            width: 100%;
            gap: 1rem;
            flex-direction: column;
          }
        }

        @media screen and (min-width: 768px) and (max-width: 1023px) {
          gap: 2rem;
          flex-direction: column;
        }

        @media screen and (max-width: 767px) {
          gap: 1rem;
          flex-direction: column;
        }
      }

      @media screen and (min-width: 1024px) and (max-width: 1080px) {
        width: 90%;
      }

      @media screen and (min-width: 768px) and (max-width: 1023px) {
        width: 90%;
      }

      @media screen and (max-width: 767px) {
        width: 100%;
      }
    }
  }
`;

const ImageContainer = styled.div`
  /* object-position: top; */
  /* position: relative; */
  /* top: 2rem; */
`;

const Details = styled.div`
  position: relative;
`;

const DetailsContainer = styled.div`
  width: 80%;
  padding: 2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 90%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
`;

const DetailsHeading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  border-radius: 0.5rem 0.5rem 0 0;
  /* z-index: 2; */
  width: 100%;

  h1 {
    font-size: 6rem;
    margin: 0;
    color: rgba(235, 235, 235, 0.7);
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;

    @media screen and (min-width: 768px) and (max-width: 1023px) {
      font-size: 5rem;
    }

    @media screen and (max-width: 767px) {
      font-size: 2rem;
      padding: 0 1rem;
    }
  }
`;

const DetailsSection = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  background: rgba(var(--grey-background), 0.05);
  border-radius: 0.5rem;

  @media screen and (max-width: 767px) {
    padding: 1.5rem 2rem 2rem;
    margin: 0;
    border-radius: 0;
  }
`;

const DetailsTopSection = styled.div``;

const DescriptionText = styled.div`
  margin: 0 auto;
`;

const DetailsBottomSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Top = styled.div`
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

const AvailableSizes = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Sizes = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding-left: 0;

  li {
    padding: 0 5px;
    margin: 0;
  }
`;

const PriceContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Price = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: start;
`;

const PriceWas = styled.div`
  font-weight: 400;
  text-decoration: line-through;
  color: #808080;
`;

const PriceNow = styled.div``;

const Bottom = styled.div``;

const TsCs = styled.span`
  color: var(--light-grey);
  font-style: italic;
  font-size: 0.8rem;
`;
