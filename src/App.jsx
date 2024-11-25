import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import gsap from 'gsap';
import Belt from './components/Belt';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function App() {
   
  return (
    
      <div className='overflow-hidden w-[100vw] min-h-[100vh] bg-[#0E232D]'>
      <Navbar />
      <Hero />
      <Belt />
      </div>
      
    
  )
}

export default App