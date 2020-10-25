import React from 'react';
import * as Style from './Footer.style';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <Style.Footer>
      <p className="footer__body">© { currentYear } Copyright</p>
    </Style.Footer>
  );
}

export default Footer;
