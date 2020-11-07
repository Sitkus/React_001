import React from 'react';
import * as Style from './Contact.style';
import * as HStyle from '../Home/Home.style';
import { Header, Footer } from '../../components';

const Contact = () => {
  const hero = {
    headline: 'Get in touch, mate!',
    message: 'If you have anything to say, don\'t hesitate to contact us.'
  };

  return (
    <>
      <Header hero={ hero } />
      <HStyle.Main>
        <HStyle.Section>
          <Style.Form>
            <Style.Input type="text" placeholder="What's up?" />
            <Style.Input type="email" placeholder="lukas@sitkus.com" />
            <Style.Textarea placeholder="Insert your message"></Style.Textarea>
            <Style.Button>Send it!</Style.Button>
          </Style.Form>
        </HStyle.Section>
      </HStyle.Main>
      <Footer />
    </>
  );
}

export default Contact;
