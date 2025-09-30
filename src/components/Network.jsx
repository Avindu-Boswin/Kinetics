import React, { useEffect } from "react";
import Colours from "../utils/colors";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Network() {
    useEffect(() => {
            AOS.init({
                duration: 2000,
                offset: 120,
                once: true,
                easing: 'ease-out-cubic',
                disable: () =>
                    window.matchMedia &&
                    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
            })
        }, [])
    return (
        <section className="bg-white pt-10 sm:pt-20 md:pt-30 xl:pt-40" id="network">
            <div className="max-w-[1920px] mx-auto px-8 md:px-24">
                <h2 className="text-5xl xl:text-6xl font-bold leading-tight text-center mb-12 xl:mb-36" 
                style={{ color: Colours.deepCharcoal }}
                data-aos="fade-in" data-aos-delay="120" data-aos-duration="2000">
                    Our Network
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* map / visual on the left */}
                    <div data-aos="slide-right" data-aos-delay="120" data-aos-duration="2000">
                        <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 w-full">
                            <div className="relative w-full pb-[100%]">
                                {/* <iframe
                                    title="Kinetics Network Map"
                                    src="https://www.google.com/maps/d/edit?mid=1BQpdGNnNyFDOuVoPNzChvxu0L32h8AY"
                                    className="absolute inset-0 w-full h-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe> */}
                                <iframe
                                    title="Kinetics Network Map"
                                    src="https://www.google.com/maps/d/embed?mid=1BQpdGNnNyFDOuVoPNzChvxu0L32h8AY&ehbc=2E312F&noprof=1"
                                    className="absolute inset-0 w-full h-full border-0"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* text on the right */}
                    <div data-aos="slide-left" data-aos-delay="120" data-aos-duration="2000" className='mt-6 lg:mt-0 lg:ml-8 xl:ml-[20%] text-center lg:text-start'>
                        <span className="text-xl font-semibold uppercase" style={{ color: Colours.kineticsTiffany }}>Locate Us</span>
                        <h3 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight sm:leading-[1.5] lg:leading-[1.4]" style={{ color: Colours.deepCharcoal }}>Find The Right Charger For Your Journey</h3>
                        <p className="mt-6 text-gray-600 max-w-full md:max-w-xl text-base md:text-lg mx-auto lg:mx-0">Discover the convenience of Sri Lanka's first EV charging network
                            designed to keep you powered wherever life takes you. Whether
                            it's your daily commute, a weekend getaway, or a long road trip,
                            here you can find your favorite chargers at destinations that
                            matter most. With continuous expansion, we're making clean,
                            reliable charging part of every journey.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
