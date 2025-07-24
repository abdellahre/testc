"use client"

import { useState, useEffect } from "react"
import HeroGeometric from "@/components/kokonutui/hero-geometric"
import Navigation from "@/components/navigation"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import LoadingScreen from "@/components/loading-screen"
import ScrollToTop from "@/components/scroll-to-top"
import SmoothScroll from "@/components/smooth-scroll"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    // Scroll progress tracking
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="relative">
      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-800/50 z-50">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Section with Geometric Background */}
      <section id="home" className="relative">
        <HeroGeometric />
      </section>

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* About Section */}
        <section id="about" className="section-padding">
          <AboutSection />
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-padding bg-slate-900/50">
          <ExperienceSection />
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-padding">
          <SkillsSection />
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-padding bg-slate-900/50">
          <ProjectsSection />
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section-padding">
          <CertificationsSection />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section-padding bg-slate-900/50">
          <TestimonialsSection />
        </section>

        {/* Blog Section */}
        <section id="blog" className="section-padding">
          <BlogSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-slate-900/50">
          <ContactSection />
        </section>
      </main>

      {/* Floating Elements */}
      <ScrollToTop />
      <SmoothScroll />

      {/* Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`particle particle-${(i % 3) + 1} animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
