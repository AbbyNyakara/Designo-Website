import React from 'react';
import { useNavigate } from 'react-router-dom';
import DesignHeader from '../DesignHeader/DesignHeader';
import DesignCard from '../DesignCard/DesignCard';
import Service from '../Service/Service';
import './graphicDesign.scss';
import changeImg from '../../assets/image-change.jpg';
import boxedWaterImg from '../../assets/image-boxed-water.jpg';
import scienceImg from '../../assets/image-science.jpg';
import webDesignBg from '../../assets/image-web-design-large.jpg';
import appDesignBg from '../../assets/image-app-design.jpg';

const GraphicDesign = () => {

  // Define navigate 
  const navigate = useNavigate();

  // Page backgrounds
  const webBg = {
    backgroundImage: `url(${webDesignBg})`
  }

  const appBg = {
    backgroundImage: `url(${appDesignBg})`
  }

  // Navigation Functions 
  const toWebDesign = () => {
    navigate('/web-design')
  };

  const toAppDesign = () => {
    navigate('/app-design')
  }

  return (
    <div className='graphic__design'>
      <DesignHeader
      title="graphic design"
      description="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />

      <div className="graphic__design--skill_cards">
        <DesignCard
          image={changeImg}
          title="change"
          description="Solving the problem of poor indoor air quality by filtering the air"
        />

        <DesignCard
          image={boxedWaterImg}
          title="boxed water"
          description="Product that lets you edit your favorite photos and videos at any time"
        />

        <DesignCard 
          image={scienceImg}
          title="Science"
          description="Get to meet your favorite internet superstar with the faceit app"
        />
      </div>

      <div className="graphic__design--other_skills">
        <Service title="web design" style={webBg} onClick={toWebDesign} />
        <Service title="app design" style={appBg} onClick={toAppDesign} />
      </div>
    </div>
  )
}

export default GraphicDesign