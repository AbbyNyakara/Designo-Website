import React from 'react';
import './companyCard.scss';
import { PropTypes } from 'prop-types';

const CompanyCard = (props) => {

  const additionalHeadingStyles = {
    color: props.isLightHeading ? 'white' : '#e88069'
  };

  const additionalRowStyles = {
    flexDirection: props.rowReverse ? 'row-reverse' : 'row'
  };

  const additionalTextColors = {
    color: props.color ? '' : ''
  }

  const { title, description, image } = props

  return (
    <div className='company__card'>
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
  image: PropTypes.stylePropType
}


export default CompanyCard