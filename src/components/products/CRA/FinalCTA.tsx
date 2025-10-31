import React from 'react'
import { CheckCircle, XCircle, Mail, Phone, Calendar } from 'lucide-react'

const FinalCTA = () => {
  const option1 = [
    'Workshop attendance sheets',
    'Pamphlet distribution counts',
    'Anecdotal success stories',
    'Hope for "Satisfactory"'
  ]

  const option2 = [
    'Measurable behavior change',
    'Documented community impact',
    'Technology-enabled scale',
    'Position for "Outstanding"'
  ]

  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-black text-center mb-10 text-gray-900">
          THE REGULATORY REALITY CHECK
        </h2>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 relative">
          {/* Option 1 Card - Lower Contrast */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                <XCircle className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-700">Option 1: Same Old Story</h3>
            </div>
            
            <div className="space-y-4">
              {option1.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <XCircle className="w-4 h-4 text-gray-400" />
                  </div>
                  <p className="text-gray-600 text-base md:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Option 2 Card - Visually Dominant */}
          <div className="bg-white border-2 border-[#625bff] rounded-2xl p-8 shadow-lg relative">
            {/* Recommended Badge */}
            <div className="absolute -top-3 right-6 bg-[#625bff] text-white text-xs font-bold px-4 py-1 rounded-full">
              RECOMMENDED
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#625bff] rounded-full flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Option 2: Innovation Leadership</h3>
            </div>
            
            <div className="space-y-4">
              {option2.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#625bff] rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-900 text-base md:text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Subtle Divider - Desktop Only */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 border-dashed border-l-2 transform -translate-x-1/2"></div>
        </div>

        {/* Full-width CTA */}
        <div className="text-center mt-8">
          <button className="bg-[#625bff] text-white text-lg md:text-xl px-8 md:px-10 py-4 rounded-full font-bold shadow-lg hover:bg-[#4b3be6] transition-colors duration-200 w-full md:w-auto">
            Transform Our CRA Results
          </button>
        </div>

        {/* Contact Info Row */}
        <div className="mt-8 flex flex-wrap gap-6 justify-center text-base text-gray-600">
          <a href="mailto:cra@wisperai.com" className="flex items-center gap-2 hover:text-[#625bff] transition-colors">
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </a>
          <a href="tel:+15105550100" className="flex items-center gap-2 hover:text-[#625bff] transition-colors">
            <Phone className="w-5 h-5" />
            <span>Call</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-[#625bff] transition-colors">
            <Calendar className="w-5 h-5" />
            <span>Book Expert</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
