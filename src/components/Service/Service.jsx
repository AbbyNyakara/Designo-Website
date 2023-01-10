import React from 'react';
import { PropTypes } from 'prop-types';
import './service.scss';
import rightArrow from '../../assets/icon-right-arrow.svg';

const Service = (props) => {
  const {style, title} = props

  return (
    <div className='service' style={style}>
      <h2 className='service__name'>{title}</h2>
      <a href="#" className='service__view'>
        view projects
        <img src={rightArrow} alt="" className='arrow__right' />
      </a>
    </div>
  )
};

Service.propTypes = {
  title: PropTypes.string,
  style: PropTypes.element
}

export default Service