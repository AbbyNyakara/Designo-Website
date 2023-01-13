import React from 'react';
import { useNavigate } from 'react-router-dom';
import './contactCard.scss';
import { PropTypes } from 'prop-types';

const ContactCard = (props) => {

  const navigate = useNavigate();

  const toLocation = () => {
    navigate('/locations')
  }

  const {image, location} = props
  return (
    <div className='contact__card'>
      <img src={image} alt="" className='image__location'/>
      <h2 className='contact__card-title'>{location}</h2>
      <button className='btn btn--secondary' onClick={toLocation}>see location</button>
    </div>
  )
}

ContactCard.propTypes = {
  image: PropTypes.element,
  location: PropTypes.string
}

export default ContactCard