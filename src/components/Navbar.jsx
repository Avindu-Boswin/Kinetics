import React, { useEffect, useState, useRef } from 'react'
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
            <div ref={navRef} className={`fixed top-0 left-0 z-50 flex w-full h-[60px] md:h-[50px] transition-colors duration-300 ${scrolled ? 'bg-[#2C3E50]/70 backdrop-blur-sm' : 'bg-[#2C3E50]'}`}>
            <a
                href="#home"
                onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                aria-label="Kinetics home"
            >
                <img src={MobileLogo} alt="Kinetics Logo" className='h-[90%] mt-1 ml-7 md:hidden' />
            </a>

            <a
                href="#home"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                aria-label="Kinetics home"
            >
                <img src={Logo} alt="Kinetics Logo" className='h-full ml-10 hidden md:block' />
            </a>

            <div className='flex items-center ml-auto mr-10'>
                {/* mobile toggle button */}
                <button
                    onClick={() => setMobileOpen(v => !v)}
                    aria-expanded={mobileOpen}
                    aria-label='Toggle navigation'
                    className='md:hidden text-white focus:outline-none'
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
                </button>

                                <ul className='hidden md:flex items-center space-x-8 text-white gap-4 text-sm font-bold'>
                                        <li>
                                            <a
                                                href="#home"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                                }}
                                                className='hover:text-[#00D4FF]'
                                            >
                                                Home
                                            </a>
                                        </li>
                    <li><a href="#about" className='hover:text-[#00D4FF]'>About Us</a></li>
                    <li><a href="#network" className='hover:text-[#00D4FF]'>Our Network</a></li>
                    <li><a href="#contact" className='hover:text-[#00D4FF]'>Contact Us</a></li>
                </ul>
            </div>

            {/* mobile dropdown menu (appears under navbar) */}
            {mobileOpen && (
                <div className={`absolute left-0 top-full w-full bg-[#2C3E50]/80 text-white md:hidden z-50`}>
                                                <ul className='flex flex-col items-center space-y-3 py-4 text-sm font-bold'>
                                                <li>
                                                    <a
                                                        href="#home"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setMobileOpen(false);
                                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                                        }}
                                                        className='block w-full text-center hover:text-[#00D4FF]'
                                                    >
                                                        Home
                                                    </a>
                                                </li>
                                                <li><a onClick={() => setMobileOpen(false)} href="#about" className='block w-full text-center hover:text-[#00D4FF]'>About Us</a></li>
                                                <li><a onClick={() => setMobileOpen(false)} href="#network" className='block w-full text-center hover:text-[#00D4FF]'>Our Network</a></li>
                                                <li><a onClick={() => setMobileOpen(false)} href="#contact" className='block w-full text-center hover:text-[#00D4FF]'>Contact Us</a></li>
                                        </ul>
                </div>
            )}
        </div>
    )
}

export default Navbar