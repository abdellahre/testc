"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Award } from "lucide-react"

export default function ProjectsSection() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  const projects = [
    {
      title: "Clinical Biochemistry Analysis",
      description:
        "Comprehensive biochemical testing and analysis for patient diagnostics, including liver function tests, kidney function panels, and metabolic screenings.",
      image: "/images/lab-photo.png",
      technologies: ["Spectrophotometry", "Automated Analyzers", "Quality Control"],
      category: "Medical Diagnostics",
      duration: "6 Months",
      team: "Clinical Team",
      achievements: [
        "Processed 200+ samples daily",
        "Maintained 99.5% accuracy rate",
        "Reduced turnaround time by 15%",
      ],
    },
    {
      title: "Hematology Laboratory Work",
      description:
        "Complete blood count analysis, blood cell morphology studies, and coagulation testing for comprehensive hematological assessments.",
      image: "/images/chemistry-lab.png",
      technologies: ["Microscopy", "Cell Counting", "Blood Analysis"],
      category: "Hematology",
      duration: "6 Months",
      team: "Laboratory Staff",
      achievements: [
        "Analyzed 150+ blood samples weekly",
        "Identified critical values promptly",
        "Collaborated with medical staff",
      ],
    },
    {
      title: "Laboratory Quality Assurance",
      description:
        "Implementation of quality control measures, calibration procedures, and maintenance of laboratory standards to ensure accurate and reliable results.",
      image: "/images/professional-headshot.png",
      technologies: ["Quality Control", "Calibration", "Documentation"],
      category: "Quality Assurance",
      duration: "Ongoing",
      team: "QA Team",
      achievements: ["Maintained ISO standards", "Zero critical incidents", "Improved workflow efficiency"],
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
            Laboratory Projects
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Key projects and achievements during my laboratory experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-white/[0.1] backdrop-blur-sm h-full group hover:border-white/[0.2] transition-all duration-300">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="outline"
                        className="border-cyan-500/30 text-cyan-300 bg-cyan-500/20 backdrop-blur-sm"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <CardTitle className="text-lg text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </CardTitle>

                  <p className="text-white/70 text-sm leading-relaxed">{project.description}</p>

                  <div className="flex items-center gap-4 text-sm text-white/60">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {project.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {project.team}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-white font-medium mb-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-emerald-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, i) => (
                          <li key={i} className="text-white/60 text-sm flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-medium mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="border-white/20 text-white/70 bg-white/[0.05] text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
