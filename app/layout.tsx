import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://jaywebstudio.in'),
  title: {
    default: 'Premium ENT Clinic - Expert Ear, Nose & Throat Care',
    template: '%s | Premium ENT Clinic'
  },
  description: 'Premier ENT clinic offering comprehensive ear, nose, throat, hearing, and allergy care with experienced specialists and modern facilities.',
  keywords: ['ent clinic', 'ear doctor', 'throat specialist', 'nose doctor', 'hearing specialist', 'allergy treatment', 'sinus treatment'],
  authors: [{ name: 'JayWebStudio' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Premium ENT Clinic',
    title: 'Premium ENT Clinic - Expert Ear, Nose & Throat Care',
    description: 'Premier ENT clinic offering comprehensive care with experienced specialists.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium ENT Clinic - Expert Ear, Nose & Throat Care',
    description: 'Premier ENT clinic offering comprehensive care with experienced specialists.',
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
