// React

// Next

// Contentful
import { createClient } from 'contentful';

// Components

// Images

// Data

// Styles

const client = createClient({
  space: NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
});

export default client;