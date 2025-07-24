"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar, MapPin, CheckCircle } from "lucide-react"

export default function ExperienceSection() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  const responsibilities = [
    "Conducted biochemistry and hematology analyses as part of the clinical diagnostics team",
    "Operated analytical instruments with precision and accuracy",
    "Performed sample preparations following strict laboratory protocols",
    "Ensured accurate data entry and comprehensive reporting",
    "Maintained laboratory equipment and quality control standards",
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
            Work Experience
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Professional experience in medical laboratory analysis and clinical diagnostics
          </p>
        </motion.div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-white/[0.1] backdrop-blur-sm">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl text-white flex items-center gap-2 mb-2">
                    <Building2 className="w-5 h-5 text-cyan-400" />
                    Medical Laboratory Technician
                  </CardTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-white/60">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Ain Bessem Hospital
                    </span>
                    <span className="hidden sm:block">•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />6 Months
                    </span>
                  </div>
                </div>
                <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 bg-emerald-500/10 w-fit">
                  Recent Experience
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-white/70 leading-relaxed">
                Gained valuable hands-on experience in medical laboratory analysis, working as part of a clinical
                diagnostics team to provide accurate and timely results for patient care.
              </p>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Key Responsibilities</h4>
                <div className="grid gap-3">
                  {responsibilities.map((responsibility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70">{responsibility}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/[0.1]">
                <div>
                  <h5 className="font-medium text-white mb-2">Specializations</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-300 bg-cyan-500/10">
                      Biochemistry
                    </Badge>
                    <Badge variant="outline" className="border-violet-500/30 text-violet-300 bg-violet-500/10">
                      Hematology
                    </Badge>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium text-white mb-2">Environment</h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="border-emerald-500/30 text-emerald-300 bg-emerald-500/10">
                      Clinical Diagnostics
                    </Badge>
                    <Badge variant="outline" className="border-amber-500/30 text-amber-300 bg-amber-500/10">
                      Healthcare
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
