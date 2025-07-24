"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  opacity: number
}

interface GeometricShape {
  x: number
  y: number
  rotation: number
  scale: number
  type: "triangle" | "square" | "hexagon" | "circle"
  color: string
}

export default function HeroGeometric() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])
  const [shapes, setShapes] = useState<GeometricShape[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize particles
    const initParticles = () => {
      const newParticles: Particle[] = []
      const colors = ["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899", "#10b981"]

      for (let i = 0; i < 50; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 3 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.3,
        })
      }
      setParticles(newParticles)
    }

    // Initialize geometric shapes
    const initShapes = () => {
      const newShapes: GeometricShape[] = []
      const types: GeometricShape["type"][] = ["triangle", "square", "hexagon", "circle"]
      const colors = ["#06b6d4", "#3b82f6", "#8b5cf6", "#ec4899"]

      for (let i = 0; i < 8; i++) {
        newShapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          rotation: Math.random() * Math.PI * 2,
          scale: Math.random() * 0.5 + 0.5,
          type: types[Math.floor(Math.random() * types.length)],
          color: colors[Math.floor(Math.random() * colors.length)],
        })
      }
      setShapes(newShapes)
    }

    initParticles()
    initShapes()

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      gradient.addColorStop(0, "rgba(15, 23, 42, 0.8)")
      gradient.addColorStop(0.5, "rgba(30, 41, 59, 0.6)")
      gradient.addColorStop(1, "rgba(15, 23, 42, 0.8)")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          // Update position
          particle.x += particle.vx
          particle.y += particle.vy

          // Bounce off edges
          if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1
          if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1

          // Mouse interaction
          const dx = mousePosition.x - particle.x
          const dy = mousePosition.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const force = (100 - distance) / 100
            particle.vx += (dx / distance) * force * 0.01
            particle.vy += (dy / distance) * force * 0.01
          }

          // Draw particle
          ctx.save()
          ctx.globalAlpha = particle.opacity
          ctx.fillStyle = particle.color
          ctx.shadowBlur = 10
          ctx.shadowColor = particle.color
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()

          return particle
        }),
      )

      // Update and draw geometric shapes
      setShapes((prevShapes) =>
        prevShapes.map((shape) => {
          shape.rotation += 0.005

          ctx.save()
          ctx.translate(shape.x, shape.y)
          ctx.rotate(shape.rotation)
          ctx.scale(shape.scale, shape.scale)
          ctx.globalAlpha = 0.3
          ctx.strokeStyle = shape.color
          ctx.lineWidth = 2
          ctx.shadowBlur = 15
          ctx.shadowColor = shape.color

          const size = 30

          switch (shape.type) {
            case "triangle":
              ctx.beginPath()
              ctx.moveTo(0, -size)
              ctx.lineTo(-size * 0.866, size * 0.5)
              ctx.lineTo(size * 0.866, size * 0.5)
              ctx.closePath()
              ctx.stroke()
              break
            case "square":
              ctx.strokeRect(-size / 2, -size / 2, size, size)
              break
            case "hexagon":
              ctx.beginPath()
              for (let i = 0; i < 6; i++) {
                const angle = (i * Math.PI) / 3
                const x = size * Math.cos(angle)
                const y = size * Math.sin(angle)
                if (i === 0) ctx.moveTo(x, y)
                else ctx.lineTo(x, y)
              }
              ctx.closePath()
              ctx.stroke()
              break
            case "circle":
              ctx.beginPath()
              ctx.arc(0, 0, size / 2, 0, Math.PI * 2)
              ctx.stroke()
              break
          }

          ctx.restore()
          return shape
        }),
      )

      // Draw connecting lines between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.save()
            ctx.globalAlpha = ((150 - distance) / 150) * 0.2
            ctx.strokeStyle = "#06b6d4"
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
            ctx.restore()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition, particles, shapes])

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Canvas Background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} />

      {/* Floating Orbs */}
      <div className="absolute inset-0" style={{ zIndex: 2 }}>
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-amber-400/20 to-orange-400/20 rounded-full blur-xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* Animated Title */}
          <div className="mb-8 animate-bounce-in">
            <h1 className="heading-primary gradient-text mb-6">Abdellah Ait Baha</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-8 rounded-full animate-pulse-glow"></div>
          </div>

          {/* Subtitle with Typewriter Effect */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white/90 mb-4">
              Analytical Chemist & Laboratory Specialist
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Transforming complex chemical analyses into actionable insights through precision, innovation, and
              cutting-edge laboratory techniques.
            </p>
          </div>

          {/* Enhanced Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button className="btn-primary group">
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </Button>
            <Button variant="outline" className="btn-secondary bg-transparent">
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Molecular Structure Overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        {/* Benzene Ring */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 opacity-20">
          <div className="relative w-full h-full animate-rotate">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-cyan-400 rounded-full"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-50px)`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Water Molecule */}
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 opacity-20">
          <div className="relative w-full h-full animate-float">
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-red-400 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full"></div>
            <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
