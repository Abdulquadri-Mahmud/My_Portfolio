import React from 'react'
import Hero from '../layout/Hero'
import AboutComponent from '../components/AboutComponent'
import PortfolioComponent from '../components/PortfolioComponent'
import ServicesComponent from '../components/ServicesComponent'
import ContactComponent from '../components/ContactComponent'

export default function Home() {
  return (
    <div>
      <Hero/>
      <AboutComponent/>
      <PortfolioComponent/>
      <ServicesComponent/>
      <ContactComponent/>
    </div>
  )
}
