import React from 'react';
import './contact.scss';
import ContactCard from '../ContactCard/ContactCard';
import canadaPic from '../../assets/illustration-canada.svg';
import australiaPic from '../../assets/illustration-australia.svg';
import ukPic from '../../assets/illustration-united-kingdom.svg';

const Contact = () => {
  return (
    <div className="contact__container">
      <div className='contact'>
        <div className="contact__info">
          <div className="contact__details">
            <h2 className='contact__details-title'>Contact Us</h2>
            <p className='contact__details-description'>
            Ready to take it to the next level? Let’s talk about your project
            or idea and find out how we can help your business grow. If you are 
            looking for unique digital experiences that’s relatable to your users, 
            drop us a line.
            </p>
          </div>

          <form action="" className='contact__form' >
            <input type="text" name="" placeholder='name' required />
            <input type="email" name="" id="" placeholder='email' required />
            <input type="text" name="" id="" placeholder='phone' required/>
            <textarea name="" id="" cols="5" rows="10" placeholder='Your Message' required />
            <button className='btn contact__btn'>submit</button>
          </form>
        </div>
      </div>

      <div className="contact__cards">
        <ContactCard
          image={canadaPic}
          location="Canada"
        />

        <ContactCard
          image={australiaPic}
          location= "Australia"
        />

        <ContactCard 
          image={ukPic}
          location="United Kingdom"
        />
      </div>
      
    </div>
  )
}

export default Contact