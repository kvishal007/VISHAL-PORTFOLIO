import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { id: 'about', title: 'About' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/70 backdrop-blur-xl border-b border-gray-700' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-white tracking-tight">K.VISHAL</a>

        <div className="hidden md:flex gap-8">
          {links.map(l => (
            <a key={l.id} href={`#${l.id}`}
              className="text-gray-300 hover:text-accent text-sm font-medium transition-colors">
              {l.title}
            </a>
          ))}
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-secondary/50 backdrop-blur-sm border-b border-gray-700">
          <div className="flex flex-col py-4 px-6 gap-4">
            {links.map(l => (
              <a key={l.id} href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-gray-700 hover:text-accent">
                {l.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
