import React from 'react'

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: 'Texas Credit Union',
      description: 'Deployed mobile financial literacy',
      metrics: [
        { label: '85% completion rate achieved', value: '85%' },
        { label: '32-point credit score improvement', value: '+32' },
        { label: '33% delinquency reduction', value: '-33%' }
      ],
      result: 'Outstanding CRA rating',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'California Community Bank',
      description: 'Launched bilingual education platform',
      metrics: [
        { label: 'Reached 65% unbanked/underbanked', value: '65%' },
        { label: 'Documented behavior change', value: '✓' },
        { label: 'Increased LMI lending 23%', value: '+23%' }
      ],
      result: 'Innovation recognition',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Midwest Regional Bank',
      description: 'Implemented across 12 branches',
      metrics: [
        { label: 'Rural market penetration 78%', value: '78%' },
        { label: 'Measurable outcomes tracked', value: '✓' },
        { label: 'Regulatory praise for innovation', value: '★★★' }
      ],
      result: 'Expanded assessment area approved',
      color: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-gray-50 overflow-hidden py-20 px-6 md:px-10 lg:px-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-4">
            REAL CRA SUCCESS STORIES
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-semibold">
            What examiners are recognizing
          </p>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Header */}
              <div className={`h-3 bg-gradient-to-r ${study.color}`}></div>
              
              {/* Card Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {study.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-lg mb-6">
                  {study.description}
                </p>
                
                {/* Metrics */}
                <div className="space-y-3 mb-6">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group-hover:bg-[#625bff]/5 transition-colors duration-300">
                      <span className="text-sm text-gray-600">{metric.label}</span>
                      <span className="text-lg font-bold text-[#625bff]">{metric.value}</span>
                    </div>
                  ))}
                </div>
                
                {/* Result Badge */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold text-gray-500">Result:</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900 mt-2">
                    {study.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 italic">
            Based on state mandate research and program evaluations
          </p>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection

