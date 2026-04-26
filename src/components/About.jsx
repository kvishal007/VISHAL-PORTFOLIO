import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'Git', 'Tailwind CSS',
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const About = () => {
  return (
    <section id="about" className="py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
      >
        <h2 className="flex items-center gap-4 text-2xl font-bold text-slate-100 mb-12">
          <span className="text-[#00bbf9] font-mono text-lg font-normal">01.</span>
          About Me
          <span className="flex-1 h-[1px] bg-slate-800 max-w-xs" />
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">
        {/* Text column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="md:col-span-3 space-y-4 text-slate-400 leading-relaxed"
        >
          <p>
            Hey! I'm <span className="text-slate-200 font-medium">K. Vishal</span>, a 2nd year B.Tech AI & Data Science student at{' '}
            <span className="text-slate-200 font-medium">Kamaraj College of Engineering and Technology, Virudhunagar</span>.
          </p>
          <p>
            I'm a self-taught full stack web developer passionate about building real-world applications that solve actual problems. I enjoy working across the entire stack — from designing intuitive UIs in React to wiring up backends with Node.js and Express.
          </p>
          <p>
            When I'm not coding, you'll find me at the gym — I compete in powerlifting and placed{' '}
            <span className="text-[#00bbf9] font-medium">3rd at the Open State Bench Press & Deadlift Championship</span>. I believe the same consistency required to lift heavy translates directly to writing good code.
          </p>

          <div className="pt-4">
            <p className="text-slate-300 font-medium mb-4">Technologies I work with:</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-xs font-mono font-medium text-[#00bbf9] bg-[rgba(0,187,249,0.08)] border border-[rgba(0,187,249,0.2)] rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Photo placeholder */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="md:col-span-2 flex justify-center"
        >
          <div className="relative w-56 h-56 group">
            <div className="absolute inset-0 rounded-lg border-2 border-[#00bbf9] translate-x-3 translate-y-3 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
            <div className="relative w-full h-full rounded-lg bg-slate-800 border border-slate-700 overflow-hidden z-10 flex items-center justify-center">
              <img
                src="/vishal.jpeg"
                alt="K. Vishal"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="absolute inset-0 hidden items-center justify-center flex-col gap-2 text-slate-500" style={{display:'none'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7"/></svg>
                <span className="text-xs">K. Vishal</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Info grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
      >
        {[
          { label: 'Location', value: 'Viruthunagar, TN' },
          { label: 'College', value: 'KCET Virudhunagar' },
          { label: 'Year', value: '2nd Year B.Tech' },
          { label: 'Branch', value: 'AI & Data Science' },
        ].map(({ label, value }) => (
          <div key={label} className="border-l-2 border-[#00bbf9] pl-4">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-mono mb-1">{label}</p>
            <p className="text-slate-300 font-medium text-sm">{value}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
