import React from 'react';
import './contactCard.scss';


const ContactCard = (props) => {
  return (
    <div className='contact__card'>
      <img src={props.image} alt="" className='image__location'/>
      <h2 className='contact__card-title'>{props.location}</h2>
      <button className='btn btn--secondary'>see location</button>
    </div>
  )
}

export default ContactCard