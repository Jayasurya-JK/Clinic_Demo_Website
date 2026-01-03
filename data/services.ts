/**
 * Services Data
 * 
 * Contains information about all medical services offered.
 * Update this file to add, remove, or modify service information.
 */

import { images } from '@/config/images'

export interface Service {
  id: string
  slug: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  icon: string
  whatToExpect: string[]
  treatmentProcess: {
    step: number
    title: string
    description: string
  }[]
  beforeCare: string[]
  afterCare: string[]
  duration: string
  recovery: string
  faqs: {
    question: string
    answer: string
  }[]
  relatedServices: string[]
}

export const services: Service[] = [
  {
    id: '1',
    slug: 'ear-care',
    title: 'Ear Care',
    shortDescription: 'Treatment for ear infections, hearing loss, tinnitus, and balance disorders with advanced diagnostic tools.',
    fullDescription: 'Our comprehensive ear care services address a wide range of conditions affecting the ear, from simple infections to complex hearing and balance disorders. Using state-of-the-art diagnostic equipment and evidence-based treatment approaches, we provide personalized care for patients of all ages.',
    image: images.services.earCare,
    icon: 'ear',
    whatToExpect: [
      'Thorough medical history review',
      'Comprehensive ear examination using otoscopy',
      'Hearing tests if necessary (audiometry)',
      'Balance assessment when indicated',
      'Discussion of findings and treatment options',
      'Personalized treatment plan'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'We begin with a detailed discussion of your symptoms, medical history, and any previous treatments.'
      },
      {
        step: 2,
        title: 'Diagnostic Testing',
        description: 'Comprehensive examination including otoscopy, tympanometry, and audiometry as needed.'
      },
      {
        step: 3,
        title: 'Treatment Planning',
        description: 'Based on diagnosis, we create a customized treatment plan which may include medication, procedures, or surgery.'
      },
      {
        step: 4,
        title: 'Treatment Implementation',
        description: 'Execute the treatment plan with regular monitoring and adjustments as needed.'
      },
      {
        step: 5,
        title: 'Follow-up Care',
        description: 'Scheduled follow-up visits to ensure optimal recovery and address any concerns.'
      }
    ],
    beforeCare: [
      'Avoid inserting objects into your ear',
      'Keep your ear dry if experiencing drainage',
      'List all current medications',
      'Note when symptoms started and any triggers',
      'Bring previous medical records if available'
    ],
    afterCare: [
      'Follow prescribed medication schedule exactly',
      'Keep ear dry as instructed',
      'Avoid swimming or water exposure as directed',
      'Attend all follow-up appointments',
      'Report any worsening symptoms immediately',
      'Avoid loud noise exposure'
    ],
    duration: '30-45 minutes',
    recovery: 'Varies by condition and treatment',
    faqs: [
      {
        question: 'How long does an ear infection take to heal?',
        answer: 'Most ear infections improve within 2-3 days with proper treatment, though complete healing may take 1-2 weeks.'
      },
      {
        question: 'When should I see an ENT specialist for ear problems?',
        answer: 'See a specialist if you have persistent ear pain, hearing loss, recurrent infections, dizziness, or tinnitus lasting more than a few days.'
      },
      {
        question: 'Can hearing loss be reversed?',
        answer: 'It depends on the cause. Some types of hearing loss (like conductive hearing loss) can be treated, while others (like age-related) may require hearing aids.'
      }
    ],
    relatedServices: ['hearing-balance', 'allergy']
  },
  {
    id: '2',
    slug: 'nose-sinus',
    title: 'Nose & Sinus Treatment',
    shortDescription: 'Expert treatment for sinusitis, nasal congestion, allergies, and breathing difficulties.',
    fullDescription: 'We provide comprehensive care for all nasal and sinus conditions, from acute sinusitis to chronic rhinosinusitis requiring surgical intervention. Our team uses advanced imaging and minimally invasive techniques to restore normal breathing and sinus function.',
    image: images.services.noseSinus,
    icon: 'nose',
    whatToExpect: [
      'Complete nasal and sinus examination',
      'Nasal endoscopy (camera examination)',
      'CT scan if chronic sinusitis suspected',
      'Allergy testing when appropriate',
      'Discussion of medical and surgical options',
      'Treatment plan tailored to your condition'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Evaluation',
        description: 'Comprehensive assessment of your nasal and sinus symptoms, including nasal endoscopy.'
      },
      {
        step: 2,
        title: 'Imaging',
        description: 'CT scan of sinuses to evaluate extent of disease and plan treatment approach.'
      },
      {
        step: 3,
        title: 'Medical Management',
        description: 'Trial of medications including antibiotics, steroids, and nasal sprays.'
      },
      {
        step: 4,
        title: 'Surgical Intervention',
        description: 'If needed, minimally invasive endoscopic sinus surgery to restore drainage.'
      },
      {
        step: 5,
        title: 'Recovery & Maintenance',
        description: 'Post-operative care and long-term management to prevent recurrence.'
      }
    ],
    beforeCare: [
      'Continue using prescribed nasal medications',
      'Avoid aspirin and blood thinners if surgery planned',
      'Stop smoking at least 2 weeks before surgery',
      'Arrange for someone to drive you home if having procedure',
      'Fast as instructed if surgery scheduled'
    ],
    afterCare: [
      'Use saline nasal rinses as directed',
      'Take all prescribed medications',
      'Avoid nose blowing for specified period',
      'Keep head elevated when sleeping',
      'Avoid strenuous activity as instructed',
      'Attend all follow-up appointments for cleaning'
    ],
    duration: '45-60 minutes',
    recovery: '1-2 weeks for surgery; varies for medical treatment',
    faqs: [
      {
        question: 'What causes chronic sinusitis?',
        answer: 'Chronic sinusitis can result from infections, allergies, nasal polyps, deviated septum, or immune system disorders.'
      },
      {
        question: 'Is sinus surgery painful?',
        answer: 'Modern endoscopic sinus surgery is minimally invasive. Most patients experience pressure rather than pain, which is well-controlled with medication.'
      },
      {
        question: 'How can I prevent sinus infections?',
        answer: 'Regular nasal rinses, managing allergies, staying hydrated, using a humidifier, and avoiding irritants can help prevent sinus infections.'
      }
    ],
    relatedServices: ['allergy', 'ear-care']
  },
  {
    id: '3',
    slug: 'throat-voice',
    title: 'Throat & Voice Care',
    shortDescription: 'Comprehensive care for throat infections, voice disorders, and swallowing difficulties.',
    fullDescription: 'Our throat and voice care services address conditions affecting the throat, larynx, and vocal cords. From simple throat infections to complex voice disorders, we provide expert diagnosis and treatment to help you maintain or restore your vocal health.',
    image: images.services.throatVoice,
    icon: 'throat',
    whatToExpect: [
      'Detailed voice and swallowing assessment',
      'Laryngoscopy (vocal cord examination)',
      'Voice analysis if indicated',
      'Swallowing study when needed',
      'Discussion of lifestyle modifications',
      'Comprehensive treatment recommendations'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Voice Assessment',
        description: 'Detailed evaluation of voice quality, vocal habits, and symptoms.'
      },
      {
        step: 2,
        title: 'Laryngoscopy',
        description: 'Visual examination of vocal cords using flexible or rigid scope.'
      },
      {
        step: 3,
        title: 'Diagnosis',
        description: 'Identification of specific condition affecting voice or throat.'
      },
      {
        step: 4,
        title: 'Treatment',
        description: 'May include voice therapy, medication, or surgical intervention.'
      },
      {
        step: 5,
        title: 'Rehabilitation',
        description: 'Voice therapy and follow-up care to optimize vocal function.'
      }
    ],
    beforeCare: [
      'Avoid vocal strain before appointment',
      'Stay hydrated',
      'List all medications and supplements',
      'Note any recent illnesses or vocal injuries',
      'Prepare questions about your voice concerns'
    ],
    afterCare: [
      'Follow voice rest instructions strictly',
      'Stay well-hydrated',
      'Avoid throat clearing and whispering',
      'Use humidifier as recommended',
      'Attend voice therapy sessions if prescribed',
      'Avoid smoking and irritants'
    ],
    duration: '30-45 minutes',
    recovery: 'Varies by condition; voice rest may be required',
    faqs: [
      {
        question: 'What causes voice hoarseness?',
        answer: 'Hoarseness can result from vocal cord inflammation, overuse, acid reflux, polyps, nodules, or more serious conditions. Persistent hoarseness requires evaluation.'
      },
      {
        question: 'When should I worry about a sore throat?',
        answer: 'See a doctor if sore throat lasts more than a week, is severe, or accompanied by difficulty breathing, swallowing, high fever, or rash.'
      },
      {
        question: 'Can voice disorders be cured?',
        answer: 'Many voice disorders can be successfully treated with therapy, medication, or surgery. Outcome depends on the specific condition and adherence to treatment.'
      }
    ],
    relatedServices: ['nose-sinus', 'allergy']
  },
  {
    id: '4',
    slug: 'hearing-balance',
    title: 'Hearing & Balance Services',
    shortDescription: 'Advanced hearing tests, hearing aid fittings, and treatment for balance disorders.',
    fullDescription: 'We provide comprehensive hearing and balance services, from diagnostic testing to hearing aid fittings and balance rehabilitation. Our audiologists and physicians work together to address all aspects of hearing health and vestibular disorders.',
    image: images.services.hearingBalance,
    icon: 'hearing',
    whatToExpect: [
      'Complete hearing evaluation',
      'Tympanometry and acoustic reflex testing',
      'Speech discrimination testing',
      'Balance assessment if needed',
      'Hearing aid consultation and fitting',
      'Vestibular rehabilitation planning'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Hearing Evaluation',
        description: 'Comprehensive audiometric testing to assess hearing thresholds and speech understanding.'
      },
      {
        step: 2,
        title: 'Diagnostic Testing',
        description: 'Additional tests to determine cause and type of hearing loss.'
      },
      {
        step: 3,
        title: 'Treatment Options',
        description: 'Discussion of medical treatment, hearing aids, or surgical options.'
      },
      {
        step: 4,
        title: 'Device Fitting',
        description: 'If hearing aids recommended, custom fitting and programming.'
      },
      {
        step: 5,
        title: 'Follow-up Care',
        description: 'Regular adjustments and monitoring of hearing health.'
      }
    ],
    beforeCare: [
      'Clean ears gently before appointment',
      'Bring list of medications',
      'Note when you first noticed hearing changes',
      'Bring family member to help with communication',
      'List situations where hearing is difficult'
    ],
    afterCare: [
      'Follow hearing aid care instructions',
      'Attend all fitting and adjustment appointments',
      'Practice using hearing aids in various environments',
      'Report any discomfort or issues promptly',
      'Maintain regular hearing health check-ups',
      'Protect ears from loud noise'
    ],
    duration: '60-90 minutes for initial evaluation',
    recovery: 'Not applicable for testing; adjustment period for hearing aids',
    faqs: [
      {
        question: 'How do I know if I need a hearing aid?',
        answer: 'If you frequently ask people to repeat themselves, have trouble hearing in noisy places, or turn up the TV volume, you should get a hearing test.'
      },
      {
        question: 'Are there different types of hearing loss?',
        answer: 'Yes - conductive (middle/outer ear), sensorineural (inner ear/nerve), and mixed. Treatment depends on the type and cause.'
      },
      {
        question: 'What causes dizziness and balance problems?',
        answer: 'Balance issues can stem from inner ear problems, medications, blood pressure changes, or neurological conditions. Evaluation is important.'
      }
    ],
    relatedServices: ['ear-care', 'procedures']
  },
  {
    id: '5',
    slug: 'allergy',
    title: 'Allergy Treatment',
    shortDescription: 'Comprehensive allergy testing and immunotherapy to manage seasonal and chronic allergies.',
    fullDescription: 'Our allergy services help identify and treat environmental and seasonal allergies that affect your sinuses and respiratory system. We offer comprehensive testing and multiple treatment options including immunotherapy to provide long-term relief.',
    image: images.services.allergy,
    icon: 'allergy',
    whatToExpect: [
      'Discussion of allergy symptoms and triggers',
      'Skin prick testing or blood tests',
      'Identification of specific allergens',
      'Review of avoidance strategies',
      'Discussion of treatment options',
      'Immunotherapy planning if appropriate'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Symptom Assessment',
        description: 'Detailed review of allergy symptoms, timing, and suspected triggers.'
      },
      {
        step: 2,
        title: 'Allergy Testing',
        description: 'Comprehensive testing to identify specific allergens causing symptoms.'
      },
      {
        step: 3,
        title: 'Treatment Planning',
        description: 'Development of personalized treatment plan including medications and avoidance.'
      },
      {
        step: 4,
        title: 'Immunotherapy',
        description: 'If indicated, beginning allergy shots or sublingual immunotherapy.'
      },
      {
        step: 5,
        title: 'Monitoring',
        description: 'Regular follow-up to assess symptom improvement and adjust treatment.'
      }
    ],
    beforeCare: [
      'Stop antihistamines 7 days before testing',
      'Continue other medications unless instructed otherwise',
      'List all known allergies and reactions',
      'Note seasonal patterns in symptoms',
      'Bring list of suspected triggers'
    ],
    afterCare: [
      'Follow prescribed medication regimen',
      'Implement recommended environmental controls',
      'Attend all immunotherapy appointments',
      'Track symptom changes',
      'Report any severe allergic reactions immediately',
      'Maintain allergy journal if requested'
    ],
    duration: '45-60 minutes for testing',
    recovery: 'Not applicable; symptom improvement varies',
    faqs: [
      {
        question: 'How long does allergy testing take?',
        answer: 'Skin prick testing typically takes 45-60 minutes including waiting time for reactions. Results are available immediately.'
      },
      {
        question: 'Does allergy immunotherapy really work?',
        answer: 'Yes, immunotherapy is highly effective for many patients, providing long-term relief even after treatment ends. Success rate is 80-90% for appropriate candidates.'
      },
      {
        question: 'Can allergies develop later in life?',
        answer: 'Yes, you can develop new allergies at any age, even to things you were previously not allergic to.'
      }
    ],
    relatedServices: ['nose-sinus', 'ear-care']
  },
  {
    id: '6',
    slug: 'procedures',
    title: 'ENT Procedures',
    shortDescription: 'Minimally invasive surgical procedures performed with precision and care.',
    fullDescription: 'We offer a full range of ENT surgical procedures using the latest minimally invasive techniques. Our experienced surgeons perform both in-office procedures and operating room surgeries with a focus on patient safety, comfort, and optimal outcomes.',
    image: images.services.procedures,
    icon: 'procedures',
    whatToExpect: [
      'Thorough pre-operative evaluation',
      'Discussion of procedure details and risks',
      'Anesthesia consultation if needed',
      'Pre-operative instructions and preparation',
      'Post-operative care planning',
      'Clear communication about recovery'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Consultation',
        description: 'Comprehensive evaluation to determine if procedure is necessary and appropriate.'
      },
      {
        step: 2,
        title: 'Pre-operative Planning',
        description: 'Medical clearance, imaging studies, and procedure scheduling.'
      },
      {
        step: 3,
        title: 'Procedure Day',
        description: 'Arrival, preparation, anesthesia, and performance of surgical procedure.'
      },
      {
        step: 4,
        title: 'Recovery',
        description: 'Post-operative monitoring and initial recovery period.'
      },
      {
        step: 5,
        title: 'Follow-up Care',
        description: 'Regular check-ups to ensure proper healing and address concerns.'
      }
    ],
    beforeCare: [
      'Complete all pre-operative testing',
      'Stop blood thinners as instructed',
      'Arrange transportation home',
      'Fast as directed before procedure',
      'Follow all medication instructions',
      'Prepare recovery area at home'
    ],
    afterCare: [
      'Take pain medication as prescribed',
      'Follow activity restrictions',
      'Attend all post-operative appointments',
      'Watch for signs of complications',
      'Follow wound care instructions',
      'Avoid smoking and alcohol',
      'Rest and allow adequate recovery time'
    ],
    duration: 'Varies by procedure: 30 minutes to several hours',
    recovery: '1-4 weeks depending on specific procedure',
    faqs: [
      {
        question: 'What procedures can be done in the office?',
        answer: 'Many procedures including ear tube placement, nasal biopsies, and certain lesion removals can be performed in-office under local anesthesia.'
      },
      {
        question: 'How long is recovery from ENT surgery?',
        answer: 'Recovery varies widely - from a few days for minor procedures to several weeks for major surgery. Your surgeon will provide specific guidance.'
      },
      {
        question: 'Will my insurance cover ENT procedures?',
        answer: 'Most medically necessary ENT procedures are covered by insurance. We\'ll verify your coverage and discuss costs before scheduling.'
      }
    ],
    relatedServices: ['ear-care', 'nose-sinus', 'throat-voice']
  }
]

/**
 * Get service by slug
 */
export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

/**
 * Get all service slugs for static generation
 */
export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug)
}

/**
 * Get related services
 */
export function getRelatedServices(serviceSlug: string): Service[] {
  const service = getServiceBySlug(serviceSlug)
  if (!service) return []
  
  return services.filter(s => service.relatedServices.includes(s.slug))
}
