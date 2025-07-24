"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { submitContactForm } from "@/lib/contact-actions"

export default function ContactFormHandler() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setSubmitStatus("success")
        setMessage("Thank you for your message! I'll get back to you soon.")
        // Reset form
        const form = document.getElementById("contact-form") as HTMLFormElement
        form?.reset()
      } else {
        setSubmitStatus("error")
        setMessage(result.message || "Something went wrong. Please try again.")
      }
    } catch (error) {
      setSubmitStatus("error")
      setMessage("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border-white/[0.1] backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl text-white">Send a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form id="contact-form" action={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-white/70 text-sm mb-2 block">Name *</label>
              <Input
                name="name"
                required
                placeholder="Your name"
                className="bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/40"
              />
            </div>
            <div>
              <label className="text-white/70 text-sm mb-2 block">Email *</label>
              <Input
                name="email"
                type="email"
                required
                placeholder="your.email@example.com"
                className="bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/40"
              />
            </div>
          </div>

          <div>
            <label className="text-white/70 text-sm mb-2 block">Subject *</label>
            <Input
              name="subject"
              required
              placeholder="Message subject"
              className="bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/40"
            />
          </div>

          <div>
            <label className="text-white/70 text-sm mb-2 block">Message *</label>
            <Textarea
              name="message"
              required
              placeholder="Your message..."
              rows={5}
              className="bg-white/[0.05] border-white/[0.1] text-white placeholder:text-white/40 resize-none"
            />
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-0 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </>
            )}
          </Button>
        </form>

        {submitStatus !== "idle" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-4 rounded-lg flex items-center gap-2 ${
              submitStatus === "success"
                ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-300"
                : "bg-red-500/10 border border-red-500/20 text-red-300"
            }`}
          >
            {submitStatus === "success" ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            <span className="text-sm">{message}</span>
          </motion.div>
        )}
      </CardContent>
    </Card>
  )
}
