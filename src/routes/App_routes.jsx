import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Services from '../pages/Services';
import ContactPage from '../pages/Contact';

export default function App_routes() {
  return (
    <Router future={{v7_startTransition: true,v7_relativeSplatPath: true,}}>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}
