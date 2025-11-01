import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Colours from "../utils/colors";
import Logo from "../assets/logo.png";

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const theme = Colours;

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  const link = "hover:text-white transition-colors text-gray-200";
  const pill = "inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium";

  const scrollTop = (e) => {
    e?.preventDefault?.();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#00070e] text-white pt-16 md:pt-24 pb-16 overflow-hidden">
      {/* subtle gradient + glow */}
      <div className="pointer-events-none absolute inset-x-0 -top-48 h-72 bg-gradient-to-b from-[#2C3E50]/40 to-transparent" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-30" style={{ background: theme.electricBlue }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Headline */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
            <span style={{ color: theme.electricBlue }}>Let’s</span> charge ahead together
            <br /> toward a cleaner <span style={{ color: theme.electricBlue }}>tomorrow</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 text-sm md:text-base mb-10">
          {/* Brand */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <img src={Logo} alt="Kinetics" className="w-36 mb-4" />
            <p className="text-gray-300 max-w-[220px] text-sm">
              We operate a reliable EV charging network, so every journey stays powered.
            </p>
            <div className="mt-5 flex gap-3">
              {/* social icons (inline svg to avoid extra deps) */}
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="group" title="Facebook">
                <svg viewBox="0 0 24 24" className="w-9 h-9 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition" fill="currentColor"><path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.01 3.66 9.16 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.78 8.44-4.93 8.44-9.94Z"/></svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="group" title="LinkedIn">
                <svg viewBox="0 0 24 24" className="w-9 h-9 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition" fill="currentColor"><path d="M6.94 8.5H4.19V20h2.75V8.5ZM5.56 7.2a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM20 20h-2.75v-5.9c0-1.41-.03-3.21-1.96-3.21-1.96 0-2.26 1.53-2.26 3.12V20H10.3V8.5h2.64v1.57h.04c.37-.7 1.27-1.45 2.61-1.45 2.79 0 3.41 1.84 3.41 4.24V20Z"/></svg>
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="group" title="YouTube">
                <svg viewBox="0 0 24 24" className="w-9 h-9 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.4 3.5 12 3.5 12 3.5s-7.4 0-9.4.6A3 3 0 0 0 .5 6.2 31.1 31.1 0 0 0 0 12a31.1 31.1 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c2 .6 9.4.6 9.4.6s7.4 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.1 31.1 0 0 0 24 12a31.1 31.1 0 0 0-.5-5.8ZM9.8 15.5v-7l6.2 3.5-6.2 3.5Z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="group" title="Twitter">
                <svg viewBox="0 0 24 24" className="w-9 h-9 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:bg-white/10 transition" fill="currentColor"><path d="M21.5 6.5c.01.16.01.31.01.47 0 4.8-3.66 10.32-10.36 10.32-2.06 0-3.98-.6-5.6-1.64.29.03.58.04.87.04 1.7 0 3.26-.58 4.5-1.55a3.66 3.66 0 0 1-3.42-2.54c.22.04.45.06.69.06.33 0 .66-.04.96-.12a3.65 3.65 0 0 1-2.94-3.58v-.05c.49.27 1.06.44 1.66.46A3.64 3.64 0 0 1 3.9 5.7c0-.68.19-1.31.52-1.86a10.38 10.38 0 0 0 7.53 3.83 3.64 3.64 0 0 1 6.21-3.32 7.27 7.27 0 0 0 2.31-.88 3.66 3.66 0 0 1-1.6 2.02 7.25 7.25 0 0 0 2.09-.57 7.81 7.81 0 0 1-1.46 1.51Z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" onClick={scrollTop} className={link} aria-label="Home">Home</a>
              </li>
              <li>
                <a href="#about" className={link} aria-label="About Us">About Us</a>
              </li>
              <li>
                <a href="#network" className={link} aria-label="Our Network">Our Network</a>
              </li>
              <li>
                <a href="#contact" className={link} aria-label="Contact Us">Contact Us</a>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-300 text-sm">
              No: 12, Second Lane,<br />Beddagana Road<br />Pita Kotte, Sri Lanka
            </address>
            <p className="mt-3 text-gray-300 text-sm">
              <a href="tel:+94763006555" className="hover:underline">(+94) 76 300 6555</a>
            </p>
            <p className="mt-2 text-gray-300 text-sm">
              <a href="mailto:hr@boswingroup.com" className="hover:underline">hr@boswingroup.com</a>
            </p>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h4 className="font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 text-sm">Get product updates and network news.</p>
            <form className="mt-4 flex items-center gap-2" onSubmit={(e)=>e.preventDefault()} aria-label="Newsletter signup">
              <input type="email" required placeholder="Your email" className="w-full rounded-lg bg-white/10 border border-white/15 px-3 py-2 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20" />
              <button className={`${pill}`} style={{ background: theme.electricBlue, color: "#00161e" }} type="submit">Subscribe</button>
            </form>
            <p className="mt-2 text-[11px] text-white/60">We respect your privacy. Unsubscribe anytime.</p>
          </motion.div>
        </div>

        <hr className="border-white/15 mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center md:justify-between text-gray-300 text-[10px] sm:text-xs w-full gap-3">
          <div className="w-full md:w-auto text-center md:text-left">©{year} Transparent. All rights reserved.</div>
          <div className="flex gap-4 justify-center md:justify-start w-full md:w-auto">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Cookies Policy</a>
            <a href="#network" className="hover:underline">Map</a>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-6 flex justify-center">
          <button onClick={scrollTop} aria-label="Back to top" className="group">
            <span className="sr-only">Back to top</span>
            <div className="w-10 h-10 grid place-items-center rounded-full border border-white/15 bg-white/5 group-hover:bg-white/10 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 19V5m0 0-6 6m6-6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
