import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">ENT Clinic</span>
                <span className="text-xs text-gray-400 leading-tight">Expert Care</span>
              </div>
            </div>
            <p className="text-sm text-gray-400">
              Providing comprehensive ear, nose, and throat care with experienced specialists and modern facilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about/" className="text-sm hover:text-primary-400 transition-colors">About Clinic</Link></li>
              <li><Link href="/services/" className="text-sm hover:text-primary-400 transition-colors">Our Services</Link></li>
              <li><Link href="/doctors/" className="text-sm hover:text-primary-400 transition-colors">Our Doctors</Link></li>
              <li><Link href="/blog/" className="text-sm hover:text-primary-400 transition-colors">Health Blog</Link></li>
              <li><Link href="/appointment/" className="text-sm hover:text-primary-400 transition-colors">Book Appointment</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/#ear-care" className="text-sm hover:text-primary-400 transition-colors">Ear Care</Link></li>
              <li><Link href="/services/#nose-sinus" className="text-sm hover:text-primary-400 transition-colors">Nose & Sinus</Link></li>
              <li><Link href="/services/#throat-voice" className="text-sm hover:text-primary-400 transition-colors">Throat & Voice</Link></li>
              <li><Link href="/services/#hearing-balance" className="text-sm hover:text-primary-400 transition-colors">Hearing & Balance</Link></li>
              <li><Link href="/services/#allergy" className="text-sm hover:text-primary-400 transition-colors">Allergy Treatment</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <svg className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Medical Plaza, Healthcare District<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+1234567890" className="hover:text-primary-400 transition-colors">+1 (234) 567-8900</a>
              </li>
              <li className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-primary-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@entclinic.com" className="hover:text-primary-400 transition-colors">info@entclinic.com</a>
              </li>
            </ul>
            <div className="mt-4">
              <p className="text-sm font-medium text-white mb-2">Hours</p>
              <p className="text-sm text-gray-400">Mon-Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-sm text-gray-400">Sat: 9:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} ENT Clinic. All rights reserved. Built by <a href="https://jaywebstudio.in" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors">JayWebStudio</a>
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy/" className="text-gray-400 hover:text-primary-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms/" className="text-gray-400 hover:text-primary-400 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
