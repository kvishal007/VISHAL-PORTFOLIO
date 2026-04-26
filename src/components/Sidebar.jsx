import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'hero', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

// ── Desktop Sidebar (sticky, not fixed) ──
const DesktopSidebar = ({ activeSection }) => (
  <aside
    className="hidden lg:flex flex-col flex-shrink-0 sticky top-0 h-screen overflow-y-auto"
    style={{ width: '240px', minWidth: '240px', backgroundColor: '#0f172a', borderRight: '1px solid #1e293b' }}
  >
    <div className="flex flex-col h-full px-8 py-10">
      {/* Branding */}
      <div className="mb-10">
        <button
          onClick={() => scrollTo('hero')}
          className="block text-left group"
        >
          <p className="text-base font-bold text-slate-100 group-hover:text-[#00bbf9] transition-colors leading-tight">
            K. Vishal
          </p>
          <p className="text-[11px] text-slate-500 mt-1 leading-snug">
            Full Stack Developer<br />AI & DS Student
          </p>
        </button>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col gap-0.5 flex-1">
        {navLinks.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg text-[13px] font-medium text-left transition-all duration-200 group ${
                isActive
                  ? 'text-[#00bbf9]'
                  : 'text-slate-500 hover:text-slate-200'
              }`}
            >
              {/* Animated indicator line */}
              <span
                className="block h-[1.5px] flex-shrink-0 transition-all duration-300 rounded-full"
                style={{
                  width: isActive ? '32px' : '16px',
                  backgroundColor: isActive ? '#00bbf9' : '#475569',
                }}
              />
              {label}
            </button>
          );
        })}
      </nav>

      {/* Social icons */}
      <div className="mt-auto pt-6 flex items-center gap-4">
        <a
          href="https://github.com/kvishal007"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-slate-600 hover:text-[#00bbf9] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
            <path d="M9 18c-4.51 2-5-2-7-2"/>
          </svg>
        </a>
        <a
          href="https://linkedin.com/in/vishal-k-66484832b"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-slate-600 hover:text-[#00bbf9] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect width="4" height="12" x="2" y="9"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a
          href="mailto:k.vishal108737@gmail.com"
          aria-label="Email"
          className="text-slate-600 hover:text-[#00bbf9] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <rect width="20" height="16" x="2" y="4" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
      </div>
    </div>
  </aside>
);

// ── Mobile Header ──
const MobileHeader = ({ activeSection }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header
        className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: 'rgba(15,23,42,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1e293b' }}
      >
        <button
          onClick={() => { scrollTo('hero'); setOpen(false); }}
          className="text-slate-100 font-bold text-base hover:text-[#00bbf9] transition-colors"
        >
          K. Vishal
        </button>
        <button
          onClick={() => setOpen(!open)}
          className="text-slate-400 hover:text-slate-100 transition-colors p-1"
          aria-label="Toggle menu"
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="18" x2="20" y2="18"/>
            </svg>
          )}
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden fixed top-[57px] left-0 right-0 z-40 flex flex-col px-4 py-3"
            style={{ backgroundColor: '#0f172a', borderBottom: '1px solid #1e293b' }}
          >
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => { scrollTo(id); setOpen(false); }}
                className={`text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  activeSection === id
                    ? 'text-[#00bbf9] bg-[rgba(0,187,249,0.06)]'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Sidebar = ({ activeSection }) => (
  <>
    <DesktopSidebar activeSection={activeSection} />
    <MobileHeader activeSection={activeSection} />
  </>
);

export default Sidebar;
