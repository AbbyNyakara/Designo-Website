import React from 'react';
import './companyCard.scss';


const CompanyCard = (props) => {
  return (
    <div className='company__card'>
      <div className="company__card-left">
        <h2 className='company__card-title'>{props.title}</h2>
        <p className='company__card-description'>
          {props.description}
        </p>
      </div>

      <div className="company__card-right">
        <img src={props.image} alt="" className='company__card-image' />
      </div>
    </div>
  )
}

export default CompanyCard