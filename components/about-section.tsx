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
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-[#030303] to-gray-900/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-emerald-300">
            About Me
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
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
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-xl" />
              <Card className="relative bg-white/[0.02] border-white/[0.1] backdrop-blur-sm">
                <CardContent className="p-6">
                  <Image
                    src="/images/lab-photo.png"
                    alt="Abdellah in laboratory setting"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/[0.02] border-white/[0.1] backdrop-blur-sm">
                <CardContent className="p-4">
                  <Image
                    src="/images/chemistry-lab.png"
                    alt="Chemistry laboratory work"
                    width={250}
                    height={200}
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
              <div className="flex flex-col justify-center space-y-4">
                <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 bg-cyan-500/10">
                  6 Months Experience
                </Badge>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 bg-emerald-500/10">
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
              <p className="text-white/70 leading-relaxed">
                As a dedicated Laboratory Technician with a Bachelor's degree in Fundamental Chemistry, I bring a strong
                foundation in analytical and physical chemistry, combined with practical experience in medical
                laboratory analysis.
              </p>
              <p className="text-white/70 leading-relaxed">
                My expertise spans biochemistry and hematology, with hands-on experience in conducting clinical
                diagnostics, operating analytical instruments, and ensuring accurate data reporting in healthcare
                settings.
              </p>
            </div>

            <Card className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-white/[0.1] backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-cyan-400" />
                  Education
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-white">Bachelor's in Fundamental Chemistry</h5>
                    <p className="text-white/60 text-sm flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4" />
                      University of Bouira Akli Mohand Oulhadj
                    </p>
                    <p className="text-white/60 text-sm flex items-center gap-2 mt-1">
                      <Calendar className="w-4 h-4" />
                      2020 - 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <Card className="bg-white/[0.02] border-white/[0.1] backdrop-blur-sm text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">6+</div>
                  <div className="text-white/60 text-sm">Months Experience</div>
                </CardContent>
              </Card>
              <Card className="bg-white/[0.02] border-white/[0.1] backdrop-blur-sm text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-emerald-400 mb-1">3</div>
                  <div className="text-white/60 text-sm">Languages</div>
                </CardContent>
              </Card>
              <Card className="bg-white/[0.02] border-white/[0.1] backdrop-blur-sm text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-violet-400 mb-1">4</div>
                  <div className="text-white/60 text-sm">Years Study</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
