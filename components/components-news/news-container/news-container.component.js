// React
import React from 'react';

// Next

// Contentful

// Components
import NewsDate from './news-date.component';
import NewsDescription from './news-description.component';
import NewsImages from './news-images.component';
import NewsName from './news-name.component';

// Images

// Data

// Styles
import styled from 'styled-components';

const NewsContainer = ({ content }) => {

  var currentDate = new Date();
  var currentMonth = currentDate.getMonth();
  var previousMonth = currentDate.getMonth() - 1;

  return (
    <Container>
      <Heading>
        <HeadingText>
          News
        </HeadingText>
      </Heading>
      {content.map(newsEvent => {
        const { newsName, description, images, date } = newsEvent.fields;
        const dateParts = date.split('-');
        return (
          <>{dateParts[1] - 1 == previousMonth || dateParts[1] - 1 == currentMonth ?
            <Content key={newsEvent.sys.id} className='rounded-corners'>
              <div>
                <NewsName name={newsEventName} />
                <Underline />
                <NewsDescription description={description} />
                <NewsDate date={date} />
              </div>
              {images == '' || images == null || typeof images == 'undefined'
                ? null
                :
                <>
                  <NewsImages images={images} />
                </>}
            </Content> : null}</>
        );
      })}
    </Container>
  );
};

export default NewsContainer;

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