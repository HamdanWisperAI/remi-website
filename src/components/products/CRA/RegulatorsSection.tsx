'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Lightbulb, 
  FileText, 
  Lightning, 
  CheckCircle
} from '@phosphor-icons/react'

interface RegulatoryItem {
  point: string
  regulation: string
  detail: string
}

interface RegulatoryFeature {
  id: string
  title: string
  icon: React.ElementType
  color: string
  description: string
  items: RegulatoryItem[]
}

const regulatoryFeatures: RegulatoryFeature[] = [
  {
    id: 'innovation',
    title: 'Innovation That Counts',
    icon: Lightbulb as React.ElementType,
    color: '#3b82f6',
    description: 'What examiners look for in modern CRA programs',
    items: [
      {
        point: 'Digital delivery to underserved communities',
        regulation: 'OCC Bulletin 2020-38',
        detail: 'Addresses geographic limitations of traditional programs'
      },
      {
        point: 'Measurable financial health improvements',
        regulation: 'CRA Final Rule §25.12(h)',
        detail: 'Demonstrates community development impact'
      },
      {
        point: 'Scalable beyond traditional boundaries',
        regulation: 'OCC Bulletin 2020-38',
        detail: 'Reach assessment area + broader statewide region'
      },
      {
        point: 'Responsive to community needs',
        regulation: 'CRA §25.12(c)',
        detail: 'Assessment area demographics alignment'
      },
      {
        point: 'Documented behavioral change',
        regulation: 'Interagency Q&A §__12(h)–3',
        detail: 'Sustainable outcomes beyond program completion'
      }
    ]
  },
  {
    id: 'documentation',
    title: 'Documentation They Trust',
    icon: FileText as React.ElementType,
    color: '#10b981',
    description: 'Data requirements for examination consideration',
    items: [
      {
        point: 'Individual-level tracking',
        regulation: 'CRA Exam Procedures',
        detail: 'Member-specific participation and outcomes'
      },
      {
        point: 'Outcome measurement',
        regulation: '§25.12(h) Community Development',
        detail: 'Quantified financial health improvements'
      },
      {
        point: 'Geographic distribution',
        regulation: 'CRA §25.05(c)',
        detail: 'Census tract-level LMI area identification'
      },
      {
        point: 'Demographic insights',
        regulation: 'HMDA-style reporting',
        detail: 'Income level, age, employment status tracking'
      },
      {
        point: 'Longitudinal impact',
        regulation: 'CRA §25.21 Performance Tests',
        detail: '12+ month sustained improvements'
      }
    ]
  },
  {
    id: 'activities',
    title: 'Activities Getting Enhanced Credit',
    icon: Lightning as React.ElementType,
    color: '#f59e0b',
    description: 'Programs receiving favorable examination consideration',
    items: [
      {
        point: 'Mobile-first financial education',
        regulation: 'OCC Bulletin 2020-38',
        detail: 'Innovation in service delivery methods'
      },
      {
        point: 'Real-time financial guidance',
        regulation: 'CRA §25.12(h)',
        detail: 'Responsive to life moments and decisions'
      },
      {
        point: 'Personalized learning paths',
        regulation: 'Community Development',
        detail: 'Tailored to member demographics and needs'
      },
      {
        point: 'Product-integrated education',
        regulation: 'OCC Bulletin 2020-38',
        detail: 'Direct connection to financial products'
      },
      {
        point: 'Behavioral coaching programs',
        regulation: 'CRA Final Rule',
        detail: 'Sustained engagement and outcomes'
      }
    ]
  }
]

const RegulatorsSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-50 to-white overflow-hidden py-20 px-4 md:px-10 lg:px-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight">
            Built for <span className="text-blue-600">CRA Examination</span> Success
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
            Every feature aligns with <span className="font-semibold text-gray-900">regulatory guidance</span> and <span className="font-semibold text-gray-900">examination procedures</span>
          </p>
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-2.5 bg-blue-50 rounded-full border border-blue-200 shadow-sm">
            <FileText size={18} weight="duotone" className="text-blue-600" />
            <span className="text-sm font-bold text-blue-700 tracking-wide">
              References: <span className="font-semibold">OCC Bulletin 2020-38</span> | <span className="font-semibold">CRA Final Rule §25.12</span> | <span className="font-semibold">Interagency Q&A</span>
            </span>
        </div>
        </motion.div>

        {/* Desktop: Bento Grid Layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
            
            {/* Featured card - larger (7 columns) */}
            <motion.div 
              className="md:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="group bg-white rounded-2xl border-2 border-gray-200 p-8 h-full hover:border-blue-600 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Lightbulb size={32} weight="duotone" className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 leading-tight tracking-tight">
                      Innovation That Counts
                    </h3>
                    <p className="text-base text-gray-600 leading-relaxed font-medium">{regulatoryFeatures[0].description}</p>
              </div>
            </div>
            
            <div className="space-y-3">
                  {regulatoryFeatures[0].items.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                    >
                      <CheckCircle size={18} weight="fill" className="text-blue-600 mt-1 shrink-0" />
                      <div className="flex-1">
                        <p className="font-bold text-gray-900 mb-2 text-base leading-snug">{item.point}</p>
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.detail}</p>
                        <span className="inline-block text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1.5 rounded-full tracking-wide uppercase">
                          {item.regulation}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Two smaller cards (5 columns total) */}
            <div className="md:col-span-5 space-y-6">
              {regulatoryFeatures.slice(1).map((feature, idx) => (
                <motion.div 
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                >
                  <div 
                    className="group bg-white rounded-2xl border-2 border-gray-200 p-6 hover:shadow-xl transition-all duration-300 h-full"
                    style={{ 
                      borderColor: 'rgb(229, 231, 235)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = feature.color
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgb(229, 231, 235)'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all"
                        style={{ backgroundColor: `${feature.color}20` }}
                      >
                        <feature.icon size={24} weight="duotone" style={{ color: feature.color }} />
                      </div>
                      <h3 className="text-lg md:text-xl font-extrabold text-gray-900 leading-tight">{feature.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed font-medium">{feature.description}</p>
                    <div className="space-y-3">
                      {feature.items.slice(0, 3).map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-start gap-2.5">
                          <CheckCircle size={16} weight="fill" style={{ color: feature.color }} className="mt-0.5 shrink-0" />
                          <div className="flex-1">
                            <p className="text-sm font-bold text-gray-900 leading-snug mb-1">{item.point}</p>
                            <span className="text-xs font-semibold text-gray-600 mt-1 block uppercase tracking-wide">{item.regulation}</span>
                          </div>
                        </div>
                      ))}
                      <div className="pt-3 border-t border-gray-100">
                        <span 
                          className="text-sm font-bold hover:underline cursor-pointer inline-flex items-center gap-1.5 transition-all"
                          style={{ color: feature.color }}
                        >
                          View all {feature.items.length} requirements <span className="font-extrabold">→</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
            </div>
            
        {/* Mobile: Tabs */}
        <div className="md:hidden">
          {/* Tab Buttons */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`
              .overflow-x-auto::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {regulatoryFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              const isActive = activeTab === index
              
              return (
                <motion.button
                  key={feature.id}
                  onClick={() => setActiveTab(index)}
                  className={`
                    flex items-center gap-3 px-6 py-4 rounded-xl transition-all border-2 flex-shrink-0
                    ${isActive 
                      ? 'bg-white shadow-lg border-gray-300' 
                      : 'bg-gray-50 hover:bg-white border-transparent'
                    }
                  `}
                  whileTap={{ scale: 0.98 }}
                >
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all"
                    style={{ 
                      backgroundColor: isActive ? feature.color : `${feature.color}20`,
                    }}
                  >
                    <IconComponent 
                      size={24} 
                      weight={isActive ? 'duotone' : 'regular'} 
                      style={{ color: isActive ? 'white' : feature.color }}
                    />
                  </div>
                  <div className="text-left">
                    <div className={`font-extrabold text-base leading-tight ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                      {feature.title.split(' ')[0]} {feature.title.split(' ')[1]}
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
            >
              <div className="bg-white rounded-2xl border-2 border-gray-200 p-6">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-200">
                  {(() => {
                    const Icon = regulatoryFeatures[activeTab].icon
                    return (
                      <div 
                        className="w-14 h-14 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${regulatoryFeatures[activeTab].color}20` }}
                      >
                        <Icon size={28} weight="duotone" style={{ color: regulatoryFeatures[activeTab].color }} />
              </div>
                    )
                  })()}
                  <div>
                    <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 leading-tight mb-1">{regulatoryFeatures[activeTab].title}</h3>
                    <p className="text-sm md:text-base text-gray-600 mt-1 leading-relaxed font-medium">{regulatoryFeatures[activeTab].description}</p>
            </div>
                </div>

                <div className="space-y-4">
                  {regulatoryFeatures[activeTab].items.map((item, idx) => (
                    <motion.div 
                      key={idx}
                      className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle 
                          size={20} 
                          weight="fill" 
                          style={{ color: regulatoryFeatures[activeTab].color }} 
                          className="shrink-0 mt-0.5"
                        />
                        <p className="font-bold text-gray-900 text-base leading-snug">{item.point}</p>
                      </div>
                      <div className="ml-8">
                        <p className="text-sm text-gray-600 mb-3 leading-relaxed">{item.detail}</p>
                        <div 
                          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide"
                          style={{ 
                            backgroundColor: `${regulatoryFeatures[activeTab].color}10`,
                            color: regulatoryFeatures[activeTab].color
                          }}
                        >
                          <FileText size={14} weight="duotone" />
                          {item.regulation}
                        </div>
                      </div>
                    </motion.div>
              ))}
            </div>
          </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border-2 border-blue-200 p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
              We Deliver All of This. <span className="text-blue-600">Automatically.</span>
            </h3>
            <p className="text-base md:text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
              Every <span className="font-bold text-gray-900">data point</span>, every <span className="font-bold text-gray-900">regulatory requirement</span>, every <span className="font-bold text-gray-900">documentation standard</span>—built into the platform
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:scale-105 transition-transform shadow-lg tracking-wide">
              See Examination Documentation Demo
            </button>
          </div>
        </motion.div>

        {/* Regulatory References Footer */}
        <motion.div 
          className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
            <strong className="font-extrabold text-gray-900">Regulatory Framework:</strong> Based on <span className="font-semibold">OCC Bulletin 2020-38</span> (Innovation in Service Delivery), 
            <span className="font-semibold"> CRA Final Rule §25.12(h)</span> (Community Development Services), <span className="font-semibold">CRA §25.05(c)</span> (Assessment Areas), 
            and <span className="font-semibold">Interagency Q&A</span> on Community Reinvestment. All platform features designed for <span className="font-bold text-gray-900">positive examination consideration</span> under current CRA regulations.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default RegulatorsSection
