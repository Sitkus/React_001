import React, { useState } from 'react';
import * as Style from './Header.style';
import Navigation from './Navigation';

const Header = ({ hero }) => {
  const [active, setActive] = useState('');

  return (
    <Style.Header>
      <Navigation active={ active } setActive={ setActive } />
      <Style.Description>
        <Style.Title>{ hero.headline }</Style.Title>
        <Style.Body>{ hero.message }</Style.Body>
      </Style.Description>
    </Style.Header>
  );
}

export default Header;
