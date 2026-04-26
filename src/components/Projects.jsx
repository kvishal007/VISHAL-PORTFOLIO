import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'VISHAL-PORTFOLIO',
    description: 'A multi-dimensional 3D portfolio experience with anti-gravity physics, built using R3F and GSAP.',
    tech: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
    links: { github: '#', live: '#' },
    color: 'from-accent-purple to-accent-blue',
  },
  {
    title: 'SMART CAMPUS',
    description: 'AI-powered attendance and security system for educational institutions with real-time analytics.',
    tech: ['React', 'Node.js', 'PyTorch', 'MongoDB'],
    links: { github: '#', live: '#' },
    color: 'from-accent-blue to-accent-pink',
  },
  {
    title: 'RK BAZAAR',
    description: 'Cyberpunk-themed high-performance e-commerce platform with specialized logistics routing.',
    tech: ['Next.js', 'Redux', 'Stripe', 'Appwrite'],
    links: { github: '#', live: '#' },
    color: 'from-accent-pink to-accent-orange',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-7xl md:text-9xl font-display font-extrabold tracking-tighter text-stroke opacity-50 mb-4">
            PROJECTS
          </h2>
          <p className="text-accent-blue font-mono tracking-widest uppercase -mt-16 md:-mt-24 text-xl font-bold">
            Selected Digital Artifacts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ 
                y: -12, 
                transition: { duration: 0.3 } 
              }}
              className="group relative glass-panel rounded-2xl overflow-hidden p-1 flex flex-col h-full"
            >
              {/* Top Gradient Border */}
              <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-right ${project.color}`}></div>

              <div className="p-8 flex flex-col h-full bg-surface/40 rounded-2xl">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-20`}>
                    <Code2 size={24} className="text-white" />
                  </div>
                  <div className="flex gap-4">
                    <a href={project.links.github} className="text-gray-400 hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </a>
                    <a href={project.links.live} className="text-gray-400 hover:text-white transition-colors">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-accent-blue transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-8 flex-1 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-3 py-1 bg-white/5 rounded-full text-gray-300 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Shadow Overlay */}
              <div className="absolute inset-0 pointer-events-none group-hover:shadow-[0_20px_50px_rgba(155,93,229,0.1)] transition-all duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
