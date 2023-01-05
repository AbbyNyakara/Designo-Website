import React from 'react';
import Service from '../Service/Service';
import './appDesign.scss';
import DesignHeader from '../DesignHeader/DesignHeader';
import DesignCard from '../DesignCard/DesignCard';
import airfilterImg from '../../assets/image-airfilter.jpg';
import eyeCamImg from '../../assets/image-eyecam.jpg';
import faceItImg from '../../assets/image-faceit.jpg';
import todoImg from '../../assets/image-todo.jpg';
import loopStudioImg from '../../assets/image-loopstudios.jpg';

const AppDesign = () => {
  return (
    <div className='app__design'>
      <DesignHeader 
      title="App Design"
      description="Our mobile designs bring intuitive digital solutions 
      to your customers right at their fingertips."
      />

      <div className="app__design--skill_cards">
        <DesignCard 
          image={airfilterImg}
          title="airfilter"
          description="Solving the problem of poor indoor air quality by filtering the air"
        />

        <DesignCard
          image={eyeCamImg}
          title="eyecam"
          description="Product that lets you edit your favorite photos and videos at any time"
        />

        <DesignCard
          image={faceItImg}
          title="faceit"
          description="Get to meet your favorite internet superstar with the faceit app"
        />

        <DesignCard 
          image={todoImg}
          title="todo"
          description="A todo app that features cloud sync with light and dark mode"
        />

        <DesignCard 
          image={loopStudioImg}
          title="loopstudios"
          description="A VR experience app made for Loopstudios"
        />
      </div>

      <div className="app__design--other_skills">
        <Service title="web design" />
        <Service title="graphic design" />
      </div>

    </div>
  )
}

export default AppDesign