import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

const SECTIONS = ['hero', 'about', 'experience', 'projects', 'achievements', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers = {};

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.25, rootMargin: '-10% 0px -60% 0px' }
      );

      observer.observe(el);
      observers[id] = observer;
    });

    return () => {
      Object.values(observers).forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300">
      <Sidebar activeSection={activeSection} />

      {/* Main content — offset by sidebar width on large screens */}
      <main className="lg:pl-64">
        <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16 pt-20 lg:pt-0">
          <Hero />
          <div className="border-t border-slate-800/60" />
          <About />
          <div className="border-t border-slate-800/60" />
          <Experience />
          <div className="border-t border-slate-800/60" />
          <Projects />
          <div className="border-t border-slate-800/60" />
          <Achievements />
          <div className="border-t border-slate-800/60" />
          <Contact />

          {/* Footer */}
          <footer className="py-12 text-center text-xs text-slate-600 font-mono">
            <p>Designed & built by K. Vishal</p>
            <p className="mt-1">© 2026 — All rights reserved</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
