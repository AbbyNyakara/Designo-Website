import React from 'react';
import './location.scss';
import LocationCard from '../LocationCard/LocationCard';
import canadaMap from '../../assets/image-map-canada.png';
import australiaMap from '../../assets/image-map-australia.png';
import ukMap from '../../assets/image-map-united-kingdom.png';


const Location = () => {

  const rowReverse = {
    flexDirection: "row-reverse"
  }

  return (
    <div className='locations'>
      <LocationCard 
        location='Canada' 
        office='Designo Central Office' 
        address1='3886 Wellington Street' 
        address2='Toronto, Ontario M9C 3J5' 
        phone='+1 253-863-8967'
        email='contact@designo.co'
        map={canadaMap}
      />

      <LocationCard
        location='Australia' 
        office='Designo AU Office' 
        address1='19 Balonne Street' 
        address2='New South Wales 2443'
        phone='+(02) 6720 9092'
        email='contact@designo.au'
        map={australiaMap}
        flexDirection={rowReverse}
      />

      <LocationCard 
        location='United Kingdom' 
        office='Designo UK Office' 
        address1='13 Colorado Way' 
        address2='Rhyd-y-fro SA8 9GA'
        phone='078 3115 1400'
        email='contact@designo.uk'
        map={ukMap}
      />
    </div>
  )
}

export default Location