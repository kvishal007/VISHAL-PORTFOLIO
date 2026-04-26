import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

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
