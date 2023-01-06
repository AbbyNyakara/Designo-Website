import React from 'react';
import './contactCard.scss';
import { PropTypes } from 'prop-types';

const ContactCard = (props) => {
  const {image, location} = props
  return (
    <div className='contact__card'>
      <img src={image} alt="" className='image__location'/>
      <h2 className='contact__card-title'>{location}</h2>
      <button className='btn btn--secondary'>see location</button>
    </div>
  )
}

ContactCard.propTypes = {
  image: PropTypes.element,
  location: PropTypes.string
}

export default ContactCard