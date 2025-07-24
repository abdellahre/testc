"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import HeroGeometric from "@/components/kokonutui/hero-geometric"
import Navigation from "@/components/navigation"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import LoadingScreen from "@/components/loading-screen"
import ScrollToTop from "@/components/scroll-to-top"
import SmoothScroll from "@/components/smooth-scroll"
import ResumeDownload from "@/components/resume-download"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [currentSection, setCurrentSection] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(index)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <SmoothScroll />

      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-rose-500/5 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-tl from-violet-500/5 via-transparent to-amber-500/5 blur-3xl" />

        {/* Animated background particles */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(244, 63, 94, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.1) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute inset-0"
        />
      </div>

      <Navigation />

      {/* Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 z-50 origin-left"
        style={{
          scaleX:
            typeof window !== "undefined"
              ? window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
              : 0,
        }}
      />

      {/* Section Navigation Dots */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col space-y-4">
          {Array.from({ length: 9 }).map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                currentSection === index
                  ? "bg-cyan-500 border-cyan-500 shadow-lg shadow-cyan-500/50"
                  : "bg-transparent border-white/30 hover:border-white/60"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const sections = document.querySelectorAll("section")
                sections[index]?.scrollIntoView({ behavior: "smooth" })
              }}
            />
          ))}
        </div>
      </div>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Enhanced Hero with Geometric Background */}
            <section className="relative">
              <HeroGeometric
                badge="Advanced Chemistry Portfolio"
                title1="Molecular"
                title2="Innovation"
                subtitle="Exploring the frontiers of analytical chemistry through cutting-edge research and laboratory excellence"
              />
            </section>

            {/* Content Sections with Enhanced Styling */}
            <div className="relative">
              <section id="about" className="section-padding">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <AboutSection />
                  </motion.div>
                </div>
              </section>

              <section id="skills" className="section-padding bg-white/[0.02]">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <SkillsSection />
                  </motion.div>
                </div>
              </section>

              <section id="experience" className="section-padding">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <ExperienceSection />
                  </motion.div>
                </div>
              </section>

              <section id="projects" className="section-padding bg-white/[0.02]">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <ProjectsSection />
                  </motion.div>
                </div>
              </section>

              <section id="certifications" className="section-padding">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <CertificationsSection />
                  </motion.div>
                </div>
              </section>

              <section id="testimonials" className="section-padding bg-white/[0.02]">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <TestimonialsSection />
                  </motion.div>
                </div>
              </section>

              <section id="blog" className="section-padding">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <BlogSection />
                  </motion.div>
                </div>
              </section>

              <section id="contact" className="section-padding bg-white/[0.02]">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <ContactSection />
                  </motion.div>
                </div>
              </section>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative bg-slate-950/80 backdrop-blur-md border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-white/60 text-sm">© 2024 Abdellah Lamrani Alaoui. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <motion.a
                href="#"
                className="text-white/60 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                LinkedIn
              </motion.a>
              <motion.a
                href="#"
                className="text-white/60 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                GitHub
              </motion.a>
              <motion.a
                href="#"
                className="text-white/60 hover:text-cyan-400 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ResearchGate
              </motion.a>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
      <ResumeDownload />
    </div>
  )
}
