import React from 'react';
import Service from '../Service/Service';
import { Link } from 'react-router-dom';
import './services.scss';

const Services = () => {
  return (
    <div className='services'>
      <Link to='/web-design'>
        <Service title="Web Design" />
      </Link>
      
      <div className="services__flex">
        <Link to="/app-design">
          <Service title="App Design" />
        </Link>

        <Link to="/graphic-design">
          <Service title="Graphic Design" />
        </Link>
      </div>
    </div>
  )
}

export default Services