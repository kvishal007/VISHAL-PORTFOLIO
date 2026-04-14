import React from 'react'

const About = () => (
  <section id="about" className="section-padding bg-gray-50">
    <div className="container-custom">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="text-blue-600 mr-2 text-xl font-normal">01.</span> About Me
          </h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Hello! My name is Vishal and I enjoy creating things that live on the internet. My interest in web development started back in 2020 when I decided to try editing custom Tumblr themes — turns out hacking together HTML & CSS taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {['JavaScript (ES6+)', 'React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'].map(tech => (
                <li key={tech} className="flex items-center text-sm">
                  <span className="text-blue-600 mr-2">▹</span> {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="relative group w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 border-2 border-blue-600 rounded translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative w-full h-full bg-gray-200 rounded overflow-hidden z-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
              <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors z-20"></div>
              {/* Replace with your actual image */}
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                [Profile Photo]
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default About
