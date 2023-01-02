import React from 'react';
import './about.scss';
import AboutCard from '../AboutCard/AboutCard';
import passionateImg from '../../assets/illustration-passionate.svg';
import resourcefulImg from '../../assets/illustration-resourceful.svg';
import friendlyImg from '../../assets/illustration-friendly.svg';

const About = () => {
  return (
    <div className='about'>
      <AboutCard
       image={passionateImg} 
       title="Passionate" 
       description="Each project starts with an in-depth brand research to ensure we only create 
       products that serve a purpose. We merge art, design, and technology into exciting new 
       solutions."
       />

       <AboutCard
        image={resourcefulImg}
        title="Resourceful"
        description="Everything that we do has a strategic purpose. We use an agile approach 
        in all of our projects and value customer collaboration. It guarantees superior 
        results that fulfill our clients’ needs."
        />

        <AboutCard 
          image={friendlyImg}
          title="friendly"
          description="We are a group of enthusiastic folks who know how to put people first. 
          Our success depends on our customers, and we strive to give them the best experience
          a company can provide."
        />

    </div>
  )
}

export default About