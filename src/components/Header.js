import React, { useState } from 'react';
import Navigation from './Navigation';

const Header = ({ hero }) => {
  const [active, setActive] = useState('');

  return (
    <header className="hero">
      <Navigation active={ active } setActive={ setActive } />
      <article className="hero__description">
        <h1 className="hero__title">{ hero.headline }</h1>
        <p className="hero__body">{ hero.message }</p>
      </article>
    </header>
  );
}

export default Header;
