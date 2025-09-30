import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 120,      
      once: true,
      easing: 'ease-out-cubic',
      // Respect prefers-reduced-motion:
      disable: () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    })
  }, [])
  return (
    <div>
      <div className='w-full bg-HeroImage min-h-screen pt-[50px]'>
        <div className='min-h-screen w-full lg:w-[55%] flex items-center justify-center px-4 lg:mx-10'>
          <p 
            className='text-[45px] sm:text-[60px] lg:text-[75px] text-center text-white font-bold'
            data-aos="zoom-in"
            data-aos-delay="80"
            data-aos-duration="1500">Powering The <br /> Future Of Sri Lanka <br /> One Charge At A <br />Time</p>
        </div>
      </div>
    </div>
  )
}

export default Hero