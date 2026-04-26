import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award } from 'lucide-react';

const achievements = [
  {
    title: '3rd Place – Open State Bench Press & Deadlift Championship',
    organization: 'Amateur Powerlifting Association',
    date: 'Mar 29, 2026',
    details: '56kg Junior Category',
    icon: Trophy,
    color: 'var(--color-accent-orange)',
  },
  {
    title: 'Certificate of Participation',
    organization: 'Kevell Global Solutions',
    date: 'Mar 5, 2026',
    details: 'Industrial Visit',
    icon: Award,
    color: 'var(--color-accent-blue)',
  },
  {
    title: 'Certificate of Completion',
    organization: 'Lamda Tech Softics',
    date: 'Dec 20, 2025',
    details: 'Web Development Internship',
    icon: Award,
    color: 'var(--color-accent-purple)',
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-4">
            TROPHY <span className="text-stroke">ROOM</span>
          </h2>
          <div className="w-20 h-1 bg-accent-orange rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 rounded-3xl relative overflow-hidden group flex flex-col items-center text-center"
                style={{
                  boxShadow: `0 0 20px ${item.color}22`,
                  borderColor: `${item.color}44`,
                }}
              >
                {/* Glow Background */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                  style={{ backgroundColor: item.color }}
                ></div>

                <div className="relative z-10">
                  <div 
                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 glass-panel"
                    style={{ color: item.color }}
                  >
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 mb-2 font-mono uppercase">{item.organization}</p>
                  <p className="text-gray-300 font-medium mb-4">{item.details}</p>
                  <span className="text-xs text-gray-500 tracking-widest">{item.date}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
