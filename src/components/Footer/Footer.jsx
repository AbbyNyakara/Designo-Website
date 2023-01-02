import React from 'react';
import './footer.scss';
import logo from '../../assets/logo-dark.png';
import Header from '../Header/Header';

const Footer = () => {
  return (
    <div className='footer'>
      <Header />
      <div className="footer__main">
        <div className="footer__location">
          Designo Central Office <br />
          3886 Wellington Street <br />
          Toronto, Ontario M9C 3J5
        </div>

        <div className="footer__contact">
          Contact Us (Central Office) <br />
          P :+1 253-863-8967 <br />
          M : contact@designo.com
        </div>
      </div>
    </div>
  )
}

export default Footer