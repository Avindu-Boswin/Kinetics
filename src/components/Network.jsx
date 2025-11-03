import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Colours from "../utils/colors";

export default function Network() {
  const [mapReady, setMapReady] = useState(false);
  const [filter, setFilter] = useState("All");
  const iframeRef = useRef(null);

  useEffect(() => {
    const node = iframeRef.current;
    if (!node) return;
    const onLoad = () => setMapReady(true);
    node.addEventListener("load", onLoad);
    return () => node.removeEventListener("load", onLoad);
  }, []);

  const theme = Colours;

  const chips = ["All", "DC Fast", "AC Fast", "Coming Soon"];

  return (
    <section className="bg-[#00070f] md:pt-16" id="network">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
          style={{ color: theme.deepCharcoal }}
        >
          Our Network
        </motion.h2>

        {/* Sub header chips + stat pill */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="mt-6 flex flex-wrap justify-center items-center gap-3"
        >
          {chips.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition border hover:border-white/30 ${
                filter === c
                  ? "bg-white/10 border-white/30"
                  : "bg-white/[0.05] border-white/10"
              }`}
              style={{ color: theme.electricBlue }}
            >
              {c}
            </button>
          ))}
          <span className="px-4 py-2 rounded-full text-xs md:text-sm border border-white/10 bg-white/[0.04] text-white/80">
            Live · expanding monthly
          </span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-12 lg:mt-16">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] shadow-2xl">
              {/* Loader overlay */}
              <AnimatePresence>
                {!mapReady && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 grid place-items-center bg-black/30 backdrop-blur-sm z-10"
                  >
                    <div className="w-24 h-24 rounded-xl border border-white/15 p-4 grid place-items-center">
                      <div className="w-10 h-10 rounded-full border-2 border-white/30 border-t-transparent animate-spin" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative w-full pb-[100%] md:pb-[65%]">
                <iframe
                  ref={iframeRef}
                  title="Kinetics Network Map"
                  src="https://www.google.com/maps/d/embed?mid=1BQpdGNnNyFDOuVoPNzChvxu0L32h8AY&ehbc=2E312F&noprof=1"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Decorative glow */}
              <div
                className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-25 blur-3xl"
                style={{ background: theme.electricBlue }}
              />
            </div>
          </motion.div>

          {/* Text / CTA */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <span
              className="text-sm md:text-base tracking-[0.18em] uppercase font-semibold"
              style={{ color: theme.electricBlue }}
            >
              Locate Us
            </span>
            <h3
              className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
              style={{ color: theme.deepCharcoal }}
            >
              Find the <span className="text-white">right charger</span> for your journey
            </h3>
            <p className="mt-6 text-gray-300 max-w-2xl text-base md:text-lg">
              Discover the convenience of Sri Lanka's first EV charging network designed to keep you powered wherever life takes you. Whether it's your daily commute, a weekend getaway, or a long road trip, you can find chargers at destinations that matter most.
            </p>

            {/* Feature bullets */}
            <ul className="mt-6 space-y-3 text-white/85">
              <li className="flex items-start gap-3"><span className="mt-1.5 inline-block w-2 h-2 rounded-full" style={{ background: theme.electricBlue }} />Real‑time availability (app)</li>
              <li className="flex items-start gap-3"><span className="mt-1.5 inline-block w-2 h-2 rounded-full" style={{ background: theme.electricBlue }} />Multiple connector types</li>
              <li className="flex items-start gap-3"><span className="mt-1.5 inline-block w-2 h-2 rounded-full" style={{ background: theme.electricBlue }} />24/7 monitored uptime</li>
            </ul>


            {/* Small helper note */}
            <p className="mt-4 text-sm text-white/60">
              Tip: Use the filters above to preview different charger types.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Reduced‑motion preference: keep it subtle via CSS utilities already */}
    </section>
  );
}
