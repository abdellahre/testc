"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react"
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
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to bring scientific precision to your next project? I'm always interested in discussing new
            opportunities in laboratory analysis, research, or the petroleum industry.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-r from-cyan-500 to-emerald-500 text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400">{item.label}</p>
                      <p className="text-white group-hover:text-cyan-400 transition-colors">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-white mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700 bg-transparent"
                    onClick={() => window.open("/resume.pdf", "_blank")}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700 bg-transparent"
                    onClick={() => window.open("https://github.com/abdellahre", "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-emerald-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                  <h4 className="text-lg font-semibold text-white">Available for Work</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  Currently seeking opportunities in medical laboratories, research institutions, or petroleum industry.
                  Open to both full-time positions and consulting projects.
                </p>
              </CardContent>
            </Card>
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

        {/* Professional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-slate-800/30 border-slate-700 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold text-white mb-4">Professional Collaboration</h4>
              <p className="text-slate-300 leading-relaxed">
                With a strong foundation in fundamental chemistry and hands-on experience in medical laboratory
                analysis, I bring precision, reliability, and scientific rigor to every project. Whether you need
                expertise in biochemistry, hematology, or analytical chemistry, I'm committed to delivering accurate
                results and maintaining the highest professional standards.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
