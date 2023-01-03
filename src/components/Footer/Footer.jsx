import React from 'react';
import './footer.scss';
import logo from '../../assets/logo-dark.png';
import Header from '../Header/Header';
import facebookIcon from '../../assets/icon-facebook.svg';
import youTubeIcon from '../../assets/icon-youtube.svg';
import twitterIcon from '../../assets/icon-twitter.svg';
import pinterestIcon from '../../assets/icon-pinterest.svg';
import instagramIcon from '../../assets/icon-instagram.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <Header />
      <div className="footer__main">
        <div className="footer__left">
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
        

        <div className="footer__socials">
          <img src={facebookIcon} alt="" />
          <img src={youTubeIcon} alt="" />
          <img src={twitterIcon} alt="" />
          <img src={pinterestIcon} alt="" />
          <img src={instagramIcon} alt="" /> 
        </div>
      </div>
    </div>
  )
}

export default Footer