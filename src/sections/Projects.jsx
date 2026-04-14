import React from 'react'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '../components/icons/BrandIcons'

const projects = [
  {
    title: 'VISHAL-PORTFOLIO',
    description: 'A modern, responsive, and highly professional personal portfolio website describing my skills and projects, built with React and Tailwind CSS.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/kvishal007/VISHAL-PORTFOLIO',
    github: 'https://github.com/kvishal007/VISHAL-PORTFOLIO'
  },
  {
    title: 'Smart Campus Attendance',
    description: 'A comprehensive full-stack tracking solution featuring an intuitive dashboard, automated systems, and detailed class engagement metrics.',
    tags: ['JavaScript', 'React', 'Node.js'],
    link: 'https://github.com/kvishal007/smart-campus-attendance',
    github: 'https://github.com/kvishal007/smart-campus-attendance'
  },
  {
    title: 'RK BAZAAR (E-Commerce)',
    description: 'A comprehensive full-stack e-commerce solution featuring secure payments, user authentication, a cart system, and an intuitive admin dashboard for order management.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    link: '#',
    github: '#'
  }
]

const Projects = () => (
  <section id="projects" className="section-padding bg-transparent">
    <div className="container-custom">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
        <span className="text-accent mr-2 text-xl font-normal">03.</span> Some Things I've Built
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-secondary/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="text-accent">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div className="flex gap-4 text-gray-400">
                <a href={p.github} className="hover:text-accent transition-colors" aria-label="GitHub Link" target="_blank" rel="noopener noreferrer">
                  <GitHubIcon size={20} />
                </a>
                <a href={p.link} className="hover:text-accent transition-colors" aria-label="External Link" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
              {p.description}
            </p>
            
            <ul className="flex flex-wrap gap-3 text-xs font-mono text-gray-400">
              {p.tags.map(tag => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Projects
