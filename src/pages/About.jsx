import React from 'react'
import AboutHero from '../Components/AboutHero'
import AboutWork from '../Components/AboutWork'
import AboutBenefit from '../Components/AboutBenefit'
import AboutStep from '../Components/AboutStep'
import AboutFaq from '../Components/AboutFaq'
import AboutDiscover from '../Components/AboutDiscover'
import AboutQuote from '../Components/AboutQuote'
const About = () => {
  return (
    <div>
          <AboutHero /> 
          <AboutBenefit />
          <AboutStep />
          <AboutFaq />
          <AboutDiscover />
          <AboutQuote />
          <AboutWork />
    </div>
  )
}

export default About