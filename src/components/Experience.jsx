import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Web Development Intern',
    company: 'Lamda Tech Softics',
    period: 'Dec 4 – 20, 2025',
    type: 'Internship',
    points: [
      'Built responsive web pages using HTML, CSS, and JavaScript.',
      'Collaborated with the team to implement UI designs accurately.',
      'Gained hands-on experience with real-world development workflows.',
    ],
    color: '#00bbf9',
  },
  {
    role: 'Industrial Visit Participant',
    company: 'Kevell Global Solutions LLP, Madurai',
    period: 'Mar 5, 2026',
    type: 'Industrial Visit',
    points: [
      'Visited an active software development company to understand industry practices.',
      'Received insights on software development lifecycles and team structures.',
      'Earned a Certificate of Participation.',
    ],
    color: '#64748b',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
      >
        <h2 className="flex items-center gap-4 text-2xl font-bold text-slate-100 mb-12">
          <span className="text-[#00bbf9] font-mono text-lg font-normal">02.</span>
          Experience
          <span className="flex-1 h-[1px] bg-slate-800 max-w-xs" />
        </h2>
      </motion.div>

      <div className="relative flex flex-col gap-10">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-slate-800" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: index * 0.1, ease: 'easeOut' } },
            }}
            className="pl-10 relative"
          >
            {/* Dot */}
            <div
              className="absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-[#00bbf9] bg-slate-950 z-10"
            />

            {/* Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-slate-100 font-semibold text-base">{exp.role}</h3>
                  <p className="text-[#00bbf9] text-sm font-medium mt-0.5">{exp.company}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-xs text-slate-500 font-mono bg-slate-800 px-2 py-1 rounded">
                    {exp.period}
                  </span>
                  <p className="text-xs text-slate-600 mt-1">{exp.type}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="text-[#00bbf9] mt-1.5 flex-shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
