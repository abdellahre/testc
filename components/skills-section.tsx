"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Microscope, Computer, Globe } from "lucide-react"

export default function SkillsSection() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  const technicalSkills = [
    { name: "Spectrophotometry", level: 90 },
    { name: "Centrifugation & Sample Preparation", level: 85 },
    { name: "Laboratory Techniques", level: 88 },
    { name: "Data Analysis", level: 80 },
  ]

  const computerSkills = [
    "MS Office Suite",
    "Data Entry Tools",
    "Laboratory Information Systems",
    "Statistical Analysis Software",
  ]

  const languages = [
    { name: "Arabic", level: "Native", percentage: 100 },
    { name: "English", level: "Intermediate", percentage: 70 },
    { name: "French", level: "Intermediate", percentage: 65 },
  ]

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
            Skills & Expertise
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Technical proficiencies and competencies developed through education and professional experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Technical Skills */}
          <motion.div variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-white/[0.1] backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Microscope className="w-5 h-5 text-cyan-400" />
                  Laboratory Techniques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-medium">{skill.name}</span>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2 bg-white/[0.1]" />
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Computer Skills */}
          <motion.div variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-white/[0.1] backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Computer className="w-5 h-5 text-emerald-400" />
                  Computer Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {computerSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge
                        variant="outline"
                        className="border-emerald-500/30 text-emerald-300 bg-emerald-500/10 w-full justify-center py-2"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Languages */}
          <motion.div
            variants={fadeInVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-white/[0.1] backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Globe className="w-5 h-5 text-violet-400" />
                  Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {languages.map((language, index) => (
                    <motion.div
                      key={language.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center space-y-3"
                    >
                      <div className="relative w-20 h-20 mx-auto">
                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="rgba(255,255,255,0.1)"
                            strokeWidth="2"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke={index === 0 ? "#8b5cf6" : index === 1 ? "#06b6d4" : "#10b981"}
                            strokeWidth="2"
                            strokeDasharray={`${language.percentage}, 100`}
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white font-semibold text-sm">{language.percentage}%</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">{language.name}</h4>
                        <p className="text-white/60 text-sm">{language.level}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
