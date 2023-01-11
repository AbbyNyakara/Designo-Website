import React from 'react';
import { PropTypes } from 'prop-types';
import './aboutCard.scss';
import passionateImg from '../../assets/illustration-passionate.svg';
import resourcefulImg from '../../assets/illustration-resourceful.svg';
import friendlyImg from '../../assets/illustration-friendly.svg';

const AboutCard = (props) => {
  
  const { image, title, description} = props

  return (
    <div className='about__card'> 
      <img src={image} alt="" className='card__image'/>
      <div>
        <h3 className='card__title'>{title}</h3>
        <p className='card__description'>{description}</p>
      </div> 
    </div>
  )
};

// AboutCard.propTypes = {

//   title: PropTypes.string,
//   decription: PropTypes.string
// };

export default AboutCard;
