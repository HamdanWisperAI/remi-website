import React from 'react'

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
    <section className="relative w-full bg-gradient-to-br from-[#625bff] to-purple-700 overflow-hidden py-20 px-6 md:px-10 lg:px-16">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            THE REGULATORY REALITY CHECK
          </h2>
          <p className="text-xl md:text-2xl text-white/90 font-semibold">
            Your next examination is coming
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Option 1 */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white">Option 1: Same Old Story</h3>
            </div>
            
            <div className="space-y-4">
              {option1.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white/60 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Option 2 */}
          <div className="bg-white rounded-3xl p-8 border-2 border-white shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#625bff] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Option 2: Innovation Leadership</h3>
            </div>
            
            <div className="space-y-4">
              {option2.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statement */}
        <div className="text-center mb-12">
          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-2">
            The examiners know the difference.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-2">
            Your community deserves the difference.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
            Your institution needs the difference.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mb-12">
          <p className="text-3xl md:text-4xl font-black text-white mb-8">
            Make compliance count.
          </p>
          
          <button className="relative group px-12 py-5 bg-white text-[#625bff] font-bold text-xl rounded-full shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-3xl overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative">Transform Your CRA Strategy</span>
          </button>
        </div>

        {/* Contact Info */}
        <div className="text-center">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-white text-lg font-semibold mb-4">Questions?</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Email: cra@wisperai.com</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call: (510) 555-0100</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="underline cursor-pointer">Schedule with CRA Expert</span>
              </div>
            </div>
          </div>
        </div>

        {/* P.S. */}
        <div className="text-center mt-12">
          <p className="text-white/80 text-base md:text-lg italic max-w-3xl mx-auto">
            P.S. - Your last CRA exam feedback mentioned "opportunities for innovation." This is that opportunity. Documented, measurable, and examiner-approved.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA

