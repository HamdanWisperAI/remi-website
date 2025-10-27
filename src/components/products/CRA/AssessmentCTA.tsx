import React from 'react'

const AssessmentCTA = () => {
  const paths = [
    {
      title: 'CRA Innovation Assessment',
      subtitle: 'Free evaluation of current programs',
      features: [
        'Innovation gap analysis',
        'Regulatory alignment review',
        'Quick win identification',
        'ROI projection'
      ],
      cta: 'Get Assessment',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Pilot Program',
      subtitle: '90-day targeted deployment',
      features: [
        '500 member pilot',
        'Full tracking enabled',
        'Impact measurement included',
        'Examiner-ready reporting'
      ],
      cta: 'Start Pilot',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-[#625bff] to-purple-600',
      featured: true
    },
    {
      title: 'Full Implementation',
      subtitle: 'Complete CRA innovation solution',
      features: [
        'Unlimited members',
        'All features enabled',
        'Dedicated success manager',
        'Examination support included'
      ],
      cta: 'Deploy Now',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden py-20 px-6 md:px-10 lg:px-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-4">
            START YOUR CRA INNOVATION JOURNEY
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-semibold">
            Three paths to enhanced credit
          </p>
        </div>

        {/* Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {paths.map((path, index) => (
            <div
              key={index}
              className={`
                group relative bg-white rounded-3xl overflow-hidden border-2
                ${path.featured ? 'border-[#625bff] shadow-2xl md:-translate-y-4' : 'border-gray-200'}
                hover:shadow-2xl hover:-translate-y-2 transition-all duration-500
              `}
            >
              {/* Featured Badge */}
              {path.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#625bff] to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                  ⭐ Recommended
                </div>
              )}

              {/* Gradient Header */}
              <div className={`h-3 bg-gradient-to-r ${path.color}`}></div>

              {/* Card Content */}
              <div className="p-8">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${path.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {path.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {path.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-600 text-base mb-6">
                  {path.subtitle}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {path.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <p className="text-sm text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`
                    w-full py-4 px-6 rounded-xl font-bold text-base transition-all duration-300
                    ${path.featured 
                      ? 'bg-gradient-to-r from-[#625bff] to-purple-600 text-white hover:shadow-lg hover:scale-105' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }
                  `}
                >
                  {path.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600">
            Not sure which path is right for you? <span className="text-[#625bff] font-bold cursor-pointer hover:underline">Schedule a consultation →</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default AssessmentCTA

