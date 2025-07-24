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

// Validate email format
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Validate form data
export function validateContactForm(data: ContactFormData): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name.trim()) {
    errors.push("Name is required")
  }

  if (!data.email.trim()) {
    errors.push("Email is required")
  } else if (!validateEmail(data.email)) {
    errors.push("Please enter a valid email address")
  }

  if (!data.subject.trim()) {
    errors.push("Subject is required")
  }

  if (!data.message.trim()) {
    errors.push("Message is required")
  } else if (data.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long")
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

// Simulate form submission (replace with actual service integration)
export async function submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Validate data
  const validation = validateContactForm(data)

  if (!validation.isValid) {
    return {
      success: false,
      message: validation.errors.join(", "),
    }
  }

  // In a real implementation, you would integrate with:
  // - Formspree: https://formspree.io/
  // - EmailJS: https://www.emailjs.com/
  // - Netlify Forms: https://www.netlify.com/products/forms/
  // - Or your own backend API

  return {
    success: true,
    message: "Thank you for your message! I will get back to you soon.",
  }
}
