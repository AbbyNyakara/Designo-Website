import React from 'react';
import './appDesign.scss';
import DesignHeader from '../DesignHeader/DesignHeader'

const AppDesign = () => {
  return (
    <div className='app__design'>
      <DesignHeader 
      title="app design"
      description="Our mobile designs bring intuitive digital solutions 
      to your customers right at their fingertips."
      />
    </div>
  )
}

export default AppDesign