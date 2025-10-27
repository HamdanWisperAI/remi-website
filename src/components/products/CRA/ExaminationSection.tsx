import React from 'react'

const ExaminationSection = () => {
  const withoutPlatform = [
    { label: 'Activity', value: 'Bank provided financial literacy workshops' },
    { label: 'Attendance', value: '47 attendees across 4 sessions' },
    { label: 'Materials', value: 'Materials distributed: 200 pamphlets' },
    { label: 'Outcomes', value: 'Unable to track outcomes' },
    { label: 'Reach', value: 'Limited geographic reach' },
    { label: 'Evaluation', value: 'Adequate but not innovative' }
  ]

  const withPlatform = [
    { label: 'Activity', value: 'Bank deployed comprehensive digital financial wellness platform' },
    { label: 'Engagement', value: '4,847 active users, 83% completion rate' },
    { label: 'Measurable outcomes', value: '23-point credit score increase' },
    { label: 'Geographic reach', value: '87% of assessment area' },
    { label: 'Demographic data', value: '67% LMI participants' },
    { label: 'Behavioral change', value: '28% opened first savings' },
    { label: 'Longitudinal tracking', value: 'Sustained improvement at 12 months' },
    { label: 'Evaluation', value: 'Outstanding innovation in community development' }
  ]

  return (
    <section className="relative w-full bg-white overflow-hidden py-20 px-6 md:px-10 lg:px-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight mb-4">
            THE EXAMINATION ADVANTAGE
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-semibold">
            What your next CRA exam could look like
          </p>
        </div>

        {/* Comparison Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Without Platform */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl p-8 border-2 border-gray-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-400 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-700">Without Innovation Platform</h3>
            </div>
            
            <div className="space-y-4">
              {withoutPlatform.map((item, index) => (
                <div key={index} className="bg-white/50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-gray-500 uppercase mb-1">
                    {item.label}
                  </div>
                  <div className="text-base text-gray-700">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* With Platform */}
          <div className="bg-gradient-to-br from-[#625bff]/10 to-purple-50 rounded-3xl p-8 border-2 border-[#625bff] relative overflow-hidden">
            {/* Outstanding Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-[#625bff] to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
              ⭐ Outstanding
            </div>
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#625bff] rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">With Innovation Platform</h3>
            </div>
            
            <div className="space-y-4">
              {withPlatform.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-[#625bff]/20 hover:border-[#625bff] transition-colors duration-200">
                  <div className="text-sm font-semibold text-[#625bff] uppercase mb-1">
                    {item.label}
                  </div>
                  <div className="text-base text-gray-900 font-medium">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-gray-900">
            The difference is <span className="text-[#625bff]">measurable</span>, <span className="text-[#625bff]">documented</span>, and <span className="text-[#625bff]">examiner-approved</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ExaminationSection

