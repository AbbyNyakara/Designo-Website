import React from 'react';
import './talk.scss';

const Talk = () => {
  return (
    <div className='talk'>
      <div className="talk__main">
        <h2 className='talk__title'>Let's talk about your project</h2>
        <p className='talk__description'>Ready to take it to the next level? Contact us today and find out
        how our expertise can help your business grow.</p>
      </div>
      
      <button className='btn'>get in touch</button>
    </div>
  )
}

export default Talk