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
  return (
    <Container>
      {content.map(newsEvent => {
        const { newsEventName, description, images, date } = newsEvent.fields;
        return (
          <div key={newsEvent.sys.id}>
            <div>
              <NewsName name={newsEventName} />
              <NewsDescription description={description} />
              <NewsDate date={date} />
            </div>
            <div>
              <NewsImages images={images} />
            </div>
          </div>
        )
      })}
    </Container>
  );
};

export default NewsContainer;

const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 1rem 0;
`;