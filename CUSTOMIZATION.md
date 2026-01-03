# Customization Guide for Premium ENT Clinic Website

Welcome to your new Premium ENT Clinic website! This guide will help you customize the site to match your clinic's branding and information.

## Table of Contents
1. [Quick Start](#quick-start)
2. [Updating Site Configuration](#updating-site-configuration)
3. [Managing Images](#managing-images)
4. [Adding/Editing Doctors](#addingediting-doctors)
5. [Managing Services](#managing-services)
6. [Blog Posts](#blog-posts)
7. [FAQs](#faqs)
8. [Contact Information](#contact-information)
9. [Colors & Branding](#colors--branding)
10. [Deployment](#deployment)

---

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to see your site

3. **Build for Production**
   ```bash
   npm run build
   ```

---

## Updating Site Configuration

### Basic Site Info
Edit `config/siteConfig.ts` to update:

```typescript
export const siteConfig = {
  name: 'Your Clinic Name',
  description: 'Your clinic description',
  url: 'https://yourwebsite.com',
  
  contact: {
    phone: '+1-XXX-XXX-XXXX',
    email: 'info@yourclinic.com',
    whatsapp: '1XXXXXXXXXX', // Without special characters
  },
  
  address: {
    street: 'Your Street Address',
    city: 'Your City',
    state: 'ST',
    zip: 'XXXXX',
  },
  
  hours: {
    monday: '9:00 AM - 6:00 PM',
    // ... update other days
  }
}
```

---

## Managing Images

### Centralized Image Configuration
All images are managed in `config/images.ts`. Replace Unsplash URLs with your own hosted images.

```typescript
export const images = {
  doctors: {
    drYourName: 'https://your-cdn.com/doctor1.jpg',
  },
  services: {
    earCare: 'https://your-cdn.com/ear-care.jpg',
  },
  // ... more images
}
```

### Image Hosting Options:
1. **Cloudinary** (Recommended for free tier)
2. **AWS S3**
3. **Your own hosting**
4. **Vercel's Image Optimization** (automatic)

### Image Requirements:
- **Doctor Photos**: 400x400px minimum (square)
- **Service Images**: 600x400px minimum
- **Blog Images**: 800x500px minimum
- **Format**: JPG or WebP for best performance

---

## Adding/Editing Doctors

Edit `data/doctors.ts` to add or modify doctor profiles:

```typescript
export const doctors: Doctor[] = [
  {
    id: '1',
    slug: 'dr-your-name', // Used in URL
    name: 'Dr. Your Name',
    title: 'Your Specialty',
    qualification: 'MD, Board Certified',
    image: images.doctors.drYourName,
    specialties: ['Specialty 1', 'Specialty 2'],
    experience: '10+ years',
    bio: 'Your bio here...',
    education: [
      'Medical School',
      'Residency',
      'Fellowship'
    ],
    certifications: [
      'Board Certification 1',
      'Board Certification 2'
    ],
    languages: ['English', 'Spanish'],
    availableDays: ['Monday', 'Tuesday', 'Wednesday'],
    nextAvailable: '2026-02-01', // YYYY-MM-DD format
    email: 'doctor@yourclinic.com',
    phone: '+1-XXX-XXX-XXXX'
  },
  // Add more doctors...
]
```

**Doctor pages are automatically generated** at `/doctors/dr-your-name`

---

## Managing Services

Edit `data/services.ts` to add or modify services:

```typescript
export const services: Service[] = [
  {
    id: '1',
    slug: 'your-service', // Used in URL
    title: 'Your Service Name',
    shortDescription: 'Brief description...',
    fullDescription: 'Detailed description...',
    image: images.services.yourService,
    whatToExpect: [
      'Point 1',
      'Point 2'
    ],
    treatmentProcess: [
      {
        step: 1,
        title: 'Step Title',
        description: 'Step description'
      }
    ],
    beforeCare: ['Instruction 1', 'Instruction 2'],
    afterCare: ['Instruction 1', 'Instruction 2'],
    duration: '30-45 minutes',
    recovery: 'Description of recovery time',
    faqs: [
      {
        question: 'Question?',
        answer: 'Answer...'
      }
    ],
    relatedServices: ['service-slug-1', 'service-slug-2']
  }
]
```

**Service pages are automatically generated** at `/services/your-service`

---

## Blog Posts

Add or edit blog posts in `data/blogPosts.ts`:

```typescript
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'your-blog-post',
    title: 'Your Blog Post Title',
    excerpt: 'Short preview...',
    content: `
      # Your Blog Post Content
      
      Write your content here in Markdown format.
      
      ## Subheading
      
      More content...
    `,
    image: images.blog.yourPost,
    author: {
      name: 'Dr. Your Name',
      avatar: images.doctors.drYourName,
      title: 'Your Title'
    },
    category: 'Category Name',
    tags: ['tag1', 'tag2'],
    publishedDate: '2026-01-15', // YYYY-MM-DD
    readTime: '5 min read',
    featured: true // Shows on homepage
  }
]
```

---

## FAQs

Update frequently asked questions in `data/faqs.ts`:

```typescript
export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Your question?',
    answer: 'Your answer...',
    category: 'general' // or 'appointments', 'insurance', 'procedures', 'billing'
  }
]
```

FAQs are displayed on:
- Homepage
- Individual service pages (filtered by context)

---

## Contact Information

### Update Multiple Locations:

1. **Site Config** (`config/siteConfig.ts`)
   - Primary source of truth for contact info

2. **Footer** (`components/Footer.tsx`)
   - Automatically uses siteConfig

3. **Floating Contact Buttons** (`components/FloatingContactButtons.tsx`)
   - Automatically uses siteConfig

4. **Emergency Banner** (`components/EmergencyBanner.tsx`)
   - Update emergency phone numbers

---

## Colors & Branding

### Update Color Scheme
Edit `app/globals.css`:

```css
@theme {
  /* Primary Blues */
  --color-primary-600: #YourColor;
  --color-primary-700: #YourColor;
  
  /* Secondary Colors */
  --color-secondary-600: #YourColor;
  
  /* Accent Colors */
  --color-accent-600: #YourColor;
}
```

### Logo
Replace logo in:
1. `components/Header.tsx` - Main navigation logo
2. `components/Footer.tsx` - Footer logo
3. `public/logo.png` - Favicon and social sharing

---

## Connecting Forms to Your Backend

### Appointment Form
Edit `components/AppointmentForm.tsx`:

```typescript
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault()
  
  if (!validateForm()) return
  
  // Replace this simulation with your actual API call
  const response = await fetch('/api/appointments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
  
  if (response.ok) {
    setSubmitSuccess(true)
    // Send confirmation email, etc.
  }
}
```

### Contact Form
Similar process for `components/ContactForm.tsx`

### Recommended Backend Options:
1. **Vercel Serverless Functions** (included with Vercel hosting)
2. **Firebase** (easy setup)
3. **Your existing backend API**
4. **Form services**: Formspree, Form submit, etc.

---

## Analytics Setup

### Enable Google Analytics

1. Get your Google Analytics 4 Measurement ID

2. Edit `components/Analytics.tsx`:
   ```typescript
   const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // Your actual ID
   ```

3. Uncomment the script tags in the component

4. Add Analytics to your layout (`app/layout.tsx`):
   ```typescript
   import Analytics from '@/components/Analytics'
   
   // Add to your layout
   <Analytics />
   ```

---

## Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Click "Deploy"

3. **Custom Domain**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

### Environment Variables
If using forms with backend:
- Add API keys in Vercel dashboard under Settings → Environment Variables

### Build Command
```bash
npm run build
```

### Output Directory
```
.next
```

---

## SEO Optimization

### Update Metadata
Each page has metadata at the top of the file:

```typescript
export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your page description for search engines',
}
```

### Sitemap
Automatically generated at `/sitemap.xml`
- Includes all doctors, services, and blog posts
- Updates automatically when you add content

### Robots.txt
Automatically generated at `/robots.txt`

---

## Performance Tips

1. **Optimize Images**
   - Use WebP format when possible
   - Compress images before uploading
   - Use appropriate sizes (don't upload 4K images)

2. **Lazy Loading**
   - Already implemented for images
   - Below-the-fold content loads on scroll

3. **Code Splitting**
   - Automatic with Next.js
   - Each page only loads what it needs

---

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### TypeScript Errors
```bash
# Check types
npm run build
```

### Images Not Loading
- Check image URLs are correct
- Verify images are publicly accessible
- Check browser console for errors

---

## Support

Need help? Here are your options:

1. **Next.js Documentation**: [nextjs.org/docs](https://nextjs.org/docs)
2. **Tailwind CSS Docs**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
3. **Vercel Support**: Available in your dashboard

---

## Maintenance Checklist

### Regular Updates:
- [ ] Update doctor availability dates
- [ ] Add new blog posts (monthly recommended)
- [ ] Review and update FAQs
- [ ] Check contact information is current
- [ ] Update service descriptions as needed
- [ ] Monitor Google Analytics

### Quarterly Review:
- [ ] Update testimonials
- [ ] Review and optimize images
- [ ] Check all forms are working
- [ ] Update statistics (patient count, etc.)
- [ ] Review mobile responsiveness

---

## Quick Reference: File Locations

```
├── config/
│   ├── images.ts          # All image URLs
│   └── siteConfig.ts      # Site-wide settings
├── data/
│   ├── doctors.ts         # Doctor profiles
│   ├── services.ts        # Service information
│   ├── faqs.ts           # FAQ content
│   └── blogPosts.ts      # Blog articles
├── components/
│   ├── Header.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   └── [other components]
└── app/
    ├── page.tsx          # Homepage
    ├── doctors/          # Doctor pages
    ├── services/         # Service pages
    └── blog/             # Blog pages
```

---

**Congratulations!** Your website is ready to launch. Remember to test thoroughly before going live, and don't forget to set up your custom domain and SSL certificate (automatic with Vercel).

Good luck with your clinic's online presence! 🎉
