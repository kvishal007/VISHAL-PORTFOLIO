import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'RK Gadget Store',
    description:
      'Full stack e-commerce platform with a customer-facing storefront, Node.js backend API, and a dedicated admin panel for order management. Features product listings, cart, user auth, and real-time order tracking.',
    tech: ['JavaScript', 'Node.js', 'Express', 'MongoDB', 'HTML', 'CSS'],
    github: 'https://github.com/kvishal007',
    live: 'https://rkgadget-store.vercel.app',
    featured: true,
  },
  {
    title: 'Smart Campus Attendance System',
    description:
      'Web-based student attendance tracking system that allows teachers to mark and monitor attendance digitally. Includes a simple dashboard to view reports per subject and date range.',
    tech: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
    github: 'https://github.com/kvishal007/smart-campus-attendance',
    live: null,
    featured: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  </svg>
);

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        custom={0}
      >
        <h2 className="flex items-center gap-4 text-2xl font-bold text-slate-100 mb-12">
          <span className="text-[#00bbf9] font-mono text-lg font-normal">03.</span>
          Projects
          <span className="flex-1 h-[1px] bg-slate-800 max-w-xs" />
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.article
            key={index}
            custom={index + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className="group bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-600 hover:-translate-y-1 transition-all duration-300 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 rounded-lg bg-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#00bbf9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/>
                  <path d="M14 2v4a2 2 0 0 0 2 2h4"/>
                </svg>
              </div>

              <div className="flex items-center gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-slate-200 transition-colors"
                    aria-label={`GitHub – ${project.title}`}
                  >
                    <GitHubIcon />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-[#00bbf9] transition-colors"
                    aria-label={`Live – ${project.title}`}
                  >
                    <ExternalIcon />
                  </a>
                )}
              </div>
            </div>

            {/* Content */}
            <h3 className="text-slate-100 font-semibold text-lg mb-2 group-hover:text-[#00bbf9] transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
