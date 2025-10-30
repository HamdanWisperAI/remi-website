'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Users, 
  Heart, 
  TrendUp, 
  Shield, 
  CaretDown,
  CheckCircle 
} from '@phosphor-icons/react'

interface BenefitItem {
  text: string
  stat: string
  detail: string
}

interface Benefit {
  id: string
  title: string
  icon: React.ElementType
  color: string
  stat: string
  statLabel: string
  tagline: string
  benefits: BenefitItem[]
  source: string
}

const BenefitsSection = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)

  const benefits: Benefit[] = [
    {
      id: 'acquisition',
      title: 'Member Acquisition',
      icon: Users,
      color: '#3b82f6',
      stat: '74%',
      statLabel: 'want financial wellness from their FI',
      tagline: 'Stand out in a crowded market',
      benefits: [
        {
          text: '"Free financial coaching" beats "free checking"',
          stat: '3x',
          detail: 'higher conversion than rate-based offers'
        },
        {
          text: 'Only 28% of institutions offer it',
          stat: '28%',
          detail: 'market penetration = first-mover advantage'
        },
        {
          text: 'Reach underserved communities',
          stat: '+68%',
          detail: 'with multi-language accessibility'
        }
      ],
      source: 'CFPB Consumer Survey 2023'
    },
    {
      id: 'retention',
      title: 'Member Retention',
      icon: Heart,
      color: '#ec4899',
      stat: '2.3x',
      statLabel: 'longer member lifetime value',
      tagline: 'Turn customers into loyal advocates',
      benefits: [
        {
          text: 'Educated members stay longer',
          stat: '+41%',
          detail: 'retention rate improvement'
        },
        {
          text: 'Financial health creates loyalty',
          stat: '2x',
          detail: 'referral rates from helped members'
        },
        {
          text: 'Reduced support costs',
          stat: '-35%',
          detail: 'through self-service education'
        }
      ],
      source: 'Banking Industry Research 2024'
    },
    {
      id: 'revenue',
      title: 'Revenue Growth',
      icon: TrendUp,
      color: '#10b981',
      stat: '$420',
      statLabel: 'additional revenue per educated member',
      tagline: 'Education drives product adoption',
      benefits: [
        {
          text: 'Improved credit expands lending',
          stat: '+26pts',
          detail: 'average credit score increase'
        },
        {
          text: 'Financial health increases deposits',
          stat: '+$1,800',
          detail: 'average savings increase'
        },
        {
          text: 'Cross-sell through education',
          stat: '3x',
          detail: 'product engagement lift'
        }
      ],
      source: 'CFPB 2019 Study'
    },
    {
      id: 'risk',
      title: 'Risk Reduction',
      icon: Shield,
      color: '#f59e0b',
      stat: '33%',
      statLabel: 'maximum delinquency reduction',
      tagline: 'Better borrowers = healthier portfolio',
      benefits: [
        {
          text: 'Lower delinquency rates',
          stat: '10-33%',
          detail: 'observed reduction range'
        },
        {
          text: 'Improved portfolio quality',
          stat: '-22%',
          detail: 'charge-off reduction'
        },
        {
          text: 'Better loan performance',
          stat: '+18%',
          detail: 'on-time payment improvement'
        }
      ],
      source: 'Federal Reserve Bank of NY'
    }
  ]

  return (
    <section className="relative w-full bg-linear-to-b from-white to-gray-50 overflow-hidden py-20 px-6 md:px-10 lg:px-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Turn Compliance Into Competitive Advantage
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
            How innovative CRA programs drive measurable business results
          </p>
        </div>

        {/* Desktop: Tabs (hidden on mobile) */}
        <div className="hidden md:block">
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              const isActive = activeTab === index
              
              return (
                <motion.button
                  key={benefit.id}
                  onClick={() => setActiveTab(index)}
                  className={`
                    flex items-center gap-4 px-8 py-5 rounded-xl transition-all border-2
                    ${isActive 
                      ? 'bg-white shadow-xl scale-105 border-gray-200' 
                      : 'bg-gray-50 hover:bg-white hover:shadow-lg border-transparent'
                    }
                  `}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center transition-all shadow-sm"
                    style={{ 
                      backgroundColor: isActive ? benefit.color : `${benefit.color}20`,
                    }}
                  >
                    <Icon 
                      size={28} 
                      weight={isActive ? 'duotone' : 'regular'} 
                      style={{ color: isActive ? 'white' : benefit.color }}
                    />
                  </div>
                  <div className="text-left">
                    <div className={`font-black text-lg md:text-xl ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                      {benefit.title}
                    </div>
                    <div className={`text-sm md:text-base mt-1 font-medium ${isActive ? 'text-gray-600' : 'text-gray-500'}`}>
                      {benefit.tagline}
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-linear-to-br from-white to-gray-50 border-2 border-gray-200 rounded-3xl p-8 md:p-12"
            >
              {benefits[activeTab] && (
                <>
                  {/* Header with stat */}
                  <div className="flex items-start gap-6 mb-10 pb-10 border-b border-gray-200">
                    <div 
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                      style={{ backgroundColor: `${benefits[activeTab].color}20` }}
                    >
                      {React.createElement(benefits[activeTab].icon, {
                        size: 36,
                        weight: 'duotone',
                        style: { color: benefits[activeTab].color }
                      })}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight">
                        {benefits[activeTab].tagline}
                      </h3>
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className="text-5xl md:text-6xl font-black leading-none tracking-tight" style={{ color: benefits[activeTab].color }}>
                          {benefits[activeTab].stat}
                        </span>
                        <span className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                          {benefits[activeTab].statLabel}
                        </span>
                      </div>
                      <p className="text-xs md:text-sm text-gray-500 font-medium">Source: {benefits[activeTab].source}</p>
                    </div>
                  </div>

                  {/* Benefits grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefits[activeTab].benefits.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-xl border-2 p-6 md:p-7 hover:shadow-lg transition-all"
                        style={{ borderColor: `${benefits[activeTab].color}20` }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <CheckCircle size={24} weight="fill" style={{ color: benefits[activeTab].color }} />
                          <span className="text-3xl md:text-4xl font-black leading-none tracking-tight" style={{ color: benefits[activeTab].color }}>
                            {item.stat}
                          </span>
                        </div>
                        <p className="text-gray-900 font-black mb-3 text-base md:text-lg leading-tight">{item.text}</p>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed">{item.detail}</p>
                      </motion.div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Mobile: Accordion (hidden on desktop) */}
        <div className="md:hidden space-y-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            const isOpen = openAccordion === benefit.id
            
            return (
              <div
                key={benefit.id}
                className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenAccordion(isOpen ? null : benefit.id)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div 
                      className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                      style={{ backgroundColor: `${benefit.color}20` }}
                    >
                      <Icon size={28} weight="duotone" style={{ color: benefit.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-black text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm md:text-base text-gray-600 mt-1 leading-relaxed">
                        <span className="font-black text-lg" style={{ color: benefit.color }}>
                          {benefit.stat}
                        </span>{' '}
                        {benefit.statLabel}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CaretDown size={24} className="text-gray-400" />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 border-t border-gray-200 pt-6 space-y-5">
                        <p className="font-black text-gray-900 mb-5 text-xl leading-tight">
                          {benefit.tagline}
                        </p>
                        
                        {benefit.benefits.map((item, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-50 rounded-lg p-5"
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <CheckCircle size={20} weight="fill" style={{ color: benefit.color }} />
                              <span className="text-2xl font-black leading-none" style={{ color: benefit.color }}>
                                {item.stat}
                              </span>
                            </div>
                            <p className="text-gray-900 font-black mb-2 text-base leading-tight">{item.text}</p>
                            <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
                          </div>
                        ))}
                        
                        <p className="text-xs text-gray-500 text-center pt-4 border-t border-gray-200 font-medium">
                          Source: {benefit.source}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection
