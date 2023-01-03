import React from 'react';
import './locationCard.scss';

const LocationCard = (props) => {
  return (
    <div className='location__card'>
      <div className="location__details">
        <h2 className='location__place'>{props.location}</h2>
        <div className="location__card-offices">
          <div className="offices__left">
            <h4>{props.office}</h4>
            <p>{props.address1} <br />
              {props.address2}</p>
          </div>
          <div className="offices__right">
            <h4>Contacts</h4>
            <p>P : {props.phone} <br />
              M : {props.email}</p>
          </div>
        </div>
      </div>
      <div className="location__map">
        <img src={props.map} alt="" className='map__image' />
      </div>
    </div>
  )
}

export default LocationCard