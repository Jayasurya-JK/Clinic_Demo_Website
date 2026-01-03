'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Question {
  id: number
  question: string
  options: {
    value: string
    label: string
    next?: number // Next question ID, or undefined for final step
  }[]
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Where are you experiencing symptoms?',
    options: [
      { value: 'ear', label: '👂 Ear', next: 2 },
      { value: 'nose', label: '👃 Nose/Sinuses', next: 2 },
      { value: 'throat', label: '🗣️ Throat/Voice', next: 2 },
      { value: 'multiple', label: '🔄 Multiple Areas', next: 2 }
    ]
  },
  {
    id: 2,
    question: 'How long have you had these symptoms?',
    options: [
      { value: 'days', label: 'A few days', next: 3 },
      { value: 'weeks', label: '1-2 weeks', next: 3 },
      { value: 'months', label: 'Several weeks to months', next: 3 },
      { value: 'chronic', label: 'More than 3 months', next: 3 }
    ]
  },
  {
    id: 3,
    question: 'Rate your discomfort level (1-10)',
    options: [
      { value: 'mild', label: '1-3 (Mild)', next: 4 },
      { value: 'moderate', label: '4-6 (Moderate)', next: 4 },
      { value: 'severe', label: '7-8 (Severe)', next: 4 },
      { value: 'extreme', label: '9-10 (Extreme)' } // Final question
    ]
  },
  {
    id: 4,
    question: 'Are you experiencing any of these additional symptoms?',
    options: [
      { value: 'fever', label: '🌡️ Fever or chills' },
      { value: 'hearing', label: '👂 Hearing changes' },
      { value: 'balance', label: '😵 Dizziness or balance issues' },
      { value: 'none', label: 'None of the above' }
    ]
  }
]

interface Recommendation {
  specialist: string
  reason: string
  urgency: 'routine' | 'soon' | 'urgent'
  additionalInfo: string
}

