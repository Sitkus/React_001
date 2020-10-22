import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <a href="" className="nav__logo-link">Logo</a>
      </div>
      <ul className="nav__list">
        <li className="nav__item"><Link to={ '/' } className="nav__link">Home</Link></li>
        <li className="nav__item"><Link to={ '/about' } className="nav__link">About</Link></li>
        <li className="nav__item"><Link to={ '/contact' } className="nav__link">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
