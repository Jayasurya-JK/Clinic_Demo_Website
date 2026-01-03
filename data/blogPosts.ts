/**
 * Blog Posts Data
 * 
 * Sample blog posts/articles for the health blog.
 * Update this file to add, remove, or modify blog content.
 */

import { images } from '@/config/images'

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  author: {
    name: string
    avatar: string
    title: string
  }
  category: string
  tags: string[]
  publishedDate: string
  readTime: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'understanding-chronic-sinusitis',
    title: 'Understanding Chronic Sinusitis: Symptoms and Treatment',
    excerpt: 'Learn about the causes, symptoms, and effective treatment options for chronic sinusitis, a condition affecting millions of Americans.',
    content: `
# Understanding Chronic Sinusitis: Symptoms and Treatment

Chronic sinusitis is a persistent inflammation of the sinuses that lasts for 12 weeks or longer, despite treatment attempts. It's a common condition that affects millions of Americans and can significantly impact quality of life.

## What Causes Chronic Sinusitis?

Several factors can contribute to chronic sinusitis:

- **Nasal polyps**: Tissue growths that block nasal passages
- **Deviated nasal septum**: A crooked septum can restrict sinus drainage
- **Respiratory tract infections**: Frequent infections can inflame sinuses
- **Allergies**: Including hay fever, can trigger sinus inflammation
- **Immune system disorders**: May make you more susceptible to infections

## Common Symptoms

People with chronic sinusitis often experience:

- Facial pain, pressure, or fullness
- Nasal obstruction or congestion
- Thick, discolored nasal discharge
- Reduced sense of smell and taste
- Cough or throat clearing
- Fatigue and general feeling of being unwell

## Treatment Options

### Medical Management
- Saline nasal irrigation
- Nasal corticosteroid sprays
- Oral or injected corticosteroids
- Antibiotics (if bacterial infection present)
- Immunotherapy for allergies

### Surgical Treatment
When medical management fails, endoscopic sinus surgery may be recommended. This minimally invasive procedure:
- Removes obstructions
- Enlarges sinus openings
- Improves drainage
- Has high success rates with quick recovery

## When to See a Specialist

Consult an ENT specialist if you have:
- Symptoms lasting more than 10 days
- Multiple sinus infections per year
- Symptoms not improving with medication
- Vision changes or severe headaches

Don't let chronic sinusitis control your life. Modern treatments can provide significant relief and improve your quality of life.
    `,
    image: images.blog.sinusTreatment,
    author: {
      name: 'Dr. Sarah Johnson',
      avatar: images.doctors.drSarahJohnson,
      title: 'ENT Specialist & Surgeon'
    },
    category: 'Sinus Health',
    tags: ['sinusitis', 'sinus infection', 'nasal congestion', 'ENT surgery'],
    publishedDate: '2025-12-15',
    readTime: '5 min read',
    featured: true
  },
  {
    id: '2',
    slug: 'hearing-loss-children-warning-signs',
    title: 'Hearing Loss in Children: Early Warning Signs',
    excerpt: 'Recognize the early signs of hearing loss in children and learn why early intervention is crucial for language and social development.',
    content: `
# Hearing Loss in Children: Early Warning Signs

Early detection of hearing loss in children is crucial for their speech, language, and social development. Understanding the warning signs can help parents seek timely intervention.

## Why Early Detection Matters

Hearing is essential for:
- Speech and language development
- Social and emotional development
- Academic success
- Overall quality of life

The critical period for language development is from birth to age 3, making early detection and intervention vital.

## Warning Signs by Age

### Infants (0-12 months)
- Doesn't startle at loud sounds
- Doesn't turn toward sounds by 6 months
- Doesn't babble or babbling stops
- Doesn't respond to their name by 12 months

### Toddlers (1-3 years)
- Limited or no speech
- Doesn't follow simple directions
- Frequently asks "What?" or "Huh?"
- Turns up TV or device volume very high
- Watches your face intently when you speak

### Preschool and School Age
- Speech delay or unclear speech
- Difficulty following conversations
- Behavioral problems in school
- Complaints of earaches or ear pressure
- Academic difficulties

## Common Causes

- Ear infections (otitis media)
- Fluid in the middle ear
- Congenital hearing loss
- Genetic factors
- Exposure to loud noises
- Certain medications
- Premature birth

## What Parents Should Do

1. **Trust Your Instincts**: If you suspect hearing problems, seek evaluation
2. **Schedule Hearing Screening**: All newborns should be screened
3. **Regular Check-ups**: Include hearing assessment at well-child visits
4. **Document Concerns**: Keep notes on behaviors that worry you
5. **Seek Specialist Evaluation**: Consult a pediatric ENT or audiologist

## Treatment Options

Depending on the cause and severity:
- Ear tube placement for fluid
- Hearing aids
- Cochlear implants
- Speech and language therapy
- Medical or surgical treatment

## The Good News

With early detection and appropriate intervention, most children with hearing loss can develop normal language skills and succeed in school. Modern hearing technology and therapies have transformed outcomes.

Don't wait if you have concerns about your child's hearing. Early intervention can make a life-changing difference.
    `,
    image: images.blog.hearingLoss,
    author: {
      name: 'Dr. Michael Chen',
      avatar: images.doctors.drMichaelChen,
      title: 'Pediatric ENT Specialist'
    },
    category: 'Pediatric Care',
    tags: ['hearing loss', 'children', 'pediatrics', 'ear health'],
    publishedDate: '2025-12-10',
    readTime: '6 min read',
    featured: true
  },
  {
    id: '3',
    slug: 'when-to-see-ent-specialist',
    title: 'When to See an ENT Specialist',
    excerpt: 'Not sure if your symptoms warrant a visit to an ENT specialist? Learn about conditions that benefit from specialized care.',
    content: `
# When to See an ENT Specialist

Many people wonder when their ear, nose, or throat symptoms warrant a visit to a specialist. Here's a guide to help you understand when specialized ENT care is beneficial.

## Ear Symptoms

See an ENT specialist for:
- **Hearing loss** that's sudden or progressive
- **Persistent ear pain** lasting more than a few days
- **Recurring ear infections** (more than 3-4 per year)
- **Tinnitus** (ringing in ears) that's bothersome or constant
- **Dizziness or vertigo** affecting daily activities
- **Drainage from the ear** that doesn't resolve

## Nose and Sinus Symptoms

Consult an ENT for:
- **Chronic sinusitis** - symptoms lasting more than 12 weeks
- **Frequent sinus infections** - more than 3-4 per year
- **Nasal obstruction** affecting breathing or sleep
- **Nosebleeds** that are frequent or difficult to control
- **Loss of smell** that persists
- **Facial pain or pressure** not responding to treatment

## Throat and Voice Symptoms

Seek ENT evaluation for:
- **Hoarseness** lasting more than 2 weeks
- **Difficulty swallowing** (dysphagia)
- **Persistent sore throat** not responding to treatment
- **Lump in the neck** that doesn't go away
- **Voice changes** affecting your work or quality of life
- **Sleep apnea symptoms** - snoring, gasping, daytime fatigue

## Head and Neck Concerns

An ENT specialist should evaluate:
- Persistent lumps or masses in the neck
- Chronic lymph node swelling
- Facial nerve weakness or paralysis
- Jaw problems related to TMJ
- Facial trauma or fractures

## When Primary Care Isn't Enough

Your primary care doctor may refer you to an ENT when:
- Symptoms don't improve with initial treatment
- Specialized diagnostic testing is needed
- Surgical intervention may be required
- You have complex or multiple ENT issues
- You need specialized expertise in head and neck conditions

## What to Expect at Your ENT Visit

During your first visit:
1. **Detailed medical history review**
2. **Comprehensive examination** of ears, nose, and throat
3. **Specialized testing** if needed (hearing tests, endoscopy, imaging)
4. **Discussion of diagnosis and treatment options**
5. **Development of a personalized treatment plan**

## Pediatric ENT Concerns

Children should see an ENT specialist for:
- Chronic or recurrent ear infections
- Hearing concerns or speech delays
- Enlarged tonsils or adenoids causing breathing problems
- Persistent nasal congestion
- Sleep-disordered breathing

## Don't Delay

Many ENT conditions worsen without treatment or become harder to treat over time. Early intervention often leads to:
- Better outcomes
- Faster recovery
- Less invasive treatment options
- Prevention of complications

## The Bottom Line

If you're experiencing persistent ENT symptoms that affect your quality of life or don't respond to basic treatment, it's time to see a specialist. ENT physicians have specialized training and tools to diagnose and treat conditions that may be complex or require advanced care.

Trust your instincts. If something doesn't feel right, seek evaluation. Early diagnosis and treatment can prevent serious complications and improve your overall health and well-being.
    `,
    image: images.blog.entSpecialist,
    author: {
      name: 'Dr. Sarah Johnson',
      avatar: images.doctors.drSarahJohnson,
      title: 'ENT Specialist & Surgeon'
    },
    category: 'General Health',
    tags: ['ENT care', 'symptoms', 'specialist', 'when to see doctor'],
    publishedDate: '2025-12-05',
    readTime: '7 min read',
    featured: false
  },
  {
    id: '4',
    slug: 'allergy-season-management-tips',
    title: 'Allergy Season: Tips for Managing Symptoms',
    excerpt: 'Practical strategies to minimize allergy symptoms and enjoy the outdoors during peak allergy season.',
    content: `
# Allergy Season: Tips for Managing Symptoms

Spring and fall bring beautiful weather but also challenging allergy seasons for millions of people. Here are evidence-based strategies to help you manage seasonal allergies effectively.

## Understanding Seasonal Allergies

Seasonal allergies (allergic rhinitis or hay fever) occur when your immune system overreacts to airborne substances like:
- Tree pollen (spring)
- Grass pollen (late spring and summer)
- Ragweed pollen (fall)
- Mold spores (spring and fall)

## Common Symptoms

- Sneezing and runny nose
- Itchy, watery eyes
- Nasal congestion
- Post-nasal drip
- Cough and throat irritation
- Fatigue and irritability

## Prevention Strategies

### Monitor Pollen Counts
- Check daily pollen forecasts
- Stay indoors when counts are high (typically early morning)
- Keep windows closed during peak pollen times

### Limit Exposure
- Shower and wash hair after being outdoors
- Change clothes when coming inside
- Use air conditioning instead of opening windows
- Keep car windows closed while driving

### Home Environment
- Use HEPA filters in your home
- Clean or replace HVAC filters regularly
- Vacuum frequently with HEPA filter vacuum
- Wash bedding weekly in hot water
- Remove shoes at the door

## Treatment Options

### Over-the-Counter
- **Antihistamines**: Reduce sneezing, itching, and runny nose
- **Nasal corticosteroid sprays**: Reduce inflammation
- **Decongestants**: Relieve nasal congestion (use short-term only)
- **Eye drops**: Relieve itchy, watery eyes

### Prescription Medications
Your doctor may prescribe stronger versions of:
- Nasal sprays
- Antihistamines
- Combination medications

### Immunotherapy
For severe or persistent allergies:
- **Allergy shots**: Regular injections over several years
- **Sublingual tablets**: Daily dissolvable tablets
- Both can provide long-term relief

## Natural Remedies

While not substitutes for medical treatment, these may help:
- Saline nasal rinses
- Local honey (limited evidence)
- Butterbur supplements (consult doctor first)
- Quercetin (natural antihistamine)

## When to See an Allergist

Consult a specialist if:
- Over-the-counter medications aren't effective
- Symptoms significantly impact quality of life
- You want to identify specific allergens
- You're interested in immunotherapy
- Symptoms occur year-round

## Creating Your Action Plan

1. **Start early**: Begin medications before symptoms start
2. **Be consistent**: Take allergy medications daily during season
3. **Combine approaches**: Use multiple strategies together
4. **Track symptoms**: Identify your worst triggers
5. **Plan ahead**: Prepare for high pollen days

## Special Considerations

### Children
- Use age-appropriate medications
- Limit outdoor play during high pollen times
- Keep school informed of allergy management plan

### Pregnancy
- Consult doctor before taking any medications
- Saline rinses are safe and effective
- Many allergy medications are safe during pregnancy

### Asthma
- Allergies can trigger asthma symptoms
- Manage allergies to prevent asthma attacks
- Have asthma action plan ready

## The Future of Allergy Treatment

New treatments continue to emerge:
- Biological medications for severe allergies
- Improved immunotherapy protocols
- Better diagnostic tools

## Don't Suffer Needlessly

Modern allergy treatments are highly effective. You don't have to dread allergy season or stay indoors all spring and fall. With the right combination of prevention, medication, and sometimes immunotherapy, most people can control their symptoms and enjoy outdoor activities.

If you're struggling with seasonal allergies, talk to an allergist. Together, you can develop a comprehensive plan to keep you breathing easy all year long.
    `,
    image: images.blog.allergyManagement,
    author: {
      name: 'Dr. Sarah Johnson',
      avatar: images.doctors.drSarahJohnson,
      title: 'ENT Specialist & Surgeon'
    },
    category: 'Allergy Care',
    tags: ['allergies', 'seasonal allergies', 'pollen', 'allergy treatment'],
    publishedDate: '2025-11-28',
    readTime: '8 min read',
    featured: false
  },
  {
    id: '5',
    slug: 'voice-care-for-professionals',
    title: 'Voice Care for Professionals',
    excerpt: 'Essential tips for teachers, singers, public speakers, and anyone who relies on their voice professionally.',
    content: `
# Voice Care for Professionals

Your voice is your instrument and your livelihood. Whether you're a teacher, singer, salesperson, or public speaker, maintaining vocal health is crucial for your career and quality of life.

## Why Voice Care Matters

Professional voice users are at higher risk for:
- Vocal fatigue
- Hoarseness
- Vocal nodules or polyps
- Chronic laryngitis
- Voice strain

These conditions can affect your ability to work and communicate effectively.

## Common Vocal Problems

### Vocal Fatigue
- Voice tires quickly
- Difficulty projecting
- Worsens throughout the day

### Hoarseness
- Rough, raspy voice quality
- Reduced vocal range
- Voice breaks

### Vocal Nodules
- Callus-like growths on vocal cords
- Caused by overuse or misuse
- Require voice rest and therapy

## Essential Voice Care Tips

### Hydration
- Drink 8-10 glasses of water daily
- Keep throat moist
- Avoid dehydrating drinks (caffeine, alcohol)
- Use humidifier in dry environments

### Vocal Technique
- Use proper breathing from diaphragm
- Avoid shouting or speaking over noise
- Use amplification when possible
- Take vocal breaks throughout day
- Warm up voice before heavy use

### Lifestyle Factors
- Don't smoke
- Limit alcohol consumption
- Get adequate sleep
- Manage stress
- Treat acid reflux
- Avoid throat clearing (swallow or sip water instead)

## Professional-Specific Tips

### Teachers
- Use classroom amplification systems
- Avoid teaching over noise
- Take breaks between classes
- Face students when speaking
- Use visual aids to reduce talking

### Singers
- Work with voice coach
- Warm up properly before performing
- Cool down after singing
- Avoid singing when ill
- Rest voice after performances

### Public Speakers
- Use microphone even in small rooms
- Practice proper breath support
- Stay hydrated before and during speeches
- Avoid clearing throat
- Rest voice between engagements

### Call Center Workers
- Use proper headset
- Take regular voice breaks
- Maintain good posture
- Stay hydrated
- Speak at comfortable volume

## When to Seek Help

See an ENT specialist if you experience:
- Hoarseness lasting more than 2 weeks
- Voice changes affecting work
- Pain when speaking
- Frequent voice fatigue
- Complete voice loss
- Difficulty being heard

## Vocal Health Evaluation

An ENT evaluation typically includes:
- **Detailed voice history**
- **Laryngoscopy** - examination of vocal cords
- **Voice assessment** - analysis of voice quality
- **Stroboscopy** - detailed view of vocal cord vibration

## Treatment Options

Depending on diagnosis:

### Voice Therapy
- Exercises to improve technique
- Breathing training
- Vocal hygiene education
- Typically 6-12 sessions

### Medical Management
- Treat underlying conditions (reflux, allergies)
- Medications to reduce inflammation
- Management of contributing factors

### Surgical Intervention
- For nodules, polyps, or other lesions
- Typically after conservative treatment
- Requires voice rest post-operatively

## Creating Your Voice Care Routine

**Morning:**
- Gentle humming to warm up
- Hydrate
- Avoid clearing throat

**Throughout Day:**
- Sip water regularly
- Take voice breaks
- Monitor vocal fatigue
- Use proper technique

**Evening:**
- Cool down exercises
- Reflect on vocal use
- Plan next day's vocal needs

## Prevention is Key

Most voice problems can be prevented with:
- Proper technique
- Adequate hydration
- Vocal rest when needed
- Early intervention for problems
- Regular voice care habits

## Resources for Professional Voice Users

Consider:
- Working with speech-language pathologist
- Joining professional voice user support groups
- Attending voice care workshops
- Reading voice care literature
- Consulting with ENT laryngologist

## Your Voice, Your Career

Don't take your voice for granted. As a professional voice user, your vocal health directly impacts your ability to earn a living and pursue your passion. Invest in voice care now to ensure a long, successful career using your voice.

If you're experiencing voice problems or want to optimize your vocal health, schedule an evaluation with an ENT specialist who understands the unique needs of professional voice users. With proper care, you can maintain a healthy, strong voice throughout your career.
    `,
    image: images.blog.voiceCare,
    author: {
      name: 'Dr. Emily Williams',
      avatar: images.doctors.drEmilyWilliams,
      title: 'Head & Neck Surgeon'
    },
    category: 'Voice Health',
    tags: ['voice care', 'professional voice', 'vocal health', 'singers', 'teachers'],
    publishedDate: '2025-11-20',
    readTime: '9 min read',
    featured: true
  }
]

/**
 * Get blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

/**
 * Get all blog post slugs for static generation
 */
export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug)
}

/**
 * Get featured blog posts
 */
export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured)
}

/**
 * Get blog posts by category
 */
export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category)
}

/**
 * Get blog categories
 */
export function getBlogCategories(): string[] {
  return Array.from(new Set(blogPosts.map(post => post.category)))
}

/**
 * Get related posts (same category, excluding current post)
 */
export function getRelatedPosts(currentSlug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(currentSlug)
  if (!currentPost) return []
  
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === currentPost.category)
    .slice(0, limit)
}
