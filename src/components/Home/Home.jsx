import React from 'react';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import About from '../About/About';
import Talk from '../Talk/Talk';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Services />
      <About />
    </div>
  )
}

export default Home