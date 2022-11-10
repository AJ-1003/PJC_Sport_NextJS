// React
import React, { useRef, useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerFill } from 'react-icons/ri';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { isMobile } from 'react-device-detect';

// EmailJS
import emailjs from 'emailjs-com';

// Next
import Link from 'next/link';

// Contentful

// Components
import ButtonSubmit from '../../../utils/button-submit/button-submit.component';
import ButtonLink from '../../../utils/button-link/button-link.component';
import ConfirmationMessage from '../../../utils/confirmation-message/confirmation-message.component';

// Images
import Email from '/assets/footer/icons8-circled-envelope-48.png';
import WhatsApp from '/assets/footer/icons8-whatsapp.svg';
import Messenger from '/assets/footer/icons8-facebook-messenger.svg';

// Data

// Styles
import styled from 'styled-components';
import Image from 'next/image';

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 40%;
  margin: 0 auto;
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
  justify-content: end;
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
  justify-content: space-between;
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

const ContactForm = () => {
  const form = useRef();
  const [messageState, setMessageState] = useState(false);
  const [messageSentState, setMessageSentState] = useState(false);

  function openMessage() {
    var runtime = 0;
    setMessageState(!messageState);
    var interval = setInterval(function () {
      runtime += 1;
      console.log(runtime);
      if (runtime == 5) {
        clearInterval(interval);
        setMessageState(false);
      }
    }, 1000);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, form.current, `${process.env.NEXT_PUBLIC_USER_ID}`)
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
      <Form ref={form} onSubmit={sendEmail}>
        <TextInput className='rounded-corners' type='text' name='from_name' placeholder='Your Full Name' required />
        <TextInput className='rounded-corners' type='email' name='from_email' placeholder='Your Email' required />
        <TextArea className='rounded-corners' name='message' rows='10' placeholder='Your Message' required />
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
          <ContactOption>
            <Link
              href='mailto:queries@pjcsport.co.za'
              rel='noopener noreferrer'
              target='_blank'>
              <Image src={Email} width='50' height='50' alt='email' />
            </Link>
          </ContactOption>
          <ContactOption>
            {isMobile
              ?
              <Link href='https://m.facebook.com/messages/compose?ids=pjcsport' target='_blank' rel='noopener norefferer'>
                <Messenger />
              </Link>
              :
              <Link href='https://m.me/pjcsport' target='_blank' rel='noopener norefferer'>
                <Messenger />
              </Link>
            }
          </ContactOption>
          <ContactOption>
            <Link
              href='https://api.whatsapp.com/send?phone=27824559060'
              rel='noopener noreferrer'
              target='_blank'>
              <WhatsApp />
            </Link>
          </ContactOption>
        </MessageServiceOptions>
      </MessageServices>
    </ContactSection>
  );
};

export default ContactForm;
