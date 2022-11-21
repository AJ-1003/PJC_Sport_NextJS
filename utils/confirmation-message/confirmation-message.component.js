// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  visibility: hidden;
  transition: opacity 0.5s;
  opacity: 0;

  &.active {
    visibility: visible;
    opacity: 1;
  }

  &.success {
    background: rgba(var(--green-background), 0.3);
  }

  &.error {
    background: rgba(var(--red-background), 0.3);
  }
`;

const ConfirmationMessage = (props) => {
  console.log('success message from message container: ' + props.success);
  return (
    <MessageContainer className={`rounded-corners ${props.success ? 'success' : 'error'} ${props.messageState ? 'active' : ''}`}>
      {props.success ?
        <span>Email sent successfully.</span>
        : <span>Email not sent. Please try again.</span>}
    </MessageContainer>
  );
};

export default ConfirmationMessage;
