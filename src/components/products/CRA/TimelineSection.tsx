import React from 'react'

const TimelineSection = () => {
  const timeline = [
    {
      number: 1,
      title: 'Platform Launch',
      items: [
        'Technical integration complete',
        'Content customization finished',
        'Staff training delivered',
        'Soft launch with pilot group'
      ]
    },
    {
      number: 2,
      title: 'Community Rollout',
      items: [
        'Marketing campaign launch',
        'Partner organization integration',
        'Community event kickoffs',
        'Media coverage secured'
      ]
    },
    {
      number: 3,
      title: 'Scale Achievement',
      items: [
        '1,000+ active users',
        '80%+ completion rates',
        'Initial outcomes documented',
        'Geographic coverage expanding'
      ]
    },
    {
      number: 4,
      title: 'Impact Documentation',
      items: [
        'First behavioral changes measured',
        'Credit improvements beginning',
        'Product adoption tracking',
        'Community feedback collected'
      ]
    },
    {
      number: 5,
      title: 'Report Preparation',
      items: [
        'CRA documentation package',
        'Examiner-ready dashboards',
        'Impact visualization tools',
        'Success story compilation'
      ]
    },
    {
      number: 6,
      title: 'Examination Ready',
      items: [
        'Full platform deployment',
        'Measurable outcomes proven',
        'Innovation clearly demonstrated',
        'Outstanding rating positioned'
      ]
    }
  ]

  return (
    <section className="relative w-full bg-white overflow-hidden py-24 px-6 md:px-10 lg:px-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-3">
            From Contract to Outstanding
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-semibold">
            Your 6-month roadmap to CRA success
          </p>
        </div>

        {/* Desktop: Horizontal Timeline */}
        <div className="hidden lg:block relative mb-8">
          {/* Progress Bar */}
          <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 rounded-full">
            <div className="h-full w-full bg-gradient-to-r from-[#625bff] via-purple-500 to-orange-500 rounded-full"></div>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-6 gap-4">
            {timeline.map((item, index) => (
              <div key={index} className="relative">
                {/* Connected Node */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#625bff] flex items-center justify-center shadow-lg z-20">
                  <span className="font-bold text-[#625bff] text-lg">{item.number}</span>
                </div>

                {/* Card */}
                <div className="mt-20 bg-white rounded-2xl border border-gray-200 p-7 hover:shadow-lg hover:border-gray-300 transition-all duration-300">
                  <div className="text-xs font-bold text-[#625bff] uppercase tracking-wider mb-3">
                    Month {item.number}
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-5 text-lg leading-tight">
                    {item.title}
                  </h3>
                  
                  <ul className="space-y-3">
                    {item.items.map((point, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="text-[#625bff] font-bold text-sm mt-0.5">•</span>
                        <span className="text-sm text-gray-600 leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Vertical Timeline */}
        <div className="lg:hidden relative pl-8">
          {/* Vertical Progress Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#625bff] via-purple-500 to-orange-500 rounded-full"></div>

          {timeline.map((item, index) => (
            <div key={index} className="relative mb-10 last:mb-0">
              {/* Node */}
              <div className="absolute -left-[22px] top-1 w-10 h-10 rounded-full bg-[#625bff] flex items-center justify-center shadow-md z-10">
                <span className="font-bold text-white text-base">{item.number}</span>
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
                <div className="text-xs font-bold text-[#625bff] uppercase tracking-wider mb-2">
                  Month {item.number}
                </div>
                
                <h3 className="font-bold text-gray-900 mb-4 text-lg">
                  {item.title}
                </h3>
                
                <ul className="space-y-3">
                  {item.items.map((point, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <span className="text-[#625bff] font-bold text-sm mt-0.5">•</span>
                      <span className="text-sm text-gray-600 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="inline-block bg-gradient-to-r from-[#625bff] to-purple-600 rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              Ready to get started?
            </h3>
            <p className="text-white/90 text-lg mb-8 max-w-xl">
              Let&apos;s discuss your implementation timeline and get you on the path to an Outstanding CRA rating
            </p>
            <button className="bg-white text-[#625bff] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimelineSection

