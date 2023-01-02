import React from 'react';
import logo from '../../assets/logo-dark.png';
import './header.scss';

const Header = () => {
  return (
    <nav className='nav'>
      <div className="nav__logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className='nav__links'>
        <li>Our Company</li>
        <li>Locations</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Header