export default function SymptomChecker() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null)

  const handleAnswer = (questionId: number, value: string, nextId?: number) => {
    const newAnswers = { ...answers, [questionId]: value }
    setAnswers(newAnswers)

    if (nextId) {
      setCurrentStep(currentStep + 1)
    } else {
      // Calculate recommendation
      const result = calculateRecommendation(newAnswers)
      setRecommendation(result)
      setShowResults(true)
      
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('symptomCheckerResult', JSON.stringify({
          date: new Date().toISOString(),
          answers: newAnswers,
          recommendation: result
        }))
      }
    }
  }

  const calculateRecommendation = (userAnswers: Record<number, string>): Recommendation => {
    const location = userAnswers[1]
    const duration = userAnswers[2]
    const severity = userAnswers[3]
    const additional = userAnswers[4]

    // Determine urgency
    let urgency: 'routine' | 'soon' | 'urgent' = 'routine'
    if (severity === 'extreme' || additional === 'fever' || additional === 'balance') {
      urgency = 'urgent'
    } else if (severity === 'severe' || duration === 'chronic') {
      urgency = 'soon'
    }

    // Determine specialist based on location
    let specialist = 'General ENT Specialist'
    let reason = ''
    let additionalInfo = ''

    switch (location) {
      case 'ear':
        if (additional === 'hearing') {
          specialist = 'Dr. Michael Chen - Hearing Specialist'
          reason = 'Your ear symptoms combined with hearing changes indicate a need for comprehensive audiological evaluation.'
        } else {
          specialist = 'Dr. Sarah Johnson - ENT Specialist'
          reason = 'Ear conditions require thorough examination to determine the cause and appropriate treatment.'
        }
        additionalInfo = 'Common ear conditions include infections, wax buildup, tinnitus, and hearing loss.'
        break

      case 'nose':
        specialist = 'Dr. Sarah Johnson - Sinus Specialist'
        if (duration === 'chronic') {
          reason = 'Chronic nasal/sinus symptoms may require advanced diagnostic imaging and possibly surgical intervention.'
          additionalInfo = 'Chronic sinusitis affects millions and can significantly impact quality of life. Modern treatments offer excellent relief.'
        } else {
          reason = 'Nasal and sinus issues can often be treated effectively with medication, but may require endoscopic examination.'
          additionalInfo = 'We offer comprehensive sinus care including allergy testing and treatment.'
        }
        break

      case 'throat':
        specialist = 'Dr. Emily Williams - Voice & Throat Specialist'
        reason = 'Throat and voice symptoms require laryngeal examination to ensure proper diagnosis.'
        additionalInfo = 'Voice disorders, throat pain, and swallowing difficulties can have various causes that need professional evaluation.'
        break

      case 'multiple':
        specialist = 'Dr. Sarah Johnson - Comprehensive ENT Care'
        reason = 'Multiple symptom areas require comprehensive evaluation to address all your concerns.'
        additionalInfo = 'We\'ll perform a thorough examination of all affected areas and develop an integrated treatment plan.'
        break
    }

    return { specialist, reason, urgency, additionalInfo }
  }

  const resetChecker = () => {
    setCurrentStep(0)
    setAnswers({})
    setShowResults(false)
    setRecommendation(null)
  }

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'urgent': return 'text-red-600 bg-red-50 border-red-200'
      case 'soon': return 'text-orange-600 bg-orange-50 border-orange-200'
      default: return 'text-green-600 bg-green-50 border-green-200'
    }
  }

  const getUrgencyText = (urgency: string) => {
    switch (urgency) {
      case 'urgent': return 'Schedule Soon - Priority Appointment Recommended'
      case 'soon': return 'Schedule Within 1-2 Weeks'
      default: return 'Schedule at Your Convenience'
    }
  }

  if (showResults && recommendation) {
    return (
      <section className="section-padding bg-white">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
            {/* Success Icon */}
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4 animate-scaleUp">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Your Recommended Specialist
              </h3>
            </div>

            {/* Urgency Badge */}
            <div className={`mb-6 p-4 rounded-lg border-2 ${getUrgencyColor(recommendation.urgency)}`}>
              <p className="font-semibold text-center">
                {getUrgencyText(recommendation.urgency)}
              </p>
            </div>

            {/* Recommendation */}
            <div className="mb-6 p-6 bg-primary-50 rounded-xl">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {recommendation.specialist}
              </h4>
              <p className="text-gray-700 mb-4">
                {recommendation.reason}
              </p>
              <p className="text-sm text-gray-600">
                {recommendation.additionalInfo}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/appointment/"
                className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg text-center font-medium hover:bg-primary-700 transition-colors duration-200"
              >
                Book Appointment Now
              </Link>
              <button
                onClick={resetChecker}
                className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                Check Again
              </button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 text-center">
              * This tool provides general guidance only and is not a substitute for professional medical advice. 
              For emergencies, call 911 immediately.
            </p>
          </div>
        </div>
      </section>
    )
  }

  const currentQuestion = questions[currentStep]

  return (
    <section className="section-padding bg-gradient-to-br from-white to-primary-50">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Symptom Checker
          </h2>
          <p className="text-lg text-gray-600">
            Answer a few questions to find the right specialist for your needs
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% Complete</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-600 transition-all duration-500 ease-out"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center animate-fadeInUp">
            {currentQuestion.question}
          </h3>

          {/* Options */}
          <div className="grid gap-4 mb-6">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(currentQuestion.id, option.value, option.next)}
                className="p-5 rounded-xl border-2 border-gray-200 hover:border-primary-500 hover:bg-primary-50 transition-all duration-200 text-left group animate-fadeInUp"
              >
                <span className="text-lg font-medium text-gray-900 group-hover:text-primary-600">
                  {option.label}
                </span>
              </button>
            ))}
          </div>

          {/* Back Button */}
          {currentStep > 0 && (
            <button
              onClick={() => {
                setCurrentStep(currentStep - 1)
                const newAnswers = { ...answers }
                delete newAnswers[currentQuestion.id]
                setAnswers(newAnswers)
              }}
              className="text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Previous Question
            </button>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-sm text-gray-500 text-center mt-6">
          This symptom checker is for informational purposes only and does not constitute medical advice.
          Always consult with a healthcare professional for proper diagnosis and treatment.
        </p>
      </div>
    </section>
  )
}
