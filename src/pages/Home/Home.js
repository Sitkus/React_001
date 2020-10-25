import React from 'react';
import * as Style from './Home.style';
import { Header, Footer } from '../../components';

const Home = () => {
  const hero = {
    headline: 'We design your day!',
    message: 'Welcome to our website. We\'re creators and we would like to present your our work.'
  };

  return (
    <>
      <Header hero={ hero } />
      <Style.Main>
        <Style.Section>
          <Style.SectionTitle>Network</Style.SectionTitle>
          <ul className="section__list">
            <li className="section__item"><a href="#">johnny@bravo.com</a></li>
            <li className="section__item"><a href="#">Behance</a></li>
            <li className="section__item"><a href="#">Twitter</a></li>
          </ul>
        </Style.Section>
        <Style.Section>
          <Style.SectionTitle>Skills & Focus</Style.SectionTitle>
          <ul className="section__list">
            <li className="section__item">Art Direction</li>
            <li className="section__item">Website Design</li>
            <li className="section__item">Brand Identity Design</li>
          </ul>
        </Style.Section>
      </Style.Main>
      <Footer />
    </>
  );
}

export default Home;
