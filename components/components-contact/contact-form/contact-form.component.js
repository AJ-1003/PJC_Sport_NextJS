// React
import React, { useRef, useState } from 'react';

// EmailJS
import emailjs from '@emailjs/browser';

// Next
import Image from 'next/image';
import Link from 'next/link';

// Contentful

// Components
import ButtonSubmit from '../../../utils/button-submit/button-submit.component';
import ConfirmationMessage from '../../../utils/confirmation-message/confirmation-message.component';

// Images
import Email from '/assets/footer/icons8-circled-envelope-48.png';
import Messenger from '/assets/footer/icons8-facebook-messenger.svg';
import WhatsApp from '/assets/footer/icons8-whatsapp.svg';

// Data

// Styles
import styled from 'styled-components';

const ContactForm = () => {
  const form = useRef();
  const [messageState, setMessageState] = useState(false);
  const [messageSentState, setMessageSentState] = useState(false);

  function openMessage() {
    var runtime = 0;
    setMessageState(!messageState);
    var interval = setInterval(function () {
      runtime += 1;
      if (runtime == 5) {
        clearInterval(interval);
        setMessageState(false);
      }
    }, 1000);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, form.current, `${process.env.NEXT_PUBLIC_PUBLIC_KEY}`)
      .then((result) => {
        console.log(result.text);
        setMessageSentState(!messageSentState);
        openMessage();
      }, (error) => {
        console.log(error.text);
        openMessage();
      });
    e.target.reset();
  };

  return (
    <ContactSection id='contact-us'>
      <Form id='contact-us-form' ref={form} onSubmit={sendEmail}>
        <TextInput className='rounded-corners' type='text' name='from_name' placeholder='Enter your name' required />
        <TextInput className='rounded-corners' type='email' name='from_email' placeholder='Enter your email' required />
        <TextArea className='rounded-corners' name='message' rows='10' placeholder='Message' required />
        <ButtonSection>
          <ConfirmationMessage messageState={messageState} success={messageSentState} />
          <ButtonSubmit color='--grey' fill={true}>
            Send Message
          </ButtonSubmit>
        </ButtonSection>
      </Form>
      <LineBreak />
      <MessageServices>
        <MessageServicesHeading>Or contact us via:</MessageServicesHeading>
        <MessageServiceOptions>
          <ContactOption className='pointer'>
            <Link href='mailto:queries@pjcsport.co.za' rel='noopener noreferrer' target='_blank'>
              <Image src={Email} width='50' height='50' alt='email' />
            </Link>
          </ContactOption>
          <ContactOption className='pointer'>
            <Link href='https://m.me/pjcsport'>
              <a target='_blank' rel='noopener norefferer'>
                <Messenger />
              </a>
            </Link>
          </ContactOption>
          <ContactOption className='pointer'>
            <Link href='https://api.whatsapp.com/send?phone=27824559060'>
              <a target='_blank' rel='noopener noreferrer'>
                <WhatsApp />
              </a>
            </Link>
          </ContactOption>
        </MessageServiceOptions>
      </MessageServices>
    </ContactSection>
  );
};

export default ContactForm;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40%;
  margin: 0 auto;

  @media screen and (min-width: 1024px) and (max-width: 1080px) {
    width: 50%;
    gap: 0.5rem;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 80%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.5rem 0.5rem 0;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
`;

const TextInput = styled.input`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  height: 2.5rem;
  padding: 0.5rem;
  border: 1px solid #31313140;
`;

const TextArea = styled.textarea`
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  resize: none;
  border: 1px solid #31313140;
  padding: 0.5rem;
`;

const MessageServices = styled.div`
  display: flex;
  flex-direction: column;
`;

const MessageServicesHeading = styled.h4`
  text-align: center;
`;

const MessageServiceOptions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-evenly;
  padding: 0 0.5rem;
`;

const ContactOption = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;

  h4, h5 {
    margin: 0;
  }
`;

const LineBreak = styled.div`
  background: #313131;
  height: 1px;
  width: 90%;
  margin: 5px auto;
`;