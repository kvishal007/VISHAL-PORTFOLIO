import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Replace with your actual EmailJS credentials
    emailjs
      .sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        () => {
          setStatus('success');
          formRef.current.reset();
        },
        (err) => {
          console.error(err);
          setStatus('error');
        }
      );
  };

  return (
    <section id="contact" className="py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        custom={0}
      >
        <h2 className="flex items-center gap-4 text-2xl font-bold text-slate-100 mb-4">
          <span className="text-[#00bbf9] font-mono text-lg font-normal">05.</span>
          Contact
          <span className="flex-1 h-[1px] bg-slate-800 max-w-xs" />
        </h2>
      </motion.div>

      <motion.p
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
        className="text-slate-400 mb-10 max-w-md"
      >
        Have a project in mind or just want to connect? Feel free to reach out — I typically respond within a day.
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="lg:col-span-3 flex flex-col gap-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="user_name" className="text-xs font-medium text-slate-400 uppercase tracking-widest">
                Name
              </label>
              <input
                id="user_name"
                type="text"
                name="user_name"
                required
                placeholder="Your name"
                className="bg-slate-900 border border-slate-700 text-slate-200 placeholder:text-slate-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00bbf9] focus:ring-1 focus:ring-[rgba(0,187,249,0.3)] transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="user_email" className="text-xs font-medium text-slate-400 uppercase tracking-widest">
                Email
              </label>
              <input
                id="user_email"
                type="email"
                name="user_email"
                required
                placeholder="your@email.com"
                className="bg-slate-900 border border-slate-700 text-slate-200 placeholder:text-slate-600 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#00bbf9] focus:ring-1 focus:ring-[rgba(0,187,249,0.3)] transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-xs font-medium text-slate-400 uppercase tracking-widest">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              placeholder="What's on your mind?"
              className="bg-slate-900 border border-slate-700 text-slate-200 placeholder:text-slate-600 rounded-lg px-4 py-3 text-sm resize-none focus:outline-none focus:border-[#00bbf9] focus:ring-1 focus:ring-[rgba(0,187,249,0.3)] transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="self-start flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00bbf9] text-slate-950 text-sm font-semibold hover:bg-[#00aadf] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'sending' ? (
              <>
                <span className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                Sending…
              </>
            ) : (
              'Send Message'
            )}
          </button>

          {status === 'success' && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm">
              ✓ Message sent! I'll get back to you soon.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm">
              ✗ Something went wrong. Try emailing me directly.
            </motion.p>
          )}
        </motion.form>

        {/* Contact Info */}
        <motion.div
          custom={3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col gap-4">
            <a
              href="mailto:k.vishal108737@gmail.com"
              className="flex items-center gap-3 text-slate-400 hover:text-[#00bbf9] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(0,187,249,0.08)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <span className="text-sm">k.vishal108737@gmail.com</span>
            </a>
            <a
              href="tel:+916374712490"
              className="flex items-center gap-3 text-slate-400 hover:text-[#00bbf9] transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(0,187,249,0.08)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.06-1.09a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <span className="text-sm">+91 63747 12490</span>
            </a>
            <div className="flex items-center gap-3 text-slate-400">
              <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span className="text-sm">Viruthunagar – Sivakasi, Tamil Nadu</span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-3">
            <a
              href="https://github.com/kvishal007"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-[#00bbf9] hover:border-[rgba(0,187,249,0.4)] transition-colors text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/vishal-k-66484832b"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-[#00bbf9] hover:border-[rgba(0,187,249,0.4)] transition-colors text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
