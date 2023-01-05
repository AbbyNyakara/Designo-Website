import React from 'react';
import DesignCard from '../DesignCard/DesignCard';
import './webDesign.scss';

const WebDesign = () => {
  return (
    <div className='web__design'>
      <div className="web__design_header">
        <h2 className='web__design-title'>Web Design</h2>
        <p className='web__design-description'>We build websites that serve as powerful marketing tools
          and bring memorable brand experiences.</p>
      </div>

      <div className="web__design--skill_cards">
        <DesignCard />
        <DesignCard />
        <DesignCard />
      </div>
    </div>
  )
}

export default WebDesign