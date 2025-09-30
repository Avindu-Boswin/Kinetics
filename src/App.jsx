import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Network from './components/Network';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Network />
      <Contact />
      <Footer />
    </>
  )
}

export default App
