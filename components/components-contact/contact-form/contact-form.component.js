// React
import React, { useRef } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { RiMessengerFill } from 'react-icons/ri';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { isMobile } from 'react-device-detect';

// EmailJS
import emailjs from 'emailjs-com';

// Next

// Contentful

// Components
import ButtonSubmit from '../../../utils/button-submit/button-submit.component';

// Images

// Data

// Styles
import styled from 'styled-components';
import ButtonLink from '../../../utils/button-link/button-link.component';
import { LineBreak } from '../../components-bicycles/bicycle-card/bicycle-card.component';

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
  text-align: end;
`;

const TextInput = styled.input`
  height: 2.5rem;
  padding: 0.5rem;
  border: 1px solid #31313140;
`;

const TextArea = styled.textarea`
  resize: none;
  border: 1px solid #31313140;
  padding: 0.5rem;
`;

const BreakLine = styled.div`
  width: 80%;
  height: 1px;
  background: #31313140;
  margin: 0 auto;
`;

const MessageServices = styled.div`
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

const ContactOptionHeading = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  
`;

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p607xol', 'template_6is8rjq', form.current, 'fNeFj7Gwd4AFaJ1vt')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <ContactSection>
      <Form ref={form} onSubmit={sendEmail}>
        <TextInput className='rounded-corners' type='text' name='from_name' placeholder='Your Full Name' required />
        <TextInput className='rounded-corners' type='email' name='from_email' placeholder='Your Email' required />
        <TextArea className='rounded-corners' name='message' rows='10' placeholder='Your Message' required />
        <ButtonSection>
          <ButtonSubmit color='--grey' fill={true}>
            Send Message
          </ButtonSubmit>
        </ButtonSection>
      </Form>
      <LineBreak />
      <MessageServices>
        <ContactOption className='rounded-corners'>
          <ContactOptionHeading>
            <AiOutlineMail className='contact-option-icon' color='#ED1D22' />
            <h4>Email</h4>
          </ContactOptionHeading>
          <ButtonLink to='mailto:queries@pjcsport.co.za' color='--red' fill={false}>
            <a target='_blank' rel='noreferrer'>Send a message</a>
          </ButtonLink>
        </ContactOption>
        <ContactOption className='rounded-corners'>
          <ContactOptionHeading>
            <RiMessengerFill className='contact-option-icon' color='#0695FF' />
            <h4>Messenger</h4>
          </ContactOptionHeading>
          {isMobile
            ?
            <ButtonLink to='https://m.facebook.com/messages/compose?ids=pjcsport' color='--messenger' fill={false}>
              Send a message
            </ButtonLink>
            :
            <ButtonLink to='https://m.me/pjcsport' color='--messenger' fill={false}>
              Send a message
            </ButtonLink>
          }
        </ContactOption>
        <ContactOption className='rounded-corners'>
          <ContactOptionHeading>
            <AiOutlineWhatsApp className='contact-option-icon' color='#25D366' />
            <h4>WhatsApp</h4>
          </ContactOptionHeading>
          <ButtonLink to='https://api.whatsapp.com/send?phone=27824559060' color='--whatsapp' fill={false}>
            Send a message
          </ButtonLink>
        </ContactOption>
      </MessageServices>
    </ContactSection>
  );
};

export default ContactForm;
