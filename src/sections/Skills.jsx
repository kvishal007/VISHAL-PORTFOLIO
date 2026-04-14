import React from 'react'

const skillCategories = [
  {
    title: 'Frontend Development',
    skills: ['JavaScript (ES6+)', 'React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'RESTful APIs', 'GraphQL']
  },
  {
    title: 'Database & Tools',
    skills: ['MongoDB', 'PostgreSQL', 'Git & GitHub', 'Postman']
  }
]

const Skills = () => (
  <section id="skills" className="section-padding bg-secondary/50 backdrop-blur-sm">
    <div className="container-custom">
      <h2 className="text-3xl font-bold text-white mb-12 flex items-center">
        <span className="text-accent mr-2 text-xl font-normal">02.</span> Skills & Expertise
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="p-6 border border-gray-800 rounded-xl hover:shadow-lg transition-shadow bg-secondary">
            <h3 className="text-xl font-semibold text-white mb-6">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map(skill => (
                <li key={skill} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
