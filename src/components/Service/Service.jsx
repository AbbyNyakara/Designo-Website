import React from 'react';
import './service.scss';
import rightArrow from '../../assets/icon-right-arrow.svg';

const Service = (props) => {
  return (
    <div className='service'>
      <h2 className='service__name'>{props.title}</h2>
      <a href="#" className='service__view'>
        view projects
        <img src={rightArrow} alt="" className='arrow__right' />
      </a>
    </div>
  )
}

export default Service