import React from 'react'
import HeroSection from '../component/herosection/HeroSection'
import AboutSection from '../component/aboutsection/AboutSection'
import OurInstitutions from '../component/ourinstution/OurInstitutions'
import Infrastructure from '../component/Infrastructure/Infrastructure'
import './home.css'
import Ourcampus from '../component/ourcampus/Ourcampus'
const Home = () => {
  return (
    <div className='home_container'>
      <HeroSection/>
      <AboutSection/>
      <Ourcampus/>
      <OurInstitutions/>
      <Infrastructure/>
    </div>
  )
}

export default Home
