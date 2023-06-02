// React
import React from 'react';

// Next

// Contentful

// Components
import Specification from './bicycle-spec.component';

// Images
import bottomBracketImg from '/assets/bicycles/spec-icons/bottomBracket.png';
import brakesImg from '/assets/bicycles/spec-icons/brakes.png';
import cassetteImg from '/assets/bicycles/spec-icons/cassette.png';
import chainImg from '/assets/bicycles/spec-icons/chain.png';
import crankImg from '/assets/bicycles/spec-icons/crank.png';
import extrasImg from '/assets/bicycles/spec-icons/extras.png';
import forkImg from '/assets/bicycles/spec-icons/fork.png';
import frameMaterialImg from '/assets/bicycles/spec-icons/frameMaterial.png';
import frontDerailleurImg from '/assets/bicycles/spec-icons/frontDerailleur.png';
import frontHubImg from '/assets/bicycles/spec-icons/frontHub.png';
import rearDerailleurImg from '/assets/bicycles/spec-icons/rearDerailleur.png';
import rearHubImg from '/assets/bicycles/spec-icons/rearHub.png';
import rearShockImg from '/assets/bicycles/spec-icons/rearShock.png';
import seatPostImg from '/assets/bicycles/spec-icons/seatPost.png';
import shiftersImg from '/assets/bicycles/spec-icons/shifters.png';
import speedImg from '/assets/bicycles/spec-icons/speed.png';
import stemImg from '/assets/bicycles/spec-icons/stem.png';
import tyresImg from '/assets/bicycles/spec-icons/tyres.png';
import wheelsImg from '/assets/bicycles/spec-icons/wheels.png';

// Data

// Styles
import styled from 'styled-components';

const BicycleSpecifications = ({ content }) => {
  const {
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
    extras
  } = content;
  let entries = Object.entries(content)
  let data = entries.map(([key, val] = entry) => {
    return `The ${key} is ${val}`;
  });
  return (
    <SpecsContainer>
      <Left>
        <h3>Frameset</h3>
        <Specification image={frameMaterialImg} heading='Frame Material' spec={frameMaterial} />
        <h3>Suspension</h3>
        <Specification image={forkImg} heading='Fork' spec={fork} />
        <Specification image={rearShockImg} heading='Rear Shock' spec={rearShock} />
        <h3>Drivetrain</h3>
        <Specification image={frontDerailleurImg} heading='Front Derailleur' spec={frontDerailleur} />
        <Specification image={rearDerailleurImg} heading='Rear Derailleur' spec={rearDerailleur} />
        <Specification image={bottomBracketImg} heading='Bottom Bracket' spec={bottomBracket} />
        <Specification image={crankImg} heading='Crank' spec={chainwheel} />
        <Specification image={chainImg} heading='Chain' spec={chain} />
        <Specification image={shiftersImg} heading='Shifters' spec={shifters} />
        <Specification image={cassetteImg} heading='Cassette' spec={cassette} />
        <Specification image={speedImg} heading='Speed' spec={speed} />
      </Left>
      <Right>
        <h3>Brakes</h3>
        <Specification image={brakesImg} heading='Brakes' spec={brakes} />
        <h3>Wheels</h3>
        <Specification image={frontHubImg} heading='Front Hub' spec={frontHub} />
        <Specification image={rearHubImg} heading='Rear Hub' spec={rearHub} />
        <Specification image={wheelsImg} heading='Wheels' spec={wheels} />
        <Specification image={tyresImg} heading='Tyres' spec={tyres} />
        <h3>Components</h3>
        <Specification image={stemImg} heading='Stem' spec={stem} />
        <Specification image={seatPostImg} heading='Seat Post' spec={seatPost} />
        {extras !== null && typeof extras !== 'undefined'
          ?
          <>
            <h3>Extras</h3>
            <Specification image={extrasImg} heading='Extras' spec={extras} />
          </>
          :
          null
        }
      </Right>
    </SpecsContainer>
  );
};

export default BicycleSpecifications;

const SpecsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h3 {
    color: var(--orange);
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const LineBreak = styled.div`
  background: #313131;
  height: 1px;
  width: 100%;
  margin: 5px auto;
`;