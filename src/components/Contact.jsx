import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Colours from "../utils/colors";
import ContactImage from "../assets/contact.png";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", hp: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState("");
  const [progress, setProgress] = useState(0);

  const theme = Colours;
  const formRef = useRef(null);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    setErrors((s) => ({ ...s, [name]: "" }));
  }

  function validate(values) {
    const next = { name: "", email: "", message: "" };
    const nameVal = values.name?.trim() || "";
    const emailVal = values.email?.trim() || "";
    const messageVal = values.message?.trim() || "";

    const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    if (!nameVal) next.name = "Name is required.";
    else if (!namePattern.test(nameVal)) next.name = "Letters and single spaces only.";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal) next.email = "Email is required.";
    else if (!emailPattern.test(emailVal)) next.email = "Enter a valid email.";

    if (!messageVal) next.message = "Message is required.";

    return { next, valid: !next.name && !next.email && !next.message };
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const { next, valid } = validate(form);
    setErrors(next);
    if (!valid) return;

    // honeypot (spam protection)
    if (form.hp) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 1800);
      return;
    }

    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!ACCESS_KEY) {
      setSendError("Mail service not configured (missing access key).");
      return;
    }

    setIsSending(true);
    setSendError("");
    setProgress(10);

    try {
      const resp = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "Website Contact - Kinetics",
          name: form.name.trim(),
          email: form.email.trim(),
          message: form.message.trim(),
        }),
      });
      setProgress(60);

      const data = await resp.json();
      if (!data.success) throw new Error(data.message || "Send failed");

      setProgress(100);
      setSubmitted(true);
      setForm({ name: "", email: "", message: "", hp: "" });
      setErrors({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 2600);
    } catch (err) {
      console.error("Web3Forms error", err);
      setSendError("Failed to send message. Please try again later.");
    } finally {
      setIsSending(false);
      setTimeout(() => setProgress(0), 800);
    }
  }

  function ErrorMessage({ children }) {
    if (!children) return null;
    return (
      <p className="mt-1.5 text-sm text-red-500" role="alert">
        {children}
      </p>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="bg-[#00070f] pt-16 md:pt-24 xl:pt-36 pb-20" id="contact">
      <div className="max-w-[1920px] mx-auto px-6 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#FAFAFA] rounded-2xl p-6 md:p-10 lg:p-12 shadow-sm relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl opacity-30"
            style={{ background: theme.kineticsTiffany }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Form */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="lg:col-span-7">
              <h2
                className="text-3xl md:text-5xl font-semibold mb-4 text-center md:text-left"
                style={{ color: theme.deepCharcoal }}
              >
                WE ARE OPEN
                <br />
                <span
                  className="block"
                  style={{
                    background: "linear-gradient(180deg, #262626 0%, #B8C2CE 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  FOR YOUR INQUIRIES
                </span>
              </h2>

              {/* progress bar */}
              <AnimatePresence>
                {isSending || progress > 0 ? (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-1 w-full bg-gray-200/70 rounded mt-2 mb-4 overflow-hidden">
                    <motion.div
                      className="h-full"
                      style={{ background: theme.kineticsTiffany }}
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ ease: "easeOut", duration: 0.4 }}
                    />
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot field */}
                <input
                  type="text"
                  name="hp"
                  autoComplete="off"
                  tabIndex={-1}
                  className="hidden"
                  value={form.hp}
                  onChange={handleChange}
                />

                {/* Name */}
                <label className="block">
                  <div className="relative">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full rounded-lg border border-gray-200 bg-[#E9E9E9] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
                      required
                    />
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs transition-all">
                      Enter Your Name…
                    </span>
                  </div>
                  <ErrorMessage>{errors.name}</ErrorMessage>
                </label>

                {/* Email */}
                <label className="block">
                  <div className="relative">
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full rounded-lg border border-gray-200 bg-[#E9E9E9] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
                      required
                    />
                    <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs transition-all">
                      Enter Your Email…
                    </span>
                  </div>
                  <ErrorMessage>{errors.email}</ErrorMessage>
                </label>

                {/* Message */}
                <label className="block">
                  <div className="relative">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder=" "
                      rows={6}
                      className="peer w-full rounded-lg border border-gray-200 bg-[#E9E9E9] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/10"
                      required
                    />
                    <span className="pointer-events-none absolute left-3 top-4 text-gray-500 peer-focus:top-2 peer-focus:text-xs peer-focus:text-gray-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs transition-all">
                      Enter the Concern…
                    </span>
                  </div>
                  <ErrorMessage>{errors.message}</ErrorMessage>
                </label>

                {/* Submit */}
                <div className="flex flex-col items-center">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl px-10 py-2 font-semibold shadow disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ color: theme.electricBlue, backgroundColor: theme.deepCharcoal }}
                    disabled={submitted || isSending}
                  >
                    {submitted ? "Sent" : isSending ? "Sending…" : "Submit"}
                  </button>
                  {sendError && <ErrorMessage>{sendError}</ErrorMessage>}
                </div>

                {/* Success toast */}
                <AnimatePresence>
                  {submitted && (
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 10, opacity: 0 }}
                      className="mt-4 rounded-lg bg-green-50 text-green-800 px-4 py-3 text-sm border border-green-200"
                      role="status"
                    >
                      Thanks! Your message has been sent.
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>

            {/* Right: Illustration */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="lg:col-span-5 hidden lg:block"
            >
              <div className="relative overflow-hidden rounded-xl">
                <img src={ContactImage} alt="support" className="w-full rounded-xl object-cover" />
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 to-transparent" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
