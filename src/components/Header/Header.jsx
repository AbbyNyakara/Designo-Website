import { Link } from 'react-router-dom';
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
        <li>
          <Link to="/">Our Company</Link>
        </li>
        <li>
          <Link to='/locations'>Location</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header