import React from 'react'

const RegulatorsSection = () => {
  const innovationItems = [
    'Digital delivery to underserved communities',
    'Measurable financial health improvements',
    'Scalable beyond traditional boundaries',
    'Responsive to community needs',
    'Documented behavioral change'
  ]

  const documentationItems = [
    'Individual-level tracking',
    'Outcome measurement',
    'Geographic distribution',
    'Demographic insights',
    'Longitudinal impact'
  ]

  const activitiesItems = [
    'Mobile-first financial education',
    'Real-time financial guidance',
    'Personalized learning paths',
    'Product-integrated education',
    'Behavioral coaching programs'
  ]

  return (
    <section className="relative w-full bg-white overflow-hidden py-20 px-6 md:px-10 lg:px-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0" style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(98, 91, 255, 0.1) 25%, rgba(98, 91, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.1) 75%, rgba(98, 91, 255, 0.1) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(98, 91, 255, 0.1) 25%, rgba(98, 91, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.1) 75%, rgba(98, 91, 255, 0.1) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-4">
            WHAT REGULATORS ACTUALLY WANT
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-semibold">
            Straight from recent examinations and guidance
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          {/* Column 1: Innovation That Counts */}
          <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:border-[#625bff] hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#625bff] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Innovation That Counts</h3>
            </div>
            
            <div className="space-y-3">
              {innovationItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Documentation They Trust */}
          <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:border-[#625bff] hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#625bff] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Documentation They Trust</h3>
            </div>
            
            <div className="space-y-3">
              {documentationItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Activities Getting Enhanced Credit */}
          <div className="group bg-white border-2 border-gray-200 rounded-2xl p-8 transition-all duration-300 hover:border-[#625bff] hover:shadow-xl hover:-translate-y-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#625bff] rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Activities Getting Enhanced Credit</h3>
            </div>
            
            <div className="space-y-3">
              {activitiesItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3 opacity-0 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Statement */}
        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-[#625bff]">
            We deliver all of this. Automatically.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default RegulatorsSection

