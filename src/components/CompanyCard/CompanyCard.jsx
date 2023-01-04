import React from 'react';
import './companyCard.scss';
import { PropTypes } from 'prop-types';

const CompanyCard = (props) => {

  const lightHeadingStyle = {
    color: 'white'
  }

  const darkHeadingStyle = {
    color: '#e88069'
  }

  const { title, description, style, image} = props

  return (
    <div className='company__card' style={style}>
      <div className="company__card-left">
        <h2 className='company__card-title'>{title}</h2>
        <p className='company__card-description'>
          {description}
        </p>
      </div>

      <div className="company__card-right">
        <img src={image} alt="" className='company__card-image' />
      </div>
    </div>
  )
}

CompanyCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  style: PropTypes.element,
  image: PropTypes.stylePropType
}


export default CompanyCard