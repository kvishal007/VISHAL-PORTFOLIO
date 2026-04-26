import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Lamda Tech Softics',
    role: 'Web Development Intern',
    period: 'Dec 4 - 20, 2025',
    description: 'Received hands-on training and actively contributed to building modern web applications, enhancing skills in frontend and backend technologies.',
    color: 'var(--color-accent-purple)',
  },
  {
    company: 'Kevell Global Solutions LLP, Madurai',
    role: 'Industrial Visit',
    period: 'Mar 5, 2026',
    description: 'Gained practical insights into software development lifecycles and corporate tech environments through an immersive industrial visit.',
    color: 'var(--color-accent-blue)',
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4">
            CHRONO <span className="text-stroke">LOG</span>
          </h2>
          <div className="w-20 h-1 bg-accent-pink rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-bottom from-accent-purple via-accent-blue to-accent-pink transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex flex-col md:flex-row md:justify-between items-start md:items-center">
                {/* Timeline Node */}
                <div className="absolute left-[-5px] md:left-1/2 w-3 h-3 bg-background border-2 border-white rounded-full z-20 transform -translate-x-1/2 hidden md:block">
                  <div 
                    className="absolute inset-0 rounded-full animate-ping opacity-75"
                    style={{ backgroundColor: exp.color }}
                  ></div>
                </div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`w-full md:w-[45%] glass-card p-8 rounded-3xl border-l-4 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                  style={{ borderColor: exp.color }}
                >
                  <span className="text-xs font-mono tracking-widest text-gray-500 mb-2 block uppercase">{exp.period}</span>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <h4 className="text-lg font-medium mb-4" style={{ color: exp.color }}>{exp.company}</h4>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </motion.div>
                
                {/* Mobile line (small) */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-[1px] bg-gray-800 -z-10 ml-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
