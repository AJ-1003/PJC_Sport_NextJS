// React
import React from 'react';

// Next

// Contentful

// Components
import EventsDate from './events-date.component';
import EventsDescription from './events-description.component';
import EventsImages from './events-images.component';
import EventsName from './events-name.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const EventsContainer = ({ content }) => {

  console.log(content)

  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  var previousMonth = currentDate.getMonth() - 1;

  return (
    <Container>
      <Heading>
        <HeadingText>
          This Month&apos;s Events
        </HeadingText>
      </Heading>
      {content.map(newsEvent => {
        const { eventName, description, images, date } = newsEvent.fields;
        const dateParts = date.split('-');
        return (
          <>
            {dateParts[1] - 1 == currentMonth ?
              <>
                <Content key={newsEvent.sys.id} className='rounded-corners'>
                  <div>
                    <EventsName name={eventName} />
                    <Underline />
                    <EventsDescription description={description} />
                    <EventsDate date={date} />
                  </div>
                  {images == '' || images == null || typeof images == 'undefined'
                    ? null
                    :
                    <>
                      <EventsImages images={images} />
                    </>}
                </Content></> :
              null}
          </>
        );
      })}

      {/* <Heading>
        <HeadingText>
          Last Month&apos;s Events
        </HeadingText>
      </Heading>
      {content.map(pastEvent => {
        const { eventName, description, images, date } = pastEvent.fields;
        const dateParts = date.split('-');
        return (
          <>
            {dateParts[1] - 1 == previousMonth ?
              <Content key={pastEvent.sys.id} className='rounded-corners'>
                <div>
                  <EventsName name={eventName} />
                  <Underline />
                  <EventsDescription description={description} />
                  <EventsDate date={date} />
                </div>
                {images == '' || images == null || typeof images == 'undefined'
                  ? null
                  :
                  <>
                    <EventsImages images={images} />
                  </>}
              </Content> :
              null}
          </>
        );
      })} */}
    </Container>
  );
};

export default EventsContainer;

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  padding: 2rem 0;
`;

const Content = styled.div`
  background-color: var(--background-light-grey);
  padding: 1rem;
`;

const Underline = styled.hr`
  width: 90%;
`;

const LightUnderline = styled.hr`
  width: 50%;
  color: var(--background-grey);
`;

const Heading = styled.div`
  text-align: center;
`;

const HeadingText = styled.span`
  font-family: 'Racing Sans One', sans-serif;
  font-size: 2rem;
  color: var(--red);
  padding: 0;
`;