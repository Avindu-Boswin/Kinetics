import React from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Colours from "../utils/colors.js";
import CarImage from "../assets/car1.jpg";
import PowerOne from "../assets/power1.jpg";
import PowerTwo from "../assets/power2.jpg";
import PowerThree from "../assets/power3.jpg";
import DareOne from "../assets/dare1.jpg";

// --- Small helpers
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

function TiltCard({ className = "", children }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Smooth the raw motion values with springs for a gentler, more natural tilt
  const smoothX = useSpring(x, { stiffness: 80, damping: 16 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 16 });

  // Reduce rotation range slightly for a subtler effect
  const rotateX = useTransform(smoothY, [-50, 50], [8, -8]);
  const rotateY = useTransform(smoothX, [-50, 50], [-8, 8]);

  function onMove(e) {
    const bounds = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - bounds.left;
    const py = e.clientY - bounds.top;
    x.set(px - bounds.width / 2);
    y.set(py - bounds.height / 2);
  }

  return (
    <motion.div
  className={`relative will-change-transform ${className}`}
  style={{ rotateX, rotateY }}
  onMouseMove={onMove}
  onMouseLeave={() => { x.set(0); y.set(0); }}
  // spring smoothing applied via useSpring; no extra transition needed here
    >
      {children}
    </motion.div>
  );
}

function Stat({ k, v }) {
  return (
    <div className="flex items-baseline gap-2 px-6 py-3">
      <span className="text-3xl md:text-4xl font-semibold">{k}</span>
      <span className="text-sm md:text-base text-gray-300">{v}</span>
    </div>
  );
}

