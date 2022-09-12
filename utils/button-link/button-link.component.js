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

const ButtonLink = ({to, children}) => {
  return (
    <Link href={to}>
      {children}
    </Link>
  )
}

export default ButtonLink;
