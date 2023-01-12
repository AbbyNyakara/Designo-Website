import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-dark.png';
import menuIcon from '../../assets/open-menu.png';
import closeIcon from '../../assets/close-menu.png';
import './header.scss';

const Header = () => {

  const [open, setOpen] = useState(false);

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
      
      <div className="main__navigation" id={open ? "showLinks" : ""}>
        <div className="close__icon__mobile" onClick={() => setOpen(!open)}>
          <img src={closeIcon} alt="" />
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
      </div>
      <div className="mobile__nav" onClick={() => setOpen(!open)}>
        <img src={menuIcon} alt="" />
      </div>
    </nav>
  )
}

export default Header