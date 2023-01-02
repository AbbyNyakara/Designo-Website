import React from 'react';
import './hero.scss';
import img1 from '../../assets/image-hero-phone.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero__left">
        <h1 className='hero__title'>Award-winning custom designs and digital branding solutions</h1>
        <p className='hero__description'>
          With over 10 years in the industry, we are experienced in creating fully responsive websites, app
          design, and engaging brand experiences. Find out more about our services.
        </p>
        <button className='btn'>learn more</button>
      </div>
      <div className="hero__right">
        <img src={img1} alt="" className='hero__phone_img' />
      </div>
    </div>
  )
}

export default Hero