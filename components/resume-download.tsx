"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Eye } from "lucide-react"

export default function ResumeDownload() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-gray-900/20 to-[#030303]">
      <div className="container mx-auto max-w-4xl">
        <motion.div variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Card className="bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-white/[0.15] backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-cyan-400" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Download My Resume</h3>

              <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                Get a comprehensive overview of my education, experience, and skills in a professionally formatted PDF
                document.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-0"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF Resume
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 bg-transparent"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Preview Resume
                </Button>
              </div>

              <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-white/[0.1]">
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">PDF Format</div>
                  <div className="text-white/60 text-sm">Professional Layout</div>
                </div>
                <div className="w-px h-8 bg-white/[0.1]" />
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">Updated 2024</div>
                  <div className="text-white/60 text-sm">Latest Information</div>
                </div>
                <div className="w-px h-8 bg-white/[0.1]" />
                <div className="text-center">
                  <div className="text-lg font-semibold text-white">2 Pages</div>
                  <div className="text-white/60 text-sm">Comprehensive Details</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
