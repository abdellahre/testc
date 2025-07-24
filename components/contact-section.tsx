'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Linkedin, Github, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import ContactFormHandler from './contact-form-handler'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abdellah.recham@email.com',
    href: 'mailto:abdellah.recham@email.com'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Bouira, Algeria',
    href: 'https://maps.google.com/?q=Bouira,Algeria'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+213 XXX XXX XXX',
    href: 'tel:+213XXXXXXXXX'
  }
]

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/abdellah-recham',
    color: 'hover:text-blue-400'
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/abdellahre',
    color: 'hover:text-gray-400'
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:abdellah.recham@email.com',
    color: 'hover:text-emerald-400'
  }
]

export default function ContactSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.1),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse delay-500" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to bring scientific precision to your next project? I'm always interested in 
            discussing new opportunities in laboratory analysis, research, or the petroleum industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you have a question about my experience, want to discuss a potential 
                collaboration, or just want to say hello, I'd love to hear from you.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-colors">
                    <CardContent className="p-4">
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div className="p-3 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 rounded-lg group-hover:from-cyan-500/20 group-hover:to-emerald-500/20 transition-colors">
                          <info.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">{info.label}</p>
                          <p className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                            {info.value}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className={`bg-gray-900/50 border-gray-700 text-gray-400 ${social.color} hover:border-gray-600 transition-all duration-300`}
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ContactFormHandler />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border-cyan-500/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start a Project?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                I'm currently available for new opportunities in laboratory analysis, 
                research projects, and consulting work in the petroleum industry.
              </p>
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-medium px-8 py-3"
              >
                <a href="mailto:abdellah.recham@email.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Start a Conversation
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
