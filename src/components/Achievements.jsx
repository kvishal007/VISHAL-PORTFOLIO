import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    emoji: '🥉',
    title: '3rd Place – Open State Bench Press & Deadlift Championship',
    org: 'Amateur Powerlifting Association (APA)',
    date: 'Mar 29, 2026',
    detail: '56kg Junior Category',
    highlight: true,
  },
  {
    emoji: '📜',
    title: 'Certificate of Completion – Web Development Internship',
    org: 'Lamda Tech Softics',
    date: 'Dec 2025',
    detail: null,
    highlight: false,
  },
  {
    emoji: '🏛️',
    title: 'Certificate of Participation – Industrial Visit',
    org: 'Kevell Global Solutions LLP',
    date: 'Mar 2026',
    detail: null,
    highlight: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' },
  }),
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        custom={0}
      >
        <h2 className="flex items-center gap-4 text-2xl font-bold text-slate-100 mb-12">
          <span className="text-[#00bbf9] font-mono text-lg font-normal">04.</span>
          Achievements
          <span className="flex-1 h-[1px] bg-slate-800 max-w-xs" />
        </h2>
      </motion.div>

      <div className="flex flex-col gap-4">
        {achievements.map((item, index) => (
          <motion.div
            key={index}
            custom={index + 1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            className={`flex items-start gap-5 p-6 rounded-xl border transition-colors ${
              item.highlight
                ? 'bg-[rgba(0,187,249,0.05)] border-[rgba(0,187,249,0.2)] hover:border-[rgba(0,187,249,0.4)]'
                : 'bg-slate-900 border-slate-800 hover:border-slate-700'
            }`}
          >
            <span className="text-2xl mt-0.5 flex-shrink-0">{item.emoji}</span>
            <div className="flex-1">
              <h3
                className={`font-semibold text-sm mb-1 ${
                  item.highlight ? 'text-slate-100' : 'text-slate-200'
                }`}
              >
                {item.title}
              </h3>
              <p className={`text-sm ${item.highlight ? 'text-[#00bbf9]' : 'text-slate-400'}`}>
                {item.org}
              </p>
              {item.detail && (
                <p className="text-xs text-slate-500 mt-1">{item.detail}</p>
              )}
            </div>
            <div className="flex-shrink-0 text-right">
              <span className="text-xs text-slate-500 font-mono bg-slate-800 px-2 py-1 rounded">
                {item.date}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
