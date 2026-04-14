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
  <section id="skills" className="section-padding bg-white">
    <div className="container-custom">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
        <span className="text-accent mr-2 text-xl font-normal">02.</span> Skills & Expertise
      </h2>
      
      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition-shadow bg-gray-50/50">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map(skill => (
                <li key={skill} className="flex items-center text-gray-600">
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
