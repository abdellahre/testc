"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, CheckCircle, BookOpen } from "lucide-react"

export default function CertificationsSection() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  const certifications = [
    {
      title: "Bachelor's Degree in Fundamental Chemistry",
      issuer: "University of Bouira Akli Mohand Oulhadj",
      date: "2024",
      status: "Completed",
      description:
        "Comprehensive study of analytical and physical chemistry, laboratory techniques, and data interpretation.",
      skills: ["Analytical Chemistry", "Physical Chemistry", "Laboratory Techniques", "Data Analysis"],
      icon: Award,
      color: "text-cyan-400",
    },
    {
      title: "Medical Laboratory Technician Certification",
      issuer: "Ain Bessem Hospital",
      date: "2024",
      status: "Completed",
      description: "Practical training and certification in medical laboratory analysis, biochemistry, and hematology.",
      skills: ["Biochemistry", "Hematology", "Clinical Diagnostics", "Quality Control"],
      icon: CheckCircle,
      color: "text-emerald-400",
    },
    {
      title: "Laboratory Safety and Quality Assurance",
      issuer: "Professional Development",
      date: "2024",
      status: "In Progress",
      description: "Advanced training in laboratory safety protocols, quality assurance, and regulatory compliance.",
      skills: ["Safety Protocols", "Quality Assurance", "Regulatory Compliance", "Risk Management"],
      icon: BookOpen,
      color: "text-violet-400",
    },
  ]

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Graduated with distinction in Fundamental Chemistry",
      icon: Award,
      color: "text-amber-400",
    },
    {
      title: "Laboratory Proficiency",
      description: "Demonstrated expertise in multiple analytical techniques",
      icon: CheckCircle,
      color: "text-emerald-400",
    },
    {
      title: "Professional Development",
      description: "Continuous learning and skill enhancement",
      icon: BookOpen,
      color: "text-cyan-400",
    },
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
            Certifications & Achievements
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Professional qualifications and continuous learning journey
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Certifications */}
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={fadeInVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-white/[0.1] backdrop-blur-sm group hover:border-white/[0.2] transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <cert.icon className={`w-6 h-6 ${cert.color}`} />
                        <div>
                          <CardTitle className="text-lg text-white group-hover:text-cyan-300 transition-colors">
                            {cert.title}
                          </CardTitle>
                          <p className="text-white/60 text-sm">{cert.issuer}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge
                          variant="outline"
                          className={
                            cert.status === "Completed"
                              ? "border-emerald-500/30 text-emerald-300 bg-emerald-500/10"
                              : "border-amber-500/30 text-amber-300 bg-amber-500/10"
                          }
                        >
                          {cert.status}
                        </Badge>
                        <p className="text-white/40 text-xs mt-1 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {cert.date}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-white/70 text-sm leading-relaxed">{cert.description}</p>
                    <div>
                      <h4 className="text-white font-medium mb-2 text-sm">Key Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="border-white/20 text-white/70 bg-white/[0.05] text-xs"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Achievements */}
          <motion.div variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <Card className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-white/[0.1] backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-400" />
                  Key Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/[0.05]"
                  >
                    <achievement.icon className={`w-6 h-6 ${achievement.color} mt-1`} />
                    <div>
                      <h4 className="text-white font-medium mb-1">{achievement.title}</h4>
                      <p className="text-white/60 text-sm">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}

                <div className="pt-6 border-t border-white/[0.1]">
                  <h4 className="text-white font-medium mb-4">Professional Goals</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full" />
                      <span className="text-white/70 text-sm">Advance in petroleum industry applications</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                      <span className="text-white/70 text-sm">
                        Pursue advanced certifications in analytical chemistry
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-violet-400 rounded-full" />
                      <span className="text-white/70 text-sm">Contribute to research and development projects</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
