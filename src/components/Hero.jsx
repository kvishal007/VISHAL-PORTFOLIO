import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import FloatingGeometry from './FloatingGeometry';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background 3D Element */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <FloatingGeometry position={[2, 0, 0]} color="#9b5de5" />
          </Suspense>
        </Canvas>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <span className="text-accent-blue font-mono text-sm tracking-widest uppercase">
            Systems Online // Ready for Exploration
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl md:text-9xl font-display font-extrabold mb-6 tracking-tighter"
        >
          <span className="text-gradient-shimmer">K.VISHAL</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-3xl text-gray-400 mb-10 h-10 font-sans"
        >
          <Typewriter
            words={[
              'Full Stack Engineer',
              'React Developer',
              'Node.js Expert',
              'Problem Solver',
              'Innovator'
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-accent-blue text-background font-bold rounded-full overflow-hidden transition-all hover:pr-12"
          >
            <span className="relative z-10">View My Work</span>
            <ArrowRight className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all" size={20} />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-white/20 hover:border-accent-purple/50 rounded-full transition-all text-white font-medium hover:bg-white/5"
          >
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-500"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2 font-mono">Scroll</span>
        <ChevronDown size={24} className="text-accent-blue" />
      </motion.div>
    </section>
  );
};

export default Hero;
