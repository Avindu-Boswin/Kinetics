import React from 'react'
import ModelViewer from './ModelViewer'
import Colours from "../utils/colors.js";
import CarImage from '../assets/byd.png';


function CarModel() {
    const theme = Colours;
    return (
        <section className="bg-[#00070f] pt-16 md:pt-24 xl:pt-36 pb-20" id="contact">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse md:flex-row items-center gap-8">
                    {/* Left: quote + CTA */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="mt-0 text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight text-white mb-4" style={{ color: theme.warmGray }}>Planning to Buy an <span className="text-white">EV ?</span></h2>
                        <p className="text-gray-300 leading-relaxed mb-6 text-xl">Compare your choices via <span className="text-[#0ABAB5] font-semibold">Ewheels.lk</span></p>
                        <div
                            role="button"
                            aria-disabled="true"
                            className="inline-block px-8 py-3 border border-[#00D4FF] bg-[#00D4FF] text-black font-semibold rounded-2xl shadow-lg opacity-40 cursor-not-allowed select-none"
                            title="Coming soon"
                        >
                            Compare
                        </div>
                    </div>

                    {/* Right: 3D model */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="w-full max-w-[800px]">
                            <img src={CarImage} alt="Car Model" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CarModel