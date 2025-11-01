import React from "react";
import Lightning from "./backgrounds/Lightning";
import BlurText from "./texts/BlurText";
import { motion } from 'motion/react';

function Hero() {

  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-[50px]">
      <div className="hidden md:block absolute inset-0 -z-10 bg-black pointer-events-auto">
        <Lightning
          hue={200}
          xOffset={-1}
          speed={0.8}
          intensity={1}
          size={1}
        />
      </div>

      <div className="block md:hidden absolute inset-0 -z-10 bg-black pointer-events-auto">
        <Lightning
          hue={200}
          xOffset={0}
          speed={0.8}
          intensity={0.4}
          size={1}
          className="opacity-25"
        />
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen w-full text-center pointer-events-none px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <BlurText
            text="Powering The Future Of Sri Lanka  One Charge At A Time"
            delay={100}
            animateBy="words"
            direction="top"
            className="justify-center text-[42px] sm:text-[60px] lg:text-[80px] font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff]"
          />
        </div>

        <motion.div
          className="mt-8 pointer-events-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.8, easing: 'ease-out' }}
        >
          <a
            href="#app"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('app');
              if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              } else {
                // fallback: update hash
                window.location.hash = '#app';
              }
            }}
            className="inline-block px-8 py-3 border border-[#00D4FF] bg-[#00D4FF]/80 font-semibold rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            aria-label="Download Kinetics App"
          >
            Download Kinetics App
          </a>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
