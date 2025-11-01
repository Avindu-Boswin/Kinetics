import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import AboutDetails from './components/AboutDetails';
import Network from './components/Network';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AppPromo from './components/AppPromo';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <AboutDetails />
      <AppPromo />
      <Network />
      <Contact />
      <Footer />
    </>
  )
}

export default App
