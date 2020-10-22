import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home = () => {
  const hero = {
    headline: 'We design your day!',
    message: 'Welcome to our website. We\'re creators and we would like to present your our work.'
  };

  return (
    <>
      <Header hero={ hero } />
      <main className="main">
        <div className="wrapper">
          <section className="section">
            <h3 className="section__title">Network</h3>
            <ul className="section__list">
              <li className="section__item"><a href="#">johnny@bravo.com</a></li>
              <li className="section__item"><a href="#">Behance</a></li>
              <li className="section__item"><a href="#">Twitter</a></li>
            </ul>
          </section>
          <section className="section">
            <h3 className="section__title">Skills & Focus</h3>
            <ul className="section__list">
              <li className="section__item">Art Direction</li>
              <li className="section__item">Website Design</li>
              <li className="section__item">Brand Identity Design</li>
            </ul>
          </section>
        </div>

        <section className="showcase">
          <img src="" className="showcase__image" alt="Some image here"/>
          <img src="" className="showcase__image" alt="Some image here"/>
          <img src="" className="showcase__image" alt="Some image here"/>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
