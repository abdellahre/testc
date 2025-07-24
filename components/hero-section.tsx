"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Download } from "lucide-react"

export default function HeroSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0f0f]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side - Text content */}
            <div className="text-left">
              {/* Status indicator */}
              <motion.div
                custom={0}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                </div>
                <span className="text-slate-400 text-sm">Available for Opportunities</span>
              </motion.div>

              {/* Main heading */}
              <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-white">Abdellah Recham</h1>
                <h2 className="text-2xl lg:text-3xl font-light mb-8 text-cyan-400">Laboratory Technician</h2>
              </motion.div>

              {/* Description */}
              <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
                <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
                  Bachelor's degree holder in Fundamental Chemistry with hands-on experience in medical laboratory
                  analysis, specializing in biochemistry and hematology.
                </p>
              </motion.div>

              {/* Action buttons */}
              <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-medium px-8 py-3">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent px-8 py-3"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    View Resume
                  </Button>
                </div>
              </motion.div>

              {/* Social links */}
              <motion.div custom={4} variants={fadeUpVariants} initial="hidden" animate="visible">
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:bg-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5 text-slate-400 hover:text-cyan-400" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:bg-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <Mail className="w-5 h-5 text-slate-400 hover:text-cyan-400" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700 flex items-center justify-center hover:bg-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 text-slate-400 hover:text-cyan-400" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right side - Profile image */}
            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md">
                <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-500">
                  <Image
                    src="/images/abdellah-professional.png"
                    alt="Abdellah Recham - Laboratory Technician"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-xl"
                    priority
                  />
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-2xl blur-xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f0f] to-transparent pointer-events-none" />
    </section>
  )
}
