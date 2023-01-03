import React from 'react';
import Service from '../Service/Service';
import './services.scss';

const Services = () => {
  return (
    <div className='services'>
      <Service title="Web Design" />
      <div className="services__flex">
        <Service title="App Design" />
        <Service title="Graphic Design" />
      </div>
    </div>
  )
}

export default Services