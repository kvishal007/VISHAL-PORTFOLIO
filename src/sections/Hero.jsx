import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const Hero = () => (
  <section id="hero" className="relative min-h-[90svh] flex flex-col justify-center section-padding container-custom pt-32">
    <div className="max-w-4xl">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-accent font-semibold tracking-wide text-sm md:text-base mb-4"
      >
        Hello, my name is
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4"
      >
        <span className="text-gradient">K.VISHAL</span>.
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold text-gray-400 tracking-tight leading-tight mb-8"
      >
        I build robust digital solutions.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-lg text-gray-300 max-w-2xl mb-12 leading-relaxed"
      >
        I'm a Full Stack Engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap gap-4"
      >
        <a href="#projects" className="inline-flex items-center gap-2 bg-accent text-white px-8 py-4 rounded-lg font-medium hover:bg-accent-dark transition-colors">
          View Projects <ArrowRight size={18} />
        </a>
        <a href="#contact" className="inline-flex items-center gap-2 bg-secondary/50 backdrop-blur-sm text-white border border-gray-600 px-8 py-4 rounded-lg font-medium hover:bg-transparent transition-colors">
          Get In Touch
        </a>
      </motion.div>
    </div>
  </section>
)

export default Hero
