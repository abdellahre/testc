// Client-side contact form utilities
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

// Simulate form submission (replace with actual service integration)
export async function submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Basic validation
  if (!data.name || !data.email || !data.message) {
    return {
      success: false,
      message: "Please fill in all required fields.",
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

  // Simulate successful submission
  console.log("Contact form submitted:", data)

  return {
    success: true,
    message: `Thank you ${data.name}! Your message has been received. I'll get back to you soon.`,
  }
}

// For integration with third-party services like Formspree
export function getFormspreeAction(formId: string): string {
  return `https://formspree.io/f/${formId}`
}

// For EmailJS integration
export async function sendEmailJS(data: ContactFormData): Promise<ContactFormResponse> {
  try {
    // This would integrate with EmailJS service
    // emailjs.send('service_id', 'template_id', data, 'public_key')

    return {
      success: true,
      message: "Message sent successfully via EmailJS!",
    }
  } catch (error) {
    return {
      success: false,
      message: "Failed to send message. Please try again.",
    }
  }
}
