import React, { useEffect, useState } from 'react';
import Colours from '../utils/colors';
import ContactImage from '../assets/contact.png';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    // clear field-specific error as user types
    setErrors((s) => ({ ...s, [name]: '' }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // basic validation rules (use trimmed values)
    const nextErrors = { name: '', email: '', message: '' };
    const nameVal = form.name ? form.name.trim() : '';
    const emailVal = form.email ? form.email.trim() : '';
    const messageVal = form.message ? form.message.trim() : '';

  // name: letters and spaces only, multiple words allowed, no empty/space-only input
  const namePattern = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
  if (!nameVal) nextErrors.name = 'Name is required.';
  else if (!namePattern.test(nameVal)) nextErrors.name = 'Name may contain letters and single spaces only (no digits or punctuation).';

    // email: simple email regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal) nextErrors.email = 'Email is required.';
    else if (!emailPattern.test(emailVal)) nextErrors.email = 'Please enter a valid email address.';

    // message required (non-empty after trim)
    if (!messageVal) nextErrors.message = 'Message is required.';

    setErrors(nextErrors);

    // if any error, don't submit
    if (nextErrors.name || nextErrors.email || nextErrors.message) return;

    // send to Web3Forms (read key from Vite env, fallback to previous literal)
    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

    if (!ACCESS_KEY) {
      setSendError('Mail service not configured (missing access key).');
      return;
    }

    setIsSending(true);
    setSendError('');
    try {
      const resp = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: 'Website Contact - Kinetics',
          name: nameVal,
          email: emailVal,
          message: messageVal,
          // you can add 'replyto' or other fields here if needed
        }),
      });

      const data = await resp.json();
      if (!data.success) throw new Error(data.message || 'Send failed');

      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 2500);
    } catch (err) {
      console.error('Web3Forms error', err);
      setSendError('Failed to send message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  }

  // small helper to render field errors consistently
  function ErrorMessage({ children }) {
    if (!children) return null;
    return (
      <p className="mt-2 text-sm text-red-600" role="alert">
        {children}
      </p>
    );
  }

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
    <section className="bg-white pt-10 sm:pt-20 md:pt-30 xl:pt-40" id="contact">
      <div className="max-w-[1920px] mx-auto px-8 md:px-24" data-aos="fade-in" data-aos-delay="120" data-aos-duration="2000">
        <div className="bg-[#FAFAFA] rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-center md:text-start" style={{ color: Colours.deepCharcoal }}>
                WE ARE OPEN
                <br />
                <span
                  className="block"
                  style={{
                    background: 'linear-gradient(180deg, #262626 0%, #B8C2CE 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  FOR YOUR INQUIRIES
                </span>
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter Your Name..."
                    className="w-full rounded-lg border border-gray-200 bg-[#E9E9E9] px-4 py-3 focus:outline-none"
                    required
                  />
                  <ErrorMessage>{errors.name}</ErrorMessage>
                </label>

                <label className="block">
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email..."
                    className="w-full rounded-lg border border-gray-200 bg-[#E9E9E9] px-4 py-3 focus:outline-none"
                    required
                  />
                  <ErrorMessage>{errors.email}</ErrorMessage>
                </label>

                <label className="block">
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Enter the Concern..."
                    rows={6}
                    className="w-full rounded-lg border border-gray-200 bg-[#E9E9E9] px-4 py-3 focus:outline-none"
                  />
                  <ErrorMessage>{errors.message}</ErrorMessage>
                </label>

                <div className='flex flex-col items-center'>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-xl px-10 py-2 font-semibold shadow"
                    style={{ color: Colours.electricBlue, backgroundColor: Colours.deepCharcoal }}
                    disabled={submitted || isSending}
                  >
                    {submitted ? 'Sent' : isSending ? 'Sending...' : 'Submit'}
                  </button>
                  {sendError && <ErrorMessage>{sendError}</ErrorMessage>}
                </div>
              </form>
            </div>

            <div className="hidden lg:block">
              <img src={ContactImage} alt="support" className="w-full rounded-xl object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
