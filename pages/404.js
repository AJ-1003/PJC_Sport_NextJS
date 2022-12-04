// React
import React, { useEffect } from 'react';

// Next
import Link from 'next/link';
import { useRouter } from 'next/router';

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;

  h1 {
    color: var(--red);
    font-size: 4rem;
    font-family: 'Racing Sans One', sans-serif;
  }
`;

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  }, [router]);

  return (
    <Main>
      <h1>404</h1>
      <h2>Ooops. That page cannot be found.</h2>
      <p>Redirecting to the <Link href='/'><span className='bold pointer'>Homepage</span></Link>...</p>
    </Main>
  );
};

export default NotFound;
