"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, Mail, Phone, Linkedin } from "lucide-react"

function FloatingElement({
  className,
  delay = 0,
  children,
}: {
  className?: string
  delay?: number
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, rotate: -10 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{
        duration: 2,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default function HeroSection() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.05] via-transparent to-emerald-500/[0.05] blur-3xl" />

      {/* Floating scientific elements */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingElement delay={0.3} className="left-[5%] top-[15%]">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-transparent border border-cyan-500/30 backdrop-blur-sm flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-cyan-400/40" />
          </div>
        </FloatingElement>

        <FloatingElement delay={0.5} className="right-[10%] top-[20%]">
          <div className="w-12 h-20 bg-gradient-to-b from-emerald-500/20 to-transparent border border-emerald-500/30 backdrop-blur-sm rounded-t-full" />
        </FloatingElement>

        <FloatingElement delay={0.7} className="left-[15%] bottom-[20%]">
          <div className="w-14 h-14 border-2 border-violet-500/30 rounded-full bg-violet-500/10 backdrop-blur-sm" />
        </FloatingElement>

        <FloatingElement delay={0.9} className="right-[5%] bottom-[15%]">
          <div className="w-10 h-16 bg-gradient-to-t from-amber-500/20 to-transparent border border-amber-500/30 backdrop-blur-sm rounded-b-full" />
        </FloatingElement>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="text-center lg:text-left">
              <motion.div
                custom={0}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6"
              >
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm text-white/60 tracking-wide">Available for Opportunities</span>
              </motion.div>

              <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                    Abdellah Recham
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-white/90 to-emerald-300">
                  Laboratory Technician
                </h2>
              </motion.div>

              <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
                <p className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Bachelor's degree holder in Fundamental Chemistry with hands-on experience in medical laboratory
                  analysis, specializing in biochemistry and hematology.
                </p>
              </motion.div>

              <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-0"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                  >
                    View Resume
                  </Button>
                </div>
              </motion.div>

              <motion.div custom={4} variants={fadeUpVariants} initial="hidden" animate="visible">
                <div className="flex gap-4 justify-center lg:justify-start">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.1] transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-white/60" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.1] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white/60" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center hover:bg-white/[0.1] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-white/60" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right side - Profile image */}
            <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible" className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-2xl blur-2xl" />
                <div className="relative bg-gradient-to-br from-white/[0.05] to-white/[0.02] backdrop-blur-sm border border-white/[0.1] rounded-2xl p-6">
                  <Image
                    src="/images/professional-headshot.png"
                    alt="Abdellah Recham - Laboratory Technician"
                    width={400}
                    height={400}
                    className="w-full h-auto rounded-xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-sm">Scroll to explore</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent pointer-events-none" />
    </section>
  )
}
