import React from 'react';
import './companyCard.scss';


const CompanyCard = (props) => {

  const lightHeadingStyle = {
    color: 'white'
  }

  const darkHeadingStyle = {
    color: '#e88069'
  }

  const rowReverse = {
    flexDirection: 'row-reverse'
  }

  return (
    <div className='company__card' style={props.style}>
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