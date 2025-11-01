import React from "react";
import { motion } from "framer-motion";
import Colours from "../utils/colors";
import GooglePlay from "../assets/Google.png";
import AppStore from "../assets/Apple.png";
import Mockup from "../assets/Kinetics Presentation.png"

// Optional: pass your mockup image via props. If not provided, we'll render a placeholder frame.
export default function AppPromo({
  title = "Charge smarter with the KINETICS app",
  subtitle = "Find chargers, start sessions, and track your EV costs — all in one, fast app.",
  bulletPoints = [
    "Real‑time charger availability",
    "Start/stop sessions and pay in‑app",
    "Session history & receipts",
  ],
  mockupSrc,
  appStoreUrl = "",
  playStoreUrl = "",
}) {
  const theme = Colours;

  const fadeLeft = { hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } };
  const fadeRight = { hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0, transition: { duration: 0.6 } } };

  return (
    <section className="bg-[#00070f] py-16 md:py-24 lg:py-32" id="app">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Mockup */}
          <motion.div variants={fadeRight} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">

                {/* phone frame */}
                <div className="mx-auto w-full h-auto overflow-hidden">
                 <img src={mockupSrc || Mockup} alt="App mockup" className="w-full h-full object-contain md:p-5 max-w-full max-h-full" />
                </div>
            </div>
          </motion.div>

          {/* Copy + downloads */}
          <motion.div variants={fadeLeft} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }} className="lg:col-span-6 order-1 lg:order-2 text-center lg:text-left">
            <span className="text-sm md:text-base tracking-[0.18em] uppercase font-semibold" style={{ color: theme.electricBlue }}>
              Mobile app
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight" style={{ color: theme.deepCharcoal }}>
              {title}
            </h2>
            <p className="mt-5 text-gray-300 text-base md:text-lg max-w-2xl mx-auto lg:mx-0">
              {subtitle}
            </p>

            <ul className="mt-6 space-y-3 text-white/90">
              {bulletPoints.map((b) => (
                <li key={b} className="flex items-start gap-3 justify-center lg:justify-start">
                  <span className="mt-1.5 inline-block w-2 h-2 rounded-full" style={{ background: theme.electricBlue }} />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start items-center">
              {/* App Store image badge (disabled when no URL) */}
              {appStoreUrl ? (
                <a href={appStoreUrl} target="_blank" rel="noreferrer" aria-label="Download on the App Store" className="group inline-block">
                  <img src={AppStore} alt="Download on the App Store" className="h-18 object-contain" />
                </a>
              ) : (
                <div role="link" aria-disabled="true" className="group inline-block opacity-40 cursor-not-allowed select-none" title="Coming soon">
                  <img src={AppStore} alt="Download on the App Store (coming soon)" className="h-18 object-contain grayscale" />
                </div>
              )}

              {/* Play Store image badge (disabled when no URL) */}
              {playStoreUrl ? (
                <a href={playStoreUrl} target="_blank" rel="noreferrer" aria-label="Get it on Google Play" className="group inline-block">
                  <img src={GooglePlay} alt="Get it on Google Play" className="h-18 object-contain" />
                </a>
              ) : (
                <div role="link" aria-disabled="true" className="group inline-block opacity-40 cursor-not-allowed select-none" title="Coming soon">
                  <img src={GooglePlay} alt="Get it on Google Play (coming soon)" className="h-18 object-contain grayscale" />
                </div>
              )}
            </div>

            <p className="mt-3 text-xs text-white/60">Coming soon to both stores.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

