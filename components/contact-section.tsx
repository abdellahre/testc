"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'
import ContactFormHandler from "./contact-form-handler"

export default function ContactSection() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Bouira, Algeria",
      color: "text-cyan-400",
    },
    {
      icon: Mail,
      label: "Email",
      value: "abdellah.recham@email.com",
      color: "text-emerald-400",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+213 XXX XXX XXX",
      color: "text-violet-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/abdellah-recham",
      color: "text-amber-400",
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900/20 to-[#030303]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-emerald-300">
            Get In Touch
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ready to contribute to your laboratory team. Let's discuss opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-white/[0.1] backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.05]"
                  >
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                    <div>
                      <p className="text-white/60 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-white/[0.1] backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Professional Interests</h3>
                <div className="space-y-3 text-white/70">
                  <p>• Medical laboratory analysis and diagnostics</p>
                  <p>• Oil and petroleum industry applications</p>
                  <p>• Research and development opportunities</p>
                  <p>• Quality control and assurance roles</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <ContactFormHandler />
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-white/[0.1]"
        >
          <p className="text-white/40">© 2024 Abdellah Recham. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  )
}
