import React from 'react';
import DesignCard from '../DesignCard/DesignCard';
import { Link } from 'react-router-dom';
import './webDesign.scss';
import expressImg from '../../assets/image-express.jpg';
import transferImg from '../../assets/image-transfer.jpg';
import photonImg from '../../assets/image-photon.jpg';
import builderImg from '../../assets/image-builder.jpg';
import blogrImg from '../../assets/image-blogr.jpg';
import campImg from '../../assets/image-camp.jpg';
import Service from '../Service/Service';
import DesignHeader from '../DesignHeader/DesignHeader';
import appDesignBg from '../../assets/image-app-design.jpg';
import graphicDesignBg from '../../assets/image-graphic-design.jpg';

const WebDesign = () => {
  const appBg = {
    backgroundImage: `url(${appDesignBg})`
  }

  const graphicBg = {
    backgroundImage: `url(${graphicDesignBg})`
  }


  return (
    <div className='web__design'>
      
      <DesignHeader 
      title="web design" 
      description="We build websites that serve as powerful marketing tools
      and bring memorable brand experiences."
      />
      
      <div className="web__design--skill_cards">
        <DesignCard 
          image={expressImg} 
          title="express"
          description="A multi-carrier shipping website for ecommerce businesses" 
        />

        <DesignCard
        image={transferImg}
        title="transfer"
        description="Site for low-cost money transfers and sending money within seconds"
        />

        <DesignCard
        image={photonImg}
        title="photon"
        description="A state-of-the-art music player with high-resolution audio and DSP effects"
        />

        <DesignCard 
          image={builderImg}
          title="builder"
          description="Connects users with local contractors based on their location"
        />

        <DesignCard 
          image={blogrImg}
          title="blogr"
          description="Blogr is a platform for creating an online blog or publication"
        />

        <DesignCard 
          image={campImg}
          title="camp"
          description="Get expert training in coding, data, design, and digital marketing"
        />
      </div>

      <div className="web__design--other_skills">
        <Link to='/app-design'>
          <Service title="app-design" style={appBg}/>
        </Link>

        <Link to='/graphic-design'>
          <Service title="graphic design" style={graphicBg}/>
        </Link>
      </div>
    </div>
  )
}

export default WebDesign