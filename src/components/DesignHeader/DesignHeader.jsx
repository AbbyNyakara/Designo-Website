import React from 'react';
import './designHeader.scss';

const DesignHeader = (props) => {

  const {title, description} = props;

  return (
    <div className='design__header'>
      <h2 className='design__header-title'>{title}</h2>
      <p className='design__header-description'>{description}</p>
    </div>
  )
}

export default DesignHeader