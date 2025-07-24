"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

export default function BlogSection() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  const blogPosts = [
    {
      id: 1,
      title: "Modern Laboratory Techniques in Medical Diagnostics",
      excerpt:
        "Exploring the latest advancements in laboratory automation and their impact on diagnostic accuracy and efficiency in modern healthcare settings.",
      content: "Full article content would go here...",
      author: "Abdellah Recham",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "Medical Laboratory",
      image: "/images/lab-photo.png",
      tags: ["Diagnostics", "Automation", "Healthcare", "Laboratory"],
    },
    {
      id: 2,
      title: "Quality Control in Biochemistry Analysis",
      excerpt:
        "Understanding the critical importance of quality control measures in biochemical testing and how they ensure reliable patient results.",
      content: "Full article content would go here...",
      author: "Abdellah Recham",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "Biochemistry",
      image: "/images/chemistry-lab.png",
      tags: ["Quality Control", "Biochemistry", "Standards", "Testing"],
    },
    {
      id: 3,
      title: "Career Transition: From Chemistry Student to Lab Professional",
      excerpt:
        "My journey from university chemistry studies to working as a medical laboratory technician, including challenges and key learnings.",
      content: "Full article content would go here...",
      author: "Abdellah Recham",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "Career",
      image: "/images/professional-headshot.png",
      tags: ["Career", "Education", "Professional Development", "Chemistry"],
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
            Latest Insights
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Sharing knowledge and experiences from the laboratory and professional development journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
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
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="outline"
                        className="border-cyan-500/30 text-cyan-300 bg-cyan-500/20 backdrop-blur-sm"
                      >
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <CardTitle className="text-lg text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>

                  <p className="text-white/70 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-xs text-white/60">
                    <span className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="border-white/20 text-white/70 bg-white/[0.05] text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-cyan-300 hover:text-cyan-200 hover:bg-cyan-500/10 p-0 h-auto justify-start"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 bg-transparent">
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
