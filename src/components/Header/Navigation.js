import React from 'react';
import * as Style from './Navigation.style';

const Navigation = () => {
  return (
    <Style.Nav>
      <div className="nav__logo">
        <Style.NavLink to={ '/' }>Logo</Style.NavLink>
      </div>
      <Style.List>
        <Style.ListItem><Style.NavLink to={ '/' }>Home</Style.NavLink></Style.ListItem>
        <Style.ListItem><Style.NavLink to={ '/about' }>About</Style.NavLink></Style.ListItem>
        <Style.ListItem><Style.NavLink to={ '/contact' }>Contact</Style.NavLink></Style.ListItem>
      </Style.List>
    </Style.Nav>
  );
}

export default Navigation;
