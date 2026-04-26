import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'JavaScript', color: 'var(--color-accent-blue)' },
  { name: 'React', color: 'var(--color-accent-purple)' },
  { name: 'Node.js', color: 'var(--color-accent-pink)' },
  { name: 'Three.js', color: 'var(--color-accent-blue)' },
  { name: 'Tailwind CSS', color: 'var(--color-accent-orange)' },
  { name: 'MongoDB', color: 'var(--color-accent-purple)' },
  { name: 'Python', color: 'var(--color-accent-pink)' },
  { name: 'Git', color: 'var(--color-accent-blue)' },
  { name: 'AWS', color: 'var(--color-accent-orange)' },
  { name: 'TypeScript', color: 'var(--color-accent-blue)' },
  { name: 'Express', color: 'var(--color-accent-purple)' },
  { name: 'SQL', color: 'var(--color-accent-pink)' },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4">
            MISSION <span className="text-stroke">MANIFEST</span>
          </h2>
          <div className="w-20 h-1 bg-accent-blue rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 glass-card p-10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/10 rounded-full blur-3xl -translate-y-12 translate-x-12 group-hover:bg-accent-purple/20 transition-all"></div>
            
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              I am <span className="text-white font-bold">K. Vishal</span>, a full-stack engineer navigating the intersection of <span className="text-accent-blue">design and high-performance code</span>.
            </p>
            <p className="text-gray-400 mb-8">
              Based in the digital ether, I build immersive web experiences that defy gravity. My focus is on creating seamless interfaces with complex backends, ensuring every byte serves a purpose and every pixel tells a story.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="border-l-2 border-accent-pink pl-4">
                <h4 className="text-white font-bold text-lg">3+ Years</h4>
                <p className="text-gray-500 text-sm">Building digital worlds</p>
              </div>
              <div className="border-l-2 border-accent-blue pl-4">
                <h4 className="text-white font-bold text-lg">20+ Projects</h4>
                <p className="text-gray-500 text-sm">Successfully deployed</p>
              </div>
            </div>
          </motion.div>

          {/* Drifting Skill Tags */}
          <div className="lg:w-1/2 relative h-[400px] flex flex-wrap gap-4 items-center justify-center p-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{
                  y: [0, Math.sin(i) * 20, 0],
                  rotate: [0, (i % 2 === 0 ? 5 : -5), 0],
                }}
                transition={{
                  y: {
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                  delay: i * 0.1,
                }}
                className="px-6 py-3 rounded-full glass-panel border border-white/5 text-sm font-medium tracking-wide"
                style={{
                  boxShadow: `0 0 15px ${skill.color}22`,
                  borderColor: `${skill.color}44`,
                  color: skill.name === 'React' || skill.name === 'JavaScript' ? '#fff' : '#ccc'
                }}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
