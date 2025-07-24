// Client-side contact form utilities
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message: string;
}

// Simulate form submission (replace with actual service integration)
export async function submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Basic validation
  if (!data.name || !data.email || !data.message) {
    return {
      success: false,
      message: 'Please fill in all required fields.'
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.'
    };
  }

  // In a real application, you would integrate with:
  // - Formspree: https://formspree.io/
  // - EmailJS: https://www.emailjs.com/
  // - Netlify Forms: https://www.netlify.com/products/forms/
  // - Getform: https://getform.io/
  
  console.log('Contact form submission:', data);
  
  return {
    success: true,
    message: 'Thank you for your message! I\'ll get back to you soon.'
  };
}

// For integration with Formspree (recommended)
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

// For integration with EmailJS
export const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY'
};
