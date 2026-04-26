import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const navLinks = [
  { id: 'hero', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const Sidebar = ({ activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-64 bg-slate-950 border-r border-slate-800 p-8 z-50">
        {/* Name / Logo */}
        <div className="mb-12">
          <button onClick={() => scrollTo('hero')} className="block group">
            <h1 className="text-xl font-bold text-slate-100 group-hover:text-[#00bbf9] transition-colors duration-200">
              K. Vishal
            </h1>
            <p className="text-xs text-slate-500 mt-1 leading-snug">
              Full Stack Developer<br />AI & DS Student
            </p>
          </button>
        </div>

        {/* Nav */}
        <nav className="flex flex-col space-y-1 flex-1">
          {navLinks.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-left transition-all duration-200 group ${
                  isActive
                    ? 'text-[#00bbf9] bg-[rgba(0,187,249,0.08)]'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                <span
                  className={`block w-5 h-[1.5px] transition-all duration-300 ${
                    isActive ? 'bg-[#00bbf9] w-8' : 'bg-slate-600 group-hover:bg-slate-400 group-hover:w-7'
                  }`}
                />
                {label}
              </button>
            );
          })}
        </nav>

        {/* Social */}
        <div className="mt-auto pt-8 flex items-center gap-4">
          <a
            href="https://github.com/kvishal007"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-[#00bbf9] transition-colors"
            aria-label="GitHub"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a
            href="https://linkedin.com/in/vishal-k-66484832b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-[#00bbf9] transition-colors"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a
            href="mailto:k.vishal108737@gmail.com"
            className="text-slate-500 hover:text-[#00bbf9] transition-colors"
            aria-label="Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-slate-950/90 backdrop-blur-sm border-b border-slate-800">
        <button onClick={() => scrollTo('hero')} className="text-slate-100 font-bold text-lg hover:text-[#00bbf9] transition-colors">
          K. Vishal
        </button>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-slate-400 hover:text-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/></svg>
          )}
        </button>
      </header>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden fixed top-[57px] left-0 right-0 z-40 bg-slate-950 border-b border-slate-800 px-6 py-4 flex flex-col gap-1"
        >
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-left py-2.5 px-3 text-sm font-medium rounded-lg transition-colors ${
                activeSection === id
                  ? 'text-[#00bbf9] bg-[rgba(0,187,249,0.08)]'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {label}
            </button>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Sidebar;
