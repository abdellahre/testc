"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Pacifico, Inter } from "next/font/google"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

function ParticleField() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>(
    [],
  )

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-400/20 backdrop-blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

function EnhancedShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-cyan-500/[0.15]",
  glowColor = "cyan",
}: {
  className?: string
  delay?: number
  width?: number
  height?: number
  rotate?: number
  gradient?: string
  glowColor?: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -200,
        rotate: rotate - 20,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
        scale: 1,
      }}
      transition={{
        duration: 3,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.5 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [rotate, rotate + 5, rotate],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[3px] border-2 border-white/[0.2]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.15)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_70%)]",
            "before:absolute before:inset-0 before:rounded-full before:animate-pulse",
            `before:shadow-[0_0_20px_rgba(${glowColor === "cyan" ? "6,182,212" : glowColor === "rose" ? "244,63,94" : glowColor === "violet" ? "139,92,246" : "245,158,11"},0.3)]`,
          )}
        />
        <motion.div
          className="absolute inset-2 rounded-full bg-gradient-to-br from-white/[0.1] to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </motion.div>
  )
}

function FloatingOrb({ delay = 0, size = 60, color = "cyan" }: { delay?: number; size?: number; color?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay }}
      className="absolute"
      style={{
        left: `${20 + Math.random() * 60}%`,
        top: `${20 + Math.random() * 60}%`,
      }}
    >
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8 + Math.random() * 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className={cn(
          "rounded-full backdrop-blur-sm border border-white/20",
          `bg-gradient-to-br from-${color}-400/20 to-${color}-600/20`,
          `shadow-[0_0_30px_rgba(${color === "cyan" ? "6,182,212" : color === "rose" ? "244,63,94" : "139,92,246"},0.4)]`,
        )}
        style={{ width: size, height: size }}
      />
    </motion.div>
  )
}

export default function HeroGeometric({
  badge = "Advanced Chemistry Portfolio",
  title1 = "Molecular",
  title2 = "Innovation",
  subtitle = "Exploring the frontiers of analytical chemistry through cutting-edge research and laboratory excellence",
}: {
  badge?: string
  title1?: string
  title2?: string
  subtitle?: string
}) {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: 0.6 + i * 0.3,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Enhanced Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.08] via-transparent via-transparent to-rose-500/[0.08] blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-tl from-violet-500/[0.06] via-transparent to-amber-500/[0.06] blur-3xl" />

      {/* Particle Field */}
      <ParticleField />

      {/* Enhanced Geometric Shapes */}
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 overflow-hidden">
        <EnhancedShape
          delay={0.3}
          width={700}
          height={160}
          rotate={15}
          gradient="from-cyan-500/[0.2] via-blue-500/[0.15]"
          glowColor="cyan"
          className="left-[-15%] md:left-[-10%] top-[10%] md:top-[15%]"
        />

        <EnhancedShape
          delay={0.5}
          width={600}
          height={140}
          rotate={-18}
          gradient="from-rose-500/[0.2] via-pink-500/[0.15]"
          glowColor="rose"
          className="right-[-10%] md:right-[-5%] top-[65%] md:top-[70%]"
        />

        <EnhancedShape
          delay={0.4}
          width={400}
          height={100}
          rotate={-12}
          gradient="from-violet-500/[0.2] via-purple-500/[0.15]"
          glowColor="violet"
          className="left-[0%] md:left-[5%] bottom-[0%] md:bottom-[5%]"
        />

        <EnhancedShape
          delay={0.6}
          width={300}
          height={80}
          rotate={25}
          gradient="from-amber-500/[0.2] via-yellow-500/[0.15]"
          glowColor="amber"
          className="right-[10%] md:right-[15%] top-[5%] md:top-[10%]"
        />

        <EnhancedShape
          delay={0.7}
          width={200}
          height={50}
          rotate={-30}
          gradient="from-emerald-500/[0.2] via-green-500/[0.15]"
          glowColor="emerald"
          className="left-[15%] md:left-[20%] top-[0%] md:top-[5%]"
        />
      </motion.div>

      {/* Floating Orbs */}
      <motion.div style={{ y: y2 }} className="absolute inset-0">
        <FloatingOrb delay={1} size={80} color="cyan" />
        <FloatingOrb delay={1.5} size={60} color="rose" />
        <FloatingOrb delay={2} size={40} color="violet" />
        <FloatingOrb delay={2.5} size={50} color="amber" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Enhanced Badge */}
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.05] border border-white/[0.15] mb-8 md:mb-12 backdrop-blur-md shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse" />
            <span className={cn("text-sm text-white/80 tracking-wide font-medium", inter.className)}>{badge}</span>
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 animate-pulse" />
          </motion.div>

          {/* Enhanced Title */}
          <motion.div custom={1} variants={fadeUpVariants} initial="hidden" animate="visible">
            <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-6 md:mb-8 tracking-tight leading-none">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white/95 to-white/80 drop-shadow-2xl">
                {title1}
              </span>
              <br />
              <span
                className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 via-violet-300 to-rose-300 animate-pulse",
                  pacifico.className,
                )}
              >
                {title2}
              </span>
            </h1>
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
            <p
              className={cn(
                "text-lg sm:text-xl md:text-2xl text-white/60 mb-12 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-4",
                inter.className,
              )}
            >
              {subtitle}
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold text-lg shadow-[0_8px_32px_0_rgba(6,182,212,0.3)] hover:shadow-[0_12px_40px_0_rgba(6,182,212,0.4)] transition-all duration-300 backdrop-blur-sm border border-white/20"
              >
                <span className="relative z-10">Explore Research</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-white/[0.05] rounded-full text-white font-semibold text-lg border border-white/20 backdrop-blur-md hover:bg-white/[0.1] transition-all duration-300 shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]"
              >
                <span className="relative z-10">View Portfolio</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Overlay Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/90 pointer-events-none" />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
