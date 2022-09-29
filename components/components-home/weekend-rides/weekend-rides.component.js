// React
import React from 'react';

// Next
import Link from 'next/link';

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const WeekendRidesContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  background: var(--grey);
  padding: 2rem;
  color: #fff;
`;

const Heading = styled.h2`
  color: var(--red);
  text-transform: uppercase;
  font-family: 'Racing Sans One', cursive;
  font-size: 2rem;

  span {
    color: whitesmoke;
  }
`;

const Content = styled.div`
  text-align: center;
  width: 90%;
  margin: 0 auto;
`;

const ContactUsLink = styled.span`
  color: var(--red);
`;

const WeekendRides = () => {
  return (
    <WeekendRidesContainer>
      <Content>
        <Heading>Weekend <span>Rides</span></Heading>
        <p>
          All rides starts and ends at the shop.
          Anyone is welcome to join us on weekends for a ride with coffee and doughnuts/snacks at the shop after the ride.
          Start time may vary between Summer and Winter.
          For more up-to-date information, please ask in-stores to be added to the WhatsApp group or <Link href='contact'>
            <ContactUsLink className='bold pointer'>
              Contact Us
            </ContactUsLink>
          </Link>
        </p>
      </Content>
    </WeekendRidesContainer>
  );
};

export default WeekendRides;
