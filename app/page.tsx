import LoadingScreen from "@/components/loading-screen"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import CertificationsSection from "@/components/certifications-section"
import BlogSection from "@/components/blog-section"
import TestimonialsSection from "@/components/testimonials-section"
import ResumeDownload from "@/components/resume-download"
import ContactSection from "@/components/contact-section"
import SmoothScroll from "@/components/smooth-scroll"
import ScrollToTop from "@/components/scroll-to-top"

export default function Portfolio() {
  return (
    <>
      <LoadingScreen />
      <main className="min-h-screen bg-[#030303]">
        <SmoothScroll />
        <Navigation />
        <section id="home">
          <HeroSection />
        </section>
        <section id="about">
          <AboutSection />
        </section>
        <section id="experience">
          <ExperienceSection />
        </section>
        <section id="projects">
          <ProjectsSection />
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <CertificationsSection />
        <section id="blog">
          <BlogSection />
        </section>
        <TestimonialsSection />
        <ResumeDownload />
        <section id="contact">
          <ContactSection />
        </section>
        <ScrollToTop />
      </main>
    </>
  )
}
