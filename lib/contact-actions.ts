// Client-side contact form handler for static export
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
}

export async function submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
  // Simulate form processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Basic validation
  if (!data.name || !data.email || !data.subject || !data.message) {
    return {
      success: false,
      message: "All fields are required.",
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  // For static export, we'll use a third-party service like Formspree, Netlify Forms, or EmailJS
  // This is a mock implementation that simulates success
  console.log("Contact form submission:", {
    ...data,
    timestamp: new Date().toISOString(),
  })

  // In a real static site, you would integrate with:
  // 1. Formspree: https://formspree.io/
  // 2. EmailJS: https://www.emailjs.com/
  // 3. Netlify Forms: https://www.netlify.com/products/forms/
  // 4. Getform: https://getform.io/

  return {
    success: true,
    message: "Message sent successfully! I'll get back to you soon.",
  }
}
