"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactFormHandler from "./contact-form-handler"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "abdellah.recham@email.com",
    href: "mailto:abdellah.recham@email.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+213 XXX XXX XXX",
    href: "tel:+213XXXXXXXXX",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Bouira, Algeria",
    href: "https://maps.google.com/?q=Bouira,Algeria",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/abdellah-recham",
    href: "https://linkedin.com/in/abdellah-recham",
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#0a0f0f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to discuss opportunities in laboratory analysis, medical diagnostics, or the petroleum industry? Let's
            connect and explore how my expertise can contribute to your team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-slate-300 mb-8">
                I'm always interested in new opportunities and collaborations. Whether you have a question about my
                experience or want to discuss a potential role, feel free to reach out.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/30 border border-slate-700/50 hover:bg-slate-700/30 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-cyan-500 text-slate-900 group-hover:scale-110 transition-transform">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <Button
                size="lg"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <ContactFormHandler className="bg-slate-800/30 border-slate-700/50" />
          </motion.div>
        </div>

        {/* Professional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="bg-slate-800/30 border-slate-700/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold text-white mb-4">Professional Availability</h4>
              <p className="text-slate-300">
                Currently seeking opportunities in medical laboratory analysis, biochemistry research, or petroleum
                industry applications. Available for full-time positions, consulting, or collaborative projects.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
