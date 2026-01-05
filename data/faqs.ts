/**
 * FAQ Data
 * 
 * Frequently Asked Questions for the clinic.
 * Update this file to add, remove, or modify FAQs.
 */

export interface FAQ {
  id: string
  question: string
  answer: string
  category: 'general' | 'appointments' | 'insurance' | 'procedures' | 'billing'
}

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept most major insurance plans including Medicare and Medicaid. Please contact our office with your insurance information, and we\'ll verify your coverage before your appointment. We also offer self-pay options and payment plans for those without insurance.',
    category: 'insurance'
  },
  {
    id: '2',
    question: 'What should I bring to my first appointment?',
    answer: 'Please bring a valid photo ID, your insurance card(s), a list of current medications and supplements, any relevant medical records from previous providers, and a list of questions or concerns you\'d like to discuss. If you\'ve had recent imaging studies (X-rays, CT scans, MRI), please bring those reports or have them sent to our office in advance.',
    category: 'appointments'
  },
  {
    id: '3',
    question: 'How do I prepare for surgery?',
    answer: 'Preparation varies by procedure, but generally includes: stopping certain medications (especially blood thinners) as directed, fasting before surgery, arranging transportation home, and filling any prescribed post-operative medications in advance. You\'ll receive detailed written instructions specific to your procedure during your pre-operative visit.',
    category: 'procedures'
  },
  {
    id: '4',
    question: 'What are your office hours?',
    answer: 'We are open Monday through Friday from 9:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 2:00 PM. We are closed on Sundays. We also offer some early morning and evening appointments for patients who need flexible scheduling. Same-day appointments may be available for urgent issues.',
    category: 'general'
  }
]

/**
 * Get FAQs by category
 */
export function getFAQsByCategory(category: FAQ['category']): FAQ[] {
  return faqs.filter(faq => faq.category === category)
}

/**
 * Get FAQ categories
 */
export function getFAQCategories(): { value: FAQ['category']; label: string }[] {
  return [
    { value: 'general', label: 'General' },
    { value: 'appointments', label: 'Appointments' },
    { value: 'insurance', label: 'Insurance & Billing' },
    { value: 'procedures', label: 'Procedures' },
    { value: 'billing', label: 'Billing & Payments' }
  ]
}