export default function AboutDetails() {
  const theme = Colours;

  return (
    <div className="bg-[#00070f] text-white selection:bg-white/20">
      {/* 1) HERO / INTRO — split but fresh composition */}
      <section className="max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 pt-28 md:pt-36 lg:pt-44">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          {/* Headline + copy */}
          <motion.div variants={fadeUp} className="lg:col-span-5 xl:col-span-5 order-2 lg:order-1">
            <span className="text-sm md:text-base tracking-[0.2em] uppercase font-semibold" style={{ color: theme.electricBlue }}>Our mission</span>
            <h1 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-semibold leading-[1.1]" style={{ color: theme.deepCharcoal }}>
              Driving the Future
              <span className="block text-white/90">Forward</span>
            </h1>
            <p className="mt-6 text-gray-300 max-w-xl text-base md:text-lg">
              We’re launching Sri Lanka’s first dedicated EV charging network — practical, reliable, and accessible. Advanced fast charging plus a sustainability-first mindset to power a greener tomorrow, one charge at a time.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#learn-more"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium ring-1 ring-white/10 hover:ring-white/20 transition transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/20"
                aria-label="Learn more about our mission"
              >
                Learn more
              </a>
              <a
                href="#network"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium transform transition duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/10 shadow-sm hover:shadow-md"
                style={{ background: theme.electricBlue, color: "#00161e" }}
                aria-label="View our charging network"
              >
                View network
              </a>
            </div>
          </motion.div>

          {/* Mosaic images */}
          <motion.div variants={fadeIn} className="lg:col-span-7 xl:col-span-7 order-1 lg:order-2">
            <div className="grid grid-cols-12 gap-4 md:gap-6">
              <TiltCard className="col-span-7 md:col-span-7">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <picture>
                    <source type="image/webp" srcSet={CarImage} />
                    <img src={CarImage} alt="EV charging" className="w-full h-[260px] md:h-[360px] object-cover" loading="lazy" decoding="async" />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </TiltCard>
              <div className="col-span-5 md:col-span-5 grid grid-rows-2 gap-4 md:gap-6">
                <TiltCard>
                  <div className="relative overflow-hidden rounded-3xl shadow-xl h-[125px] md:h-[170px]">
                    <picture>
                      <source type="image/webp" srcSet={PowerOne} />
                      <img src={PowerOne} alt="Power detail" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    </picture>
                  </div>
                </TiltCard>
                <TiltCard>
                  <div className="relative overflow-hidden rounded-3xl shadow-xl h-[125px] md:h-[170px]">
                    <picture>
                      <source type="image/webp" srcSet={PowerTwo} />
                      <img src={PowerTwo} alt="Connector detail" className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    </picture>
                  </div>
                </TiltCard>
              </div>
              <TiltCard className="col-span-12">
                <div className="relative overflow-hidden rounded-3xl shadow-xl">
                  <picture>
                    <source type="image/webp" srcSet={PowerThree} />
                    <img src={PowerThree} alt="Large station" className="w-full h-[180px] md:h-[240px] object-cover" loading="lazy" decoding="async" />
                  </picture>
                </div>
              </TiltCard>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2) STATS RIBBON — subtle continuous marquee */}
      <section aria-label="network-stats" className="mt-14 md:mt-20 lg:mt-28">
        <div className="relative overflow-hidden py-4 border-y border-white/10">
          <div className="animate-[marquee_22s_linear_infinite] whitespace-nowrap will-change-transform">
            <div className="inline-flex items-center gap-10 md:gap-16 text-white/80">
              <Stat k={"150+"} v="Fast chargers planned" />
              <span className="opacity-30">•</span>
              <Stat k={"24/7"} v="Monitored uptime" />
              <span className="opacity-30">•</span>
              <Stat k={"<5m"} v="Typical top‑up" />
              <span className="opacity-30">•</span>
              <Stat k={"ISO"} v="Grid & safety stds" />
              <span className="opacity-30">•</span>
              <Stat k={"App"} v="Pay & start charging" />
              <span className="opacity-30">•</span>
              <Stat k={"200+"} v="Stations online" />
              <span className="opacity-30">•</span>
              <Stat k={"99.9%"} v="System availability" />
            </div>
          </div>
        </div>
      </section>

      {/* 3) FEATURES GRID — staggered cards */}
      <section id="learn-more" className="max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 mt-16 md:mt-24 lg:mt-32">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Power you can trust",
              copy:
                "Built to strict safety standards with smart monitoring for consistent performance — peace of mind with every session.",
            },
            {
              title: "Always‑on network",
              copy:
                "Real‑time health checks and rapid failover help us keep chargers available when you need them most.",
            },
            {
              title: "Smart & sustainable",
              copy:
                "Optimised energy use, support for dynamic tariffs, and future‑ready hardware for evolving EVs.",
            },
          ].map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              className="group relative rounded-3xl p-6 md:p-8 border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition"
            >
              <div className="absolute inset-0 rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition shadow-[0_0_60px_-10px_rgba(0,255,200,0.25)]" />
              <h3 className="text-2xl font-semibold" style={{ color: theme.electricBlue }}>{f.title}</h3>
              <p className="mt-3 text-gray-300 leading-relaxed">{f.copy}</p>

            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 4) STORY STRIP — bold, different orientation */}
      <section className="max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24 mt-20 md:mt-28 lg:mt-36 pb-24">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <motion.div variants={fadeIn} className="lg:col-span-6">
            <TiltCard>
              <div className="relative overflow-hidden rounded-[2rem]">
                <picture>
                  <source type="image/webp" srcSet={DareOne} />
                  <img src={DareOne} alt="Go electric" className="w-full h-[320px] md:h-[460px] object-cover" loading="lazy" decoding="async" />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </TiltCard>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:col-span-6">
            <span className="text-sm md:text-base tracking-[0.2em] uppercase font-semibold" style={{ color: theme.electricBlue }}>Bright future</span>
            <h2 className="mt-4 text-4xl md:text-5xl xl:text-6xl font-semibold leading-tight" style={{ color: theme.deepCharcoal }}>
              Dare to Go <span className="text-shadow-white">Electric</span>
            </h2>
            <p className="mt-6 text-gray-300 max-w-2xl text-base md:text-lg">
              The future belongs to those who dare to change. Save on fuel, cut emissions, and enjoy a modern driving experience. Our fast, dependable chargers make the switch effortless — built for today and the next generation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium ring-1 ring-white/10 hover:ring-white/20 transition transform duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/20"
                aria-label="Find a charger"
              >
                Find a charger
              </a>
              <a
                href="#app"
                className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium transform transition duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/10 shadow-sm hover:shadow-md"
                style={{ background: theme.electricBlue, color: "#00161e" }}
                aria-label="Download the app"
              >
                Download the app
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}