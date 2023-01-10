import React from 'react';
import './company.scss';
import CompanyCard from '../CompanyCard/CompanyCard';
import ContactCard from '../ContactCard/ContactCard';
import heroAboutImg from '../../assets/image-about-hero.jpg';
import worldClassImg from '../../assets/image-world-class-talent.jpg';
import realDealImg from '../../assets/image-real-deal.jpg';
import canadaPic from '../../assets/illustration-canada.svg';
import australiaPic from '../../assets/illustration-australia.svg';
import ukPic from '../../assets/illustration-united-kingdom.svg';

const Company = () => {
  const middleCard = {
    flexDirection: 'row-reverse',
    backgroundColor: '#fdf3f0',
  }

  const bottomCard = {
    backgroundColor: '#fdf3f0',
  }

  const borderRadius = {
    borderRadius: '10px 0 0 10px'
  }

  const darkTitle = {
    color: '#e88069'
  }

  const darkText = {
    color: '#000'
  }

  return (
    <div className='company'>
      <CompanyCard
      title="About Us"
      description="Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients' audiences."
      image={heroAboutImg}
      />

      <CompanyCard
      title="World-class talent" 
      description="We are a crew of strategists, problem-solvers, and technologists. 
      Every design is thoughtfully crafted from concept to launch, ensuring success in 
      its given market. We are constantly updating our skills in a myriad of platforms.
      Our team is multi-disciplinary and we are not merely interested in form — content
      and meaning are just as important. We give great importance to craftsmanship, service, 
      and prompt delivery. Clients have always been impressed with our high-quality outcomes 
      that encapsulates their brand’s story and mission."
      image={worldClassImg}
      style={middleCard}
      imageStyle={borderRadius}
      titleColor={darkTitle}
      textColor={darkText}
      />

      <div className="location__cards">
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

      <CompanyCard
      title="The real deal"
      description="As strategic partners in our clients’ businesses, we are ready to take on any
      challenge as our own. Solving real problems require empathy and collaboration, and we 
      strive to bring a fresh perspective to every opportunity. We make design and technology 
      more accessible and give you tools to measure success. We are visual storytellers in 
      appealing and captivating ways.By combining business and marketing strategies, we inspire
      audiences to take action and drive real results."
      image={realDealImg}
      titleColor={darkTitle}
      textColor={darkText}
      style={bottomCard}
      />
    </div>
  )
}

export default Company