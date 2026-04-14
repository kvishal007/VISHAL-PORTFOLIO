import React from 'react'
import { ExternalLink } from 'lucide-react'
import { GitHubIcon } from '../components/icons/BrandIcons'

const projects = [
  {
    title: 'Smart Campus Attendance',
    description: 'A comprehensive full-stack tracking solution featuring an intuitive dashboard, automated systems, and detailed class engagement metrics.',
    tags: ['JavaScript', 'React', 'Node.js'],
    link: 'https://github.com/kvishal007/smart-campus-attendance',
    github: 'https://github.com/kvishal007/smart-campus-attendance'
  },
  {
    title: 'ChatFlow Application',
    description: 'A real-time messaging web application supporting distinct chat rooms, live typing indicators, and reliable online presence tracking.',
    tags: ['Socket.io', 'Express', 'React', 'Tailwind'],
    link: '#',
    github: '#'
  },
  {
    title: 'TaskMaster Dashboard',
    description: 'A productivity and project management dashboard allowing users to utilize drag-and-drop interfaces for task organization and team collaboration.',
    tags: ['MERN Stack', 'Redux', 'JWT Authentication'],
    link: '#',
    github: '#'
  },
]

const Projects = () => (
  <section id="projects" className="section-padding bg-gray-50">
    <div className="container-custom">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
        <span className="text-blue-600 mr-2 text-xl font-normal">03.</span> Some Things I've Built
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-8 hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              </div>
              <div className="flex gap-4 text-gray-500">
                <a href={p.github} className="hover:text-blue-600 transition-colors" aria-label="GitHub Link">
                  <GitHubIcon size={20} />
                </a>
                <a href={p.link} className="hover:text-blue-600 transition-colors" aria-label="External Link">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">{p.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
              {p.description}
            </p>
            
            <ul className="flex flex-wrap gap-3 text-xs font-mono text-gray-500">
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
