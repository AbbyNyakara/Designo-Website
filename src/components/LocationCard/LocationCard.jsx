import React from 'react';
import { PropTypes, string } from 'prop-types'
import './locationCard.scss';

const LocationCard = (props) => {

  const {location, office, address1, address2, phone, email, map, flexDirection} = props

  return (
    <div className='location__card' style={flexDirection}>
      <div className="location__details">
        <h2 className='location__place'>{location}</h2>
        <div className="location__card-offices">
          <div className="offices__left">
            <h4>{office}</h4>
            <p>{address1} <br />
              {address2}</p>
          </div>
          <div className="offices__right">
            <h4>Contacts</h4>
            <p>P : {phone} <br />
               M : {email}</p>
          </div>
        </div>
      </div>
      <div className="location__map">
        <img src={map} alt="" className='map__image' />
      </div>
    </div>
  )
}

// complete defining the prop types
LocationCard.propTypes = {
  location: string,
}

export default LocationCard