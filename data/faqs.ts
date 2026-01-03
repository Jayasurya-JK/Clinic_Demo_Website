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
  },
  {
    id: '5',
    question: 'Do you offer emergency services?',
    answer: 'While we are not an emergency room, we do accommodate urgent ENT issues during business hours whenever possible. For true medical emergencies, please call 911 or visit your nearest emergency room. You can call our office for guidance on whether your situation requires emergency care or can wait for an urgent appointment.',
    category: 'general'
  },
  {
    id: '6',
    question: 'How long will my appointment take?',
    answer: 'Initial consultations typically last 45-60 minutes, as we take time to thoroughly understand your concerns and perform a comprehensive examination. Follow-up visits are usually 15-30 minutes. Procedures and testing may require additional time, which will be explained when scheduling.',
    category: 'appointments'
  },
  {
    id: '7',
    question: 'Can I see the same doctor for follow-up visits?',
    answer: 'Yes, we encourage continuity of care and will schedule your follow-up appointments with the same physician whenever possible. If your regular doctor is unavailable and you have an urgent issue, any of our board-certified specialists can provide excellent care.',
    category: 'appointments'
  },
  {
    id: '8',
    question: 'Do you see children?',
    answer: 'Yes, we treat patients of all ages from infants to seniors. Dr. Michael Chen specializes in pediatric ENT care and is especially skilled at working with children. We\'ve created a comfortable, child-friendly environment to make visits as stress-free as possible for young patients and their families.',
    category: 'general'
  },
  {
    id: '9',
    question: 'How do I get my test results?',
    answer: 'Test results are typically available within a few days. We will contact you by phone to discuss results and next steps. You can also access your results through our patient portal once they\'re ready. For imaging studies ordered at outside facilities, please allow additional time for the reports to be sent to our office.',
    category: 'general'
  },
  {
    id: '10',
    question: 'What is your cancellation policy?',
    answer: 'We require at least 24 hours notice for appointment cancellations or rescheduling. This allows us to offer the time slot to other patients who need care. Late cancellations or no-shows may result in a fee. We understand emergencies happen, so please call us if you need to cancel for an urgent reason.',
    category: 'appointments'
  },
  {
    id: '11',
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment plans for patients who need assistance with medical costs. We work with several healthcare financing companies and can discuss options that fit your budget. Please speak with our billing department to learn more about available payment arrangements.',
    category: 'billing'
  },
  {
    id: '12',
    question: 'Can I get a prescription refill without an appointment?',
    answer: 'Prescription refills may be authorized without an appointment if you\'ve been seen recently and the medication is for an ongoing condition being actively managed by our physicians. However, controlled substances and new symptoms require an office visit. Please call our office at least 48 hours before you run out of medication.',
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
