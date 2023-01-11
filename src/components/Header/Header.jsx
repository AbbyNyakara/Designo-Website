import { Link } from 'react-router-dom';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-dark.png';
import './header.scss';

const Header = () => {

  const navigate = useNavigate();

  const toHome = () => {
    navigate('/')
  }

  const toAbout = () => {
    navigate('/about')
  }

  const toLocations = () => {
    navigate('/locations')
  }

  const toContact = () => {
    navigate('/contact')
  }

  return (
    <nav className='nav'>
      <div className="nav__logo" onClick={toHome}>
        <img src={logo} alt="logo" />
      </div>
      <ul className='nav__links'>
        <li onClick={toAbout}>
          Our Company
        </li>
        <li onClick={toLocations}>
          Location
        </li>
        <li onClick={toContact}>
          Contact
        </li>
      </ul>
    </nav>
  )
}

export default Header