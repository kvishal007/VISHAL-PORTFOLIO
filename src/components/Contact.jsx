import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    // Placeholder for EmailJS - replace with actual credentials
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          setStatus('success');
          formRef.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('error');
      });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Orbiting Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none">
        <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute inset-12 border border-white/5 rounded-full animate-[spin_25s_linear_infinite]"></div>
        <div className="absolute top-0 left-1/2 w-4 h-4 bg-accent-blue rounded-full blur-sm"></div>
        <div className="absolute bottom-0 right-1/2 w-4 h-4 bg-accent-pink rounded-full blur-sm"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4">
            ESTABLISH <span className="text-stroke">LINK</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            Ready to start a new mission? Send a secure transmission and I'll respond within one orbital cycle.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl"
          >
            <div className="flex flex-col md:flex-row gap-6 mb-8 items-center justify-between border-b border-white/10 pb-8">
              <div className="flex flex-col gap-2 text-gray-300">
                <a href="mailto:k.vishal108737@gmail.com" className="flex items-center gap-3 hover:text-accent-blue transition-colors">
                  <Mail size={18} className="text-accent-blue" />
                  k.vishal108737@gmail.com
                </a>
                <a href="tel:6374712490" className="flex items-center gap-3 hover:text-accent-pink transition-colors">
                  <Phone size={18} className="text-accent-pink" />
                  +91 63747 12490
                </a>
              </div>
              <div className="flex gap-4">
                <motion.a 
                  href="https://github.com/kvishal007" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </motion.a>
                <motion.a 
                  href="https://linkedin.com/in/vishal-k-66484832b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  className="w-12 h-12 rounded-full glass-panel flex items-center justify-center hover:shadow-[0_0_15px_rgba(0,187,249,0.3)] transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin text-accent-blue"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </motion.a>
              </div>
            </div>
            
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-400 px-1">Identity</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Major Tom"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-widest text-gray-400 px-1">Comms Frequency</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="tom@groundcontrol.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-widest text-gray-400 px-1">Transmission Data</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="I'm floating in a most peculiar way..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-xl bg-gradient-to-right from-accent-purple to-accent-blue text-white font-bold tracking-widest uppercase flex items-center justify-center gap-3 group group-hover:shadow-[0_0_20px_rgba(0,187,249,0.4)] transition-all"
              >
                {status === 'sending' ? (
                  <span className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Transmission
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-green-400 justify-center font-mono text-sm uppercase">
                  <CheckCircle size={16} /> Transmission Received
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-red-400 justify-center font-mono text-sm uppercase">
                  <AlertCircle size={16} /> Connection Interrupted
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
