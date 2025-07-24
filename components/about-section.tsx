"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

export default function AboutSection() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  return (
    <section id="about" className="py-20 px-6 bg-[#0a0f0f]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Passionate about applying scientific knowledge and analytical skills in laboratory environments
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="relative">
              <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500">
                <CardContent className="p-6">
                  <Image
                    src="/images/abdellah-lab-work.png"
                    alt="Abdellah in laboratory setting"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-500">
                <CardContent className="p-4">
                  <Image
                    src="/images/abdellah-lab-portrait.png"
                    alt="Chemistry laboratory work"
                    width={250}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
              <div className="flex flex-col justify-center space-y-4">
                <Badge variant="outline" className="border-cyan-500/50 text-cyan-400 bg-cyan-500/10">
                  6 Months Experience
                </Badge>
                <Badge variant="outline" className="border-slate-600 text-slate-300 bg-slate-800/30">
                  Chemistry Graduate
                </Badge>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-4">Professional Background</h3>
              <p className="text-slate-300 leading-relaxed">
                As a dedicated Laboratory Technician with a Bachelor's degree in Fundamental Chemistry, I bring a strong
                foundation in analytical and physical chemistry, combined with practical experience in medical
                laboratory analysis.
              </p>
              <p className="text-slate-300 leading-relaxed">
                My expertise spans biochemistry and hematology, with hands-on experience in conducting clinical
                diagnostics, operating analytical instruments, and ensuring accurate data reporting in healthcare
                settings.
              </p>
            </div>

            <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  Education
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-white">Bachelor's in Fundamental Chemistry</h5>
                    <p className="text-slate-400 text-sm flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4" />
                      University of Bouira Akli Mohand Oulhadj
                    </p>
                    <p className="text-slate-400 text-sm flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4" />
                      2020 - 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">6+</div>
                  <div className="text-slate-400 text-sm">Months Experience</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">3</div>
                  <div className="text-slate-400 text-sm">Languages</div>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/30 border-slate-700/50 backdrop-blur-sm text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">4</div>
                  <div className="text-slate-400 text-sm">Years Study</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
