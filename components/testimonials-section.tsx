"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote, Star } from "lucide-react"

export default function TestimonialsSection() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  const testimonials = [
    {
      name: "Dr. Sarah Benali",
      role: "Chief Laboratory Director",
      company: "Ain Bessem Hospital",
      content:
        "Abdellah demonstrated exceptional attention to detail and professionalism during his time with us. His analytical skills and dedication to accuracy made him a valuable member of our diagnostic team.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Prof. Ahmed Khelifi",
      role: "Chemistry Department Head",
      company: "University of Bouira",
      content:
        "As Abdellah's professor, I witnessed his strong foundation in analytical chemistry and his ability to apply theoretical knowledge to practical laboratory work. He consistently showed excellent problem-solving skills.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Fatima Zerrouki",
      role: "Senior Laboratory Technician",
      company: "Ain Bessem Hospital",
      content:
        "Working alongside Abdellah was a pleasure. He quickly adapted to our laboratory protocols and showed great enthusiasm for learning new techniques. His computer skills were particularly helpful in data management.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-gray-900/20 to-[#030303]">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-emerald-300">
            Professional References
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            What colleagues and supervisors say about my work and professional conduct
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-white/[0.1] backdrop-blur-sm h-full group hover:border-white/[0.2] transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <Quote className="w-8 h-8 text-cyan-400/60" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-white/80 leading-relaxed italic">"{testimonial.content}"</p>

                  <div className="flex items-center gap-4 pt-4 border-t border-white/[0.1]">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 text-white">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-white font-medium">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">{testimonial.role}</p>
                      <p className="text-white/40 text-xs">{testimonial.company}</p>
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
