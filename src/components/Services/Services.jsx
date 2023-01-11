import React from 'react';
import Service from '../Service/Service';
import { useNavigate } from 'react-router-dom';
import './services.scss';
import appDesignBg from '../../assets/image-app-design.jpg';
import graphicDesignBg from '../../assets/image-graphic-design.jpg';
import webDesignBg from '../../assets/image-web-design-large.jpg'

const Services = () => {

  const navigate = useNavigate();

  //Set the different background Images for the different cards;
  const appBg = {
    backgroundImage: `url(${appDesignBg})`,
  };

  const graphicBg = {
    backgroundImage: `url(${graphicDesignBg})`,
  };

  const webBg = {
    backgroundImage: `url(${webDesignBg})`,
  };

  // Navigation functions to various pages
  const toWebDesign = () => {
    console.log("web design")
    navigate('/web-design')
  };

  const toAppDesign = () => {
    navigate('/app-design')
  };

  const toGraphicDesign = () => {
    navigate('/graphic-design')
  };

  // The onClick event has to be passed as a component. Check child component
  return (
    <div className='services'>
      <Service title="Web Design" style={webBg} onClick={toWebDesign}/>
      <div className="services__flex">
        <Service title="App Design" style={appBg} onClick={toAppDesign}/>
        <Service title="Graphic Design" style={graphicBg} onClick={toGraphicDesign} />   
      </div>   
    </div>
  )
}

export default Services