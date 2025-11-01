import React, { useEffect } from 'react'
import Colours from '../utils/colors.js'
import AOS from 'aos'
import 'aos/dist/aos.css'
import TiltedCard from './other/TiltedCard.jsx'
import Masonry from './other/Masonry.jsx'
import SpotlightCard from './other/SpotlightCard.jsx'
import { EvCharger } from 'lucide-react';
import { Network } from 'lucide-react';
import { Leaf } from 'lucide-react';

const items = [
    {
        id: "1",
        img: "https://picsum.photos/id/1015/600/900?grayscale",
        url: "https://example.com/one",
        height: 400,
    },
    {
        id: "2",
        img: "https://picsum.photos/id/1011/600/750?grayscale",
        url: "https://example.com/two",
        height: 250,
    },
    {
        id: "3",
        img: "https://picsum.photos/id/1020/600/800?grayscale",
        url: "https://example.com/three",
        height: 600,
    },
    // ... more items
];
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
        <section className=" bg-[#00070f]  pt-10 sm:pt-20 md:pt-30 xl:pt-40" id="about">
            <section className="py-14 px-8 md:px-24 max-w-[1920px] mx-auto">
                <h2 className="text-4xl xl:text-6xl font-semibold text-white mb-20" data-aos="fade-down" data-aos-delay="80" data-aos-duration="800">
                    Why Choosing Us
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Card 1 */}
                        <SpotlightCard
                            data-aos="fade-up"
                            data-aos-delay="120"
                            data-aos-duration="900"
                            className="group relative rounded-3xl p-6 md:p-8 border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition"
                        >
                            <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition shadow-[0_0_60px_-10px_rgba(0,255,200,0.25)]" />
                            <EvCharger className="w-12 h-12 mb-4 mx-auto lg:mx-0" style={{ color: theme.electricBlue }} />
                            <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left" style={{ color: theme.electricBlue }}>
                                Fast &amp; Reliable Charging
                            </h3>
                            <p className="mt-3 text-gray-300 leading-relaxed text-center lg:text-left">
                                Our stations are equipped with the latest fast-charging technology,
                                ensuring your EV is powered up in minutes, not hours.
                            </p>
                        </SpotlightCard>

                    {/* Card 2 */}
                    <SpotlightCard
                        data-aos="fade-up"
                        data-aos-delay="240"
                        data-aos-duration="900"
                        className="group relative rounded-3xl p-6 md:p-8 border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition"
                    >
                        <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition shadow-[0_0_60px_-10px_rgba(0,255,200,0.25)]" />
                        <Network className="w-12 h-12 mb-4 mx-auto lg:mx-0" style={{ color: theme.electricBlue }}/>
                        <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left" style={{ color: theme.electricBlue }}>
                            Sri Lanka’s First EV Network
                        </h3>
                        <p className="mt-3 text-gray-300 leading-relaxed text-center lg:text-left">
                            As Sri Lanka’s first dedicated EV charging network, we bring unmatched
                            experience, innovation, and commitment to clean mobility.
                        </p>
                    </SpotlightCard>

                    {/* Card 3 */}
                    <SpotlightCard
                        data-aos="fade-up"
                        data-aos-delay="360"
                        data-aos-duration="900"
                        className="group relative rounded-3xl p-6 md:p-8 border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition"
                    >
                        <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition shadow-[0_0_60px_-10px_rgba(0,255,200,0.25)]" />
                        <Leaf className="w-12 h-12  mb-4 mx-auto lg:mx-0" style={{ color: theme.electricBlue }}/>
                        <h3 className="text-2xl font-semibold mb-4 text-center lg:text-left" style={{ color: theme.electricBlue }}>
                            Eco-Friendly
                        </h3>
                        <p className="mt-3 text-gray-300 leading-relaxed text-center lg:text-left">
                            Drive greener while saving more. Our smart charging solutions reduce
                            costs and support a sustainable future.
                        </p>
                    </SpotlightCard>
                </div>
            </section>
        </section>
    )
}

export default About