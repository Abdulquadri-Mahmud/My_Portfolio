import React from 'react'
import Hero from '../layout/Hero'
import AboutComponent from '../components/AboutComponent'
import ServicesComponent from '../components/ServicesComponent'
import ContactComponent from '../components/ContactComponent'
import SkillsAndJourney from '../components/SkillsAndJourney'
import PortfolioComponent from '../components/PortfolioComponent'

export default function Home() {
  return (
    <div className='bg-white'>
      <Hero/>
      <AboutComponent/>
      <SkillsAndJourney/>
      <PortfolioComponent/>
      <ServicesComponent/>
      <ContactComponent/>
    </div>
  )
}
