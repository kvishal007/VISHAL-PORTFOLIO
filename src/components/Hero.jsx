import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center py-24 lg:py-32"
    >
      <motion.p
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-[#00bbf9] text-sm font-mono font-medium mb-4 tracking-wider"
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-5xl md:text-7xl font-extrabold text-slate-100 leading-tight mb-4"
      >
        K. Vishal.
      </motion.h1>

      <motion.h2
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-3xl md:text-5xl font-bold text-slate-400 leading-tight mb-8"
      >
        I build fast, real-world web applications.
      </motion.h2>

      <motion.p
        custom={3}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-slate-400 text-lg max-w-xl leading-relaxed mb-10"
      >
        2nd year B.Tech AI & Data Science student at{' '}
        <span className="text-slate-300 font-medium">
          Kamaraj College of Engineering and Technology
        </span>
        . I love turning ideas into production-ready products.
      </motion.p>

      <motion.div
        custom={4}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="flex flex-wrap gap-4"
      >
        <a
          href="#projects"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="px-6 py-3 rounded-lg bg-[#00bbf9] text-slate-950 text-sm font-semibold hover:bg-[#00aadf] transition-colors duration-200"
        >
          View Projects
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 text-sm font-semibold hover:border-[#00bbf9] hover:text-[#00bbf9] transition-colors duration-200"
        >
          Download Resume ↓
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
