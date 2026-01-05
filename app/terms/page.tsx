import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Premium ENT Clinic - Please read these terms before choosing our care.',
}

export default function Terms() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-white py-16 md:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600">Last updated: January 2025</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              By accessing and using the medical care of Premium ENT Clinic, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not continue with our care.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Appointment Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To better serve all our patients:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Please arrive 15 minutes before your scheduled appointment</li>
              <li>Cancellations must be made at least 24 hours in advance</li>
              <li>Late arrivals may result in rescheduling</li>
              <li>Repeated no-shows may result in dismissal from the practice</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Payment is due at the time of service. We accept cash, credit cards, debit cards, and HSA/FSA cards. Co-pays and deductibles are collected at check-in. Patients are responsible for any charges not covered by insurance.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Medical Records</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Patients have the right to access their medical records. Requests for medical records must be made in writing and may be subject to reasonable fees for copying and processing.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Relationship</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The physician-patient relationship is based on mutual respect. We reserve the right to terminate this relationship if patients engage in threatening, abusive, or inappropriate behavior toward staff or providers.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Care</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our clinic does not provide emergency medical care. If you are experiencing a medical emergency, call 911 or visit the nearest emergency room immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              While we strive to provide the highest quality care, medical outcomes cannot be guaranteed. The clinic and its providers are not liable for outcomes beyond our reasonable control.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We reserve the right to modify these terms at any time. Continued use of our medical care after changes constitutes acceptance of the modified terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Email:</strong> <a href="mailto:info@entclinic.com" className="text-primary-600 hover:text-primary-700">info@entclinic.com</a><br />
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-primary-600 hover:text-primary-700">+1 (234) 567-8900</a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
