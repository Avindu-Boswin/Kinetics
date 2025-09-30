import React from 'react'
import Colours from '../utils/colors'
import Logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#2C3E50] text-white pt-16 pb-8 mt-10 sm:mt-20 md:mt-30 xl:mt-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-12">
            <span style={{ color: Colours.electricBlue }}>Let’s</span> charge ahead together
            <br /> toward a cleaner <span style={{ color: Colours.electricBlue }}>tomorrow</span>
          </h2>
        </div>

  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm md:text-base mb-8 justify-items-start text-left mx-auto md:ml-[10%]">
          <div>
            <img src={Logo} alt="Kinetics" className="w-36 mb-4" />
            <p className="text-gray-200 max-w-[160px] text-sm">
              We operate a reliable EV charging network, so every journey stays powered.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:underline hover:text-[#00D4FF]"
                  aria-label="Home"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline hover:text-[#00D4FF]" aria-label="About Us">About Us</a>
              </li>
              <li>
                <a href="#network" className="hover:underline hover:text-[#00D4FF]" aria-label="Our Network">Our Network</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline hover:text-[#00D4FF]" aria-label="Contact Us">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-200 text-sm">No: 12, Second Lane, <br />Beddagana Road <br />Pita Kotte, Sri Lanka</p>
            <p className="mt-3 text-gray-200 text-sm">(+94) 76 300 6555</p>
            <p className="mt-2 text-gray-200 text-sm">hr@boswingroup.com</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:underline hover:text-[#00D4FF]">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:underline hover:text-[#00D4FF]">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:underline hover:text-[#00D4FF]">
                  Youtube
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:underline hover:text-[#00D4FF]">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-400/30 mb-6" />

        <div className="flex flex-col md:flex-row items-center md:justify-between text-gray-300 text-[10px] sm:text-xs w-full">
          <div className="w-full md:w-auto text-center md:text-left">©2024 Transparent. All rights reserved</div>
          <div className="mt-3 md:mt-0 flex gap-4 justify-center md:justify-start w-full md:w-auto">
            <span className="mr-0 md:mr-4">Privacy Policy</span>
            <span className="mr-0 md:mr-4">Terms & Conditions</span>
            <span className="mr-0 md:mr-4">Cookies Policy</span>
            <span>Map</span>
          </div>
        </div>
      </div>
    </footer>
  )
}