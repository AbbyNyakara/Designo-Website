import React from 'react';
import { PropTypes } from 'prop-types';
import './aboutCard.scss';
import passionateImg from '../../assets/illustration-passionate.svg';
import resourcefulImg from '../../assets/illustration-resourceful.svg';
import friendlyImg from '../../assets/illustration-friendly.svg';

const AboutCard = (props) => {
  return (
    <div className='about__card'> 
      <img src={props.image} alt="" className='card__image'/>
      <h3 className='card__title'>{props.title}</h3>
      <p className='card__description'>{props.description}</p>
    </div>
  )
};

AboutCard.propTypes = {
  image: PropTypes.element,
  title: PropTypes.string,
  decription: PropTypes.string
};

export default AboutCard;
