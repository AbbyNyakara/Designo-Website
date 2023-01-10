import React from 'react';
import Service from '../Service/Service';
import { Link } from 'react-router-dom';
import './services.scss';
import appDesignBg from '../../assets/image-app-design.jpg';
import graphicDesignBg from '../../assets/image-graphic-design.jpg';
import webDesignBg from '../../assets/image-web-design-large.jpg'

const Services = () => {

  const appBg = {
    backgroundImage: `url(${appDesignBg})`,
  }

  const graphicBg = {
    backgroundImage: `url(${graphicDesignBg})`,
  }

  const webBg = {
    backgroundImage: `url(${webDesignBg})`,
  }

  return (
    <div className='services'>
      <Link to='/web-design'>
        <Service title="Web Design" style={webBg}/>
      </Link>

        <Link to="/app-design" >
          <Service title="App Design" style={appBg} />
        </Link>

        <Link to="/graphic-design">
          <Service title="Graphic Design" style={graphicBg} />
        </Link>  
                 
    </div>
  )
}

export default Services