import React from 'react';
import { Header, Footer } from '../../components';

const About = () => {
  const hero = {
    headline: 'Who we are?',
    message: 'Well, we\'re those creators you always dreamed of. So hire us, right now.'
  };

  return (
    <>
      <Header hero={ hero } />
      <div>
        <h1>Hello its my about page</h1>
      </div>
      <Footer />
    </>
  );
}

export default About;
