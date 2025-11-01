import React, { useEffect, useState, useRef } from 'react'
import { motion } from 'motion/react'
import Logo from '../assets/logo.png'
import MobileLogo from '../assets/logo-mobile.png'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const navRef = useRef(null)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            const navHeight = navRef.current ? navRef.current.offsetHeight : 0
            setScrolled(window.scrollY > navHeight)
        }
        window.addEventListener('scroll', onScroll)
        onScroll()
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
            <motion.div 
                ref={navRef} 
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 z-50 flex w-full h-[70px] transition-all duration-500 ${
                    scrolled 
                        ? 'bg-black/40 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
                        : 'bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm'
                }`}>
            <motion.a
                href="#home"
                onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                aria-label="Kinetics home"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
            >
                <img src={MobileLogo} alt="Kinetics Logo" className='h-[80%] mt-3 ml-7 md:hidden filter drop-shadow-lg' />
            </motion.a>

            <motion.a
                href="#home"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                aria-label="Kinetics home"

            >
                <img src={Logo} alt="Kinetics Logo" className='h-[80%] ml-10 mt-[7px] hidden md:block filter drop-shadow-lg' />
            </motion.a>

            <div className='flex items-center ml-auto mr-10'>
                {/* mobile toggle button */}
                <motion.button
                    onClick={() => setMobileOpen(v => !v)}
                    aria-expanded={mobileOpen}
                    aria-label='Toggle navigation'
                    className='lg:hidden text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors duration-200'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.div
                        animate={mobileOpen ? { rotate: 180 } : { rotate: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {mobileOpen ? (
                            // close icon
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            // hamburger icon
                            <svg xmlns="http://www.w3.org/2000/svg" className='h-6 w-6' fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </motion.div>
                </motion.button>

                <ul className='hidden lg:flex items-center space-x-8 text-white gap-6 text-md font-bold'>
                    <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                        <a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className='bg-clip-text bg-gradient-to-r text-white hover:text-[#00D4FF] transition-all duration-300 whitespace-nowrap'
                        >
                            Home
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                        <a href="#about" className='bg-clip-text text-white hover:text-[#00D4FF] transition-all duration-300 whitespace-nowrap'>
                            About Us
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                        <a href="#network" className='bg-clip-text text-white hover:text-[#00D4FF] transition-all duration-300 whitespace-nowrap'>
                            Our Network
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                        <a href="#contact" className='bg-clip-text text-white hover:text-[#00D4FF] transition-all duration-300 whitespace-nowrap'>
                            Contact Us
                        </a>
                    </motion.li>
                    <motion.li whileHover={{ scale: 1.03 }} transition={{ duration: 0.18 }}>
                        <a
                            href="#app"
                            className='ml-2 px-4 py-2 rounded-2xl border border-[#00D4FF] text-[#00D4FF] hover:bg-[#00D4FF]/10 transition-colors duration-200 font-semibold whitespace-nowrap'
                            aria-label="Download Kinetics App"
                        >
                            Download App
                        </a>
                    </motion.li>
                </ul>
            </div>

            {/* mobile dropdown menu (appears under navbar) */}
            {mobileOpen && (
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute left-0 top-full w-full bg-black/90 backdrop-blur-xl text-white lg:hidden z-50 border-t border-white/10 shadow-2xl`}
                >
                    <ul className='flex flex-col items-center space-y-4 py-6 text-lg font-semibold'>
                        <motion.li 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <a
                                href="#home"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setMobileOpen(false);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className='block w-full text-center bg-clip-text text-white hover:text-[#00D4FF]  transition-all duration-300 py-2'
                            >
                                Home
                            </a>
                        </motion.li>
                        <motion.li 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <a onClick={() => setMobileOpen(false)} href="#about" className='block w-full text-center bg-clip-text text-white hover:text-[#00D4FF] transition-all duration-300 py-2'>About Us</a>
                        </motion.li>
                        <motion.li 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <a onClick={() => setMobileOpen(false)} href="#network" className='block w-full text-center bg-clip-text text-white hover:text-[#00D4FF] transition-all duration-300 py-2'>Our Network</a>
                        </motion.li>
                        <motion.li 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <a onClick={() => setMobileOpen(false)} href="#contact" className='block w-full text-center bg-clip-text text-white hover:text-[#00D4FF] transition-all duration-300 py-2'>Contact Us</a>
                        </motion.li>
                        <motion.li 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <a onClick={() => setMobileOpen(false)} href="#download" className='block w-full text-center bg-clip-text text-white hover:text-[#00D4FF] transition-all duration-300 py-2'>Kinetics App</a>
                        </motion.li>
                    </ul>
                </motion.div>
            )}
        </motion.div>
    )
}

export default Navbar