import React from 'react';
import { PropTypes } from 'prop-types';
import './designCard.scss';
import imageBuilderImg from '../../assets/image-builder.jpg';

const DesignCard = () => {
  return (
    <div className='design__card'>
      <div className="design__card-img">
        <img src={imageBuilderImg} alt="" />
      </div>
      <div className="design__card-main">
        <h3 className='design__card-title'>Builder</h3>
        <p className='design__card-description'>Connects users with local contractors based on their location</p>
      </div>
    </div>
  )
}

export default DesignCard