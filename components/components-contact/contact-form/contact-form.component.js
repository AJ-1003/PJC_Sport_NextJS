// React
import React from 'react';

// Next

// Contentful

// Components

// Images

// Data

// Styles
import styled from 'styled-components';
import ButtonSubmit from '../../../utils/button-submit/button-submit.component';
import TextInput from '../../../utils/text-input/text-input.component';
import TextareaInput from '../../../utils/textarea-input/textarea-input.component';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

const ContactForm = () => {
  return (
    <Form>
      <TextInput />
      <TextareaInput />
      <ButtonSubmit/>
    </Form>
  );
};

export default ContactForm;
