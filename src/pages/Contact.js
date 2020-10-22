import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
  const hero = {
    headline: 'Get in touch, mate!',
    message: 'If you have anything to say, don\'t hesitate to contact us.'
  };

  return (
    <>
      <Header hero={ hero } />
      <div>
        <h1>Hello its my contact page</h1>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
