import React from 'react';
import Service from '../Service/Service';
import { Link } from 'react-router-dom';
import './services.scss';

const Services = () => {
  return (
    <div className='services'>
      <Link to='/web-design' className="top"  >
        <Service title="Web Design" />
      </Link>

      <Link to="/app-design" >
        <Service title="App Design" className='grid2' />
      </Link>

      <Link to="/graphic-design">
        <Service title="Graphic Design" className='grid3' />
      </Link>             
    </div>
  )
}

export default Services