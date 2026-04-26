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
    const observers = [];

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: '-10% 0px -55% 0px' }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300">
      {/* ── Desktop: flex row ── */}
      <div className="lg:flex lg:min-h-screen">

        {/* LEFT – sidebar (sticky on desktop, fixed-header on mobile) */}
        <Sidebar activeSection={activeSection} />

        {/* RIGHT – scrollable content */}
        <main className="flex-1 min-w-0 pt-16 lg:pt-0">
          <div
            className="max-w-2xl mx-auto px-8 md:px-12"
            style={{ paddingTop: '0' }}
          >
            <Hero />
            <hr className="border-slate-800/70 my-0" />
            <About />
            <hr className="border-slate-800/70 my-0" />
            <Experience />
            <hr className="border-slate-800/70 my-0" />
            <Projects />
            <hr className="border-slate-800/70 my-0" />
            <Achievements />
            <hr className="border-slate-800/70 my-0" />
            <Contact />
            <footer className="py-12 text-center text-xs text-slate-600 font-mono border-t border-slate-800/60 mt-4">
              <p>Designed & built by K. Vishal</p>
              <p className="mt-1">© 2026</p>
            </footer>
          </div>
        </main>

      </div>
    </div>
  );
}

export default App;
