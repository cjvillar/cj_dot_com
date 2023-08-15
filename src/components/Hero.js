import React from 'react';
import HeroImage from '../images/hero_MP4.gif'


const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center">
  <div className="absolute inset-0 hero"></div>
  <div className="absolute inset-0 flex items-center justify-center">
  <img
            src={HeroImage}
            alt="Hello World"
          />
  </div>
</div>
  )
}

export default Hero