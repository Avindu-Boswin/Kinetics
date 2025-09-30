import React, { useEffect } from 'react'
import Colours from '../utils/colors.js'
import CarImage from '../assets/car1.jpg'
import PowerOne from '../assets/power1.jpg'
import PowerTwo from '../assets/power2.jpg'
import PowerThree from '../assets/power3.jpg'
import DareOne from '../assets/dare1.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

function About() {
    const theme = Colours
    useEffect(() => {
        AOS.init({
            duration: 800,
            offset: 120,
            once: true,
            easing: 'ease-out-cubic',
            disable: () =>
                window.matchMedia &&
                window.matchMedia('(prefers-reduced-motion: reduce)').matches,
        })
    }, [])
    return (
        <section className=" bg-white pt-10 sm:pt-20 md:pt-30 xl:pt-40" id="about">
            <div className="max-w-[1920px] mx-auto px-8 md:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
                    {/* Large title on left */}
                    <div data-aos="fade-in" data-aos-delay="120" data-aos-duration="1500" className="lg:col-span-2">
                        <h2 className="text-5xl xl:text-6xl font-bold leading-tight" style={{ color: theme.deepCharcoal }}>Why<br />Choosing Us</h2>
                    </div>

                    {/* Features on right */}
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8 mb-15 md:mb-0">
                        <div data-aos="fade-up" data-aos-delay="120" data-aos-duration="900">
                            <h3 className="text-xl font-semibold mb-4">Fast & Reliable Charging</h3>
                            <p className="text-gray-600">Our stations are equipped with the latest fast-charging technology, ensuring your EV is powered up in minutes, not hours.</p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="240" data-aos-duration="900">
                            <h3 className="text-xl font-semibold mb-4">Sri Lanka’s First EV Network</h3>
                            <p className="text-gray-600">As Sri Lanka’s first dedicated EV charging network, we bring unmatched experience, innovation, and commitment to clean mobility.</p>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="360" data-aos-duration="900">
                            <h3 className="text-xl font-semibold mb-4">Eco-Friendly</h3>
                            <p className="text-gray-600">Drive greener while saving more. our smart charging solutions reduce costs and support a sustainable future.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1920px] mx-auto px-8 md:px-24 mt-12 sm:mt-40 lg:mt-60">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* image left */}
                    <div className="w-full flex justify-center lg:justify-start" data-aos="zoom-in-right" data-aos-delay="120" data-aos-duration="2000">
                        <div className="relative w-full lg:max-w-[800px]">
                            {/* decorative background shapes */}
                            <div className="hidden lg:block absolute -left-0 -top-10 xl:-top-20 w-80 2xl:w-140 h-80 bg-[#F7F7F7] rounded-2xl transform rotate-0 z-0"></div>
                            <div className="hidden lg:block absolute -right-10 xl:-right-20 top-20 xl:top-25 2xl:top-30 w-36 h-50 xl:h-60 2xl:h-80 bg-[#F7F7F7] rounded-2xl z-0"></div>

                            <div className="relative z-10 rounded-2xl lg:rounded-tl-[0px] lg:rounded-bl-[0px] lg:rounded-tr-[48px] lg:rounded-br-[48px] overflow-hidden shadow-lg w-full">
                                <picture>
                                    {/* AVIF/WebP sources can be added after generating optimized assets */}
                                    <source type="image/webp" srcSet={CarImage} />
                                    <img src={CarImage} alt="EV charger" className="w-full object-cover block h-64 sm:h-80 lg:h-auto" loading="lazy" decoding="async" />
                                </picture>
                            </div>
                        </div>
                    </div>

                    {/* text right */}
                    <div className='mt-6 lg:mt-0 lg:ml-8 xl:ml-[20%] text-center lg:text-start'  data-aos="fade-left" data-aos-delay="120" data-aos-duration="2000">
                        <span className="text-xl font-semibold uppercase" style={{ color: theme.kineticsTiffany }}>Our mission</span>
                        <h3 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-[1.5] lg:leading-[1.4]" style={{ color: theme.deepCharcoal }}>Driving The Future<br />Forward</h3>
                        <p className="mt-6 text-gray-600 max-w-full md:max-w-xl text-base md:text-lg mx-auto lg:mx-0">At KINETICS, we are proud to lead Sri Lanka into the electric era with the nation’s first dedicated EV charging network. Our mission is simple, make electric driving practical, reliable, and accessible for everyone. By combining advanced fast charging technology with our commitment to sustainability, we’re not just building infrastructure - we’re powering a greener tomorrow, one charge at a time.</p>
                        <a href="#" className="inline-block mt-6 font-semibold text-md" style={{ color: theme.kineticsTiffany }}>More Info</a>
                    </div>
                </div>
            </div>

            <div className="max-w-[1920px] mx-auto px-8 md:px-24 mt-12 sm:mt-20 lg:mt-48">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* text left */}
                    <div className="text-center lg:text-start" data-aos="fade-right" data-aos-delay="120" data-aos-duration="2000">
                        <span className="text-xl font-semibold uppercase" style={{ color: theme.kineticsTiffany }}>For you</span>
                        <h3 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-[1.5] lg:leading-[1.4]" style={{ color: theme.deepCharcoal }}>Power You Can<br />Trust</h3>
                        <p className="mt-6 text-gray-600 max-w-full md:max-w-xl text-base md:text-lg mx-auto lg:mx-0">Your journey matters to us. That’s why our charging stations are built with cutting-edge safety standards, smart monitoring, and 24/7 reliability. Every charge is backed by innovation and precision engineering, ensuring your vehicle is always ready when you need it most. With us, you don’t just get power, you get peace of mind.</p>
                        <a href="#" className="inline-block mt-6 font-semibold text-md" style={{ color: theme.kineticsTiffany }}>More Info</a>
                    </div>

                    {/* images right */}
                    <div className='grid grid-cols-2' data-aos="zoom-in-left" data-aos-delay="120" data-aos-duration="2000">
                        <div className='gap-10'>
                            <div className="w-auto h-auto rounded-2xl rounded-br-none overflow-hidden shadow-md">
                                <picture>
                                    <source type="image/webp" srcSet={PowerOne} />
                                    <img src={PowerOne} alt="thumb1" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                </picture>
                            </div>
                            <div className="w-auto lg:h-[500px] rounded-2xl rounded-tr-none overflow-hidden shadow-md">
                                <picture>
                                    <source type="image/webp" srcSet={PowerTwo} />
                                    <img src={PowerTwo} alt="thumb2" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                </picture>
                            </div>
                        </div>

                        <div className="w-full h-auto max-h-[550px] rounded-2xl rounded-tl-none rounded-bl-none overflow-hidden shadow-lg  md:block md:mt-[40%]">
                            <picture>
                                <source type="image/webp" srcSet={PowerThree} />
                                <img src={PowerThree} alt="large" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                            </picture>

                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1920px] mx-auto px-8 md:px-24 mt-12 sm:mt-20 lg:mt-48">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* image left */}
                    <div className="w-full flex justify-center lg:justify-start" data-aos="zoom-in-right" data-aos-delay="120" data-aos-duration="2000">
                        <div className="relative w-full lg:max-w-[800px]">
                            {/* decorative background shapes */}
                            <div className="hidden lg:block absolute -left-0 -top-10 xl:-top-20 w-80 2xl:w-140 h-80 bg-[#F7F7F7] rounded-2xl transform rotate-0 z-0"></div>
                            <div className="hidden lg:block absolute -right-10 xl:-right-20 top-20 xl:top-25 2xl:top-30 w-36 h-50 xl:h-60 2xl:h-80 bg-[#F7F7F7] rounded-2xl z-0"></div>

                            <div className="relative z-10 rounded-2xl lg:rounded-tl-[0px] lg:rounded-bl-[0px] lg:rounded-tr-[48px] lg:rounded-br-[48px] overflow-hidden shadow-lg w-full">
                                <picture>
                                    <source type="image/webp" srcSet={DareOne} />
                                    <img src={DareOne} alt="EV charger" className="w-full object-cover block h-64 sm:h-80 lg:h-auto" loading="lazy" decoding="async" />
                                </picture>
                            </div>
                        </div>
                    </div>

                    {/* text right */}
                    <div className='mt-6 lg:mt-0 lg:ml-8 xl:ml-[20%] text-center lg:text-start' data-aos="fade-left" data-aos-delay="120" data-aos-duration="2000">
                        <span className="text-xl font-semibold uppercase" style={{ color: theme.kineticsTiffany }}>Bright Future</span>
                        <h3 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-[1.5] lg:leading-[1.4]" style={{ color: theme.deepCharcoal }}>Dare to Go Electric</h3>
                        <p className="mt-6 text-gray-600 max-w-full md:max-w-xl text-base md:text-lg mx-auto lg:mx-0">The future belongs to those who dare to change. By choosing electric, you’re not only saving on fuel costs but also contributing to a cleaner, smarter Sri Lanka. Our charging solutions make it easier than ever to embrace this shift fast, efficient, and built for the next generation of drivers who are ready to lead the way.</p>
                        <a href="#" className="inline-block mt-6 font-semibold text-md" style={{ color: theme.kineticsTiffany }}>More Info</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About