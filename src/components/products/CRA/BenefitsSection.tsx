'use client'

import React, { useState } from 'react'

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    {
      id: 0,
      title: 'Member Acquisition',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      benefits: [
        '"Free financial coaching" beats "free checking"',
        '74% want financial wellness from their FI',
        'Only 28% of institutions offer it',
        'First-mover advantage in communities'
      ]
    },
    {
      id: 1,
      title: 'Member Retention',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      benefits: [
        'Educated members stay longer',
        'Financial health creates loyalty',
        '2x referral rates from helped members',
        'Reduced support costs (self-service)'
      ]
    },
    {
      id: 2,
      title: 'Revenue Growth',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      benefits: [
        'Education drives product adoption',
        'Improved credit expands lending',
        'Financial health increases deposits',
        'Cross-sell through education'
      ]
    },
    {
      id: 3,
      title: 'Risk Reduction',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      benefits: [
        'Lower delinquency rates (10-33%)',
        'Better loan performance',
        'Reduced charge-offs',
        'Improved portfolio quality'
      ]
    }
  ]

  return (
    <section className="relative w-full bg-white overflow-hidden py-20 px-6 md:px-10 lg:px-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0 animate-pulse" style={{
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
            TURN COMPLIANCE INTO COMPETITIVE ADVANTAGE
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-semibold">
            How innovative CRA programs drive business
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center gap-3 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300
                ${activeTab === tab.id 
                  ? 'bg-[#625bff] text-white shadow-lg scale-105' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }
              `}
            >
              <span className={activeTab === tab.id ? 'text-white' : 'text-gray-500'}>
                {tab.icon}
              </span>
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl p-10 min-h-[300px]">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`
                transition-all duration-500
                ${activeTab === tab.id ? 'opacity-100 block' : 'opacity-0 hidden'}
              `}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tab.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-[#625bff] hover:shadow-md transition-all duration-300"
                  >
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-lg text-gray-700 leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection

