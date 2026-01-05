import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Premium ENT Clinic - How we collect, use, and protect your personal information.',
}

export default function Privacy() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              At Premium ENT Clinic, we are committed to protecting your privacy and ensuring the security of your personal health information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information in compliance with HIPAA and other applicable regulations.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We collect information that you provide directly to us, including:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Personal identification information (name, date of birth, address, phone number, email)</li>
              <li>Medical history and health information</li>
              <li>Insurance information</li>
              <li>Appointment and treatment records</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Provide medical care and treatment</li>
              <li>Schedule appointments and send reminders</li>
              <li>Process insurance claims and billing</li>
              <li>Communicate about your care and our specialities</li>
              <li>Comply with legal and regulatory requirements</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Security</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We implement appropriate technical and organizational measures to protect your personal health information from unauthorized access, disclosure, alteration, and destruction.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Access and receive a copy of your medical records</li>
              <li>Request corrections to your information</li>
              <li>Request restrictions on certain uses of your information</li>
              <li>Receive confidential communications</li>
              <li>File a complaint if you believe your privacy rights have been violated</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Email:</strong> <a href="mailto:privacy@entclinic.com" className="text-primary-600 hover:text-primary-700">privacy@entclinic.com</a><br />
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-primary-600 hover:text-primary-700">+1 (234) 567-8900</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
