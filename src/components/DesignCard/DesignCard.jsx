import React from 'react';
import { PropTypes } from 'prop-types';
import './designCard.scss';


const DesignCard = (props) => {
  const {image, title, description} = props;
  return (
    <div className='design__card'>
      <div className="design__card-img">
        <img src={image} alt="" />
      </div>
      <div className="design__card-main">
        <h3 className='design__card-title'>{title}</h3>
        <p className='design__card-description'>{description}</p>
      </div>
    </div>
  )
}

export default DesignCard