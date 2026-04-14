import React, { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { GitHubIcon, LinkedInIcon, TwitterIcon } from '../components/icons/BrandIcons'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    // Mock API call
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setTimeout(() => setSent(false), 3000)
      setForm({ name: '', email: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 flex items-center justify-center">
          <span className="text-accent mr-2 text-xl font-normal">04.</span> Get In Touch
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Let's talk</h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 text-accent mr-4" />
                <a href="mailto:k.vishal108737@gmail.com" className="hover:text-accent transition-colors">k.vishal108737@gmail.com</a>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 text-accent mr-4" />
                <a href="tel:6374712490" className="hover:text-accent transition-colors">6374712490</a>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex gap-4">
              <a href="#" className="p-2 text-gray-400 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors">
                <GitHubIcon size={20} />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors">
                <LinkedInIcon size={20} />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-accent hover:bg-gray-50 rounded-lg transition-colors">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    placeholder="john@example.com" />
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-y"
                  placeholder="How can I help you?"></textarea>
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-accent text-white font-medium py-3 rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-70 flex justify-center items-center">
                {loading ? (
                   <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                   </svg>
                ) : sent ? 'Message Sent Successfully!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-gray-100 text-center pb-6">
        <p className="text-sm text-gray-500 hover:text-accent transition-colors cursor-pointer">
          Designed & Built by K.VISHAL
        </p>
      </div>
    </section>
  )
}

export default Contact
