'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XCircle, CheckCircle as CheckCircleIcon } from '@phosphor-icons/react'

interface ComparisonItem {
  label: string
  value: string
}

const ExaminationSection = () => {
  const withoutPlatform: ComparisonItem[] = [
    { label: 'Activity', value: 'Bank provided financial literacy workshops' },
    { label: 'Attendance', value: '47 attendees across 4 sessions' },
    { label: 'Materials', value: 'Materials distributed: 200 pamphlets' },
    { label: 'Outcomes', value: 'Unable to track outcomes' },
    { label: 'Reach', value: 'Limited geographic reach' },
    { label: 'Evaluation', value: 'Adequate but not innovative' }
  ]

  const withPlatform: ComparisonItem[] = [
    { label: 'Activity', value: 'Bank deployed comprehensive digital financial wellness platform' },
    { label: 'Engagement', value: '4,847 active users, 83% completion rate' },
    { label: 'Measurable outcomes', value: '23-point credit score increase' },
    { label: 'Geographic reach', value: '87% of assessment area' },
    { label: 'Demographic data', value: '67% LMI participants' },
    { label: 'Behavioral change', value: '28% opened first savings' },
    { label: 'Longitudinal tracking', value: 'Sustained improvement at 12 months' },
    { label: 'Evaluation', value: 'Outstanding innovation in community development' }
  ]

  const tabs = [
    {
      id: 'without',
      name: 'Without Platform',
      icon: XCircle,
      data: withoutPlatform,
      color: '#ef4444' // Red
    },
    {
      id: 'with',
      name: 'With Innovation Platform',
      icon: CheckCircleIcon,
      data: withPlatform,
      color: '#10b981' // Green
    }
  ]

  const [activeTab, setActiveTab] = useState(tabs[1]) // Start with "With Platform"

  return (
    <section className="relative w-full bg-white overflow-hidden py-20 px-6 md:px-10 lg:px-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            The Examination Advantage
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
            What your next CRA exam could look like
          </p>
        </div>

        {/* Comparison Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const TabIcon = tab.icon
            const isActive = activeTab.id === tab.id
            
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
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
                {/* Traffic Light Indicator */}
                <div className="relative">
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center transition-all shadow-sm"
                    style={{ 
                      backgroundColor: isActive ? tab.color : `${tab.color}20`,
                    }}
                  >
                    <TabIcon 
                      size={28} 
                      weight={isActive ? 'fill' : 'regular'} 
                      style={{ color: isActive ? 'white' : tab.color }}
                    />
                  </div>
                  {/* Glow effect when active */}
                  {isActive && (
                    <div 
                      className="absolute inset-0 rounded-full blur-md opacity-50 animate-pulse"
                      style={{ backgroundColor: tab.color }}
                    />
                  )}
                </div>
                <div className="text-left">
                  <div className={`font-black text-lg md:text-xl ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                    {tab.name}
                  </div>
                  <div className={`text-sm md:text-base mt-1 font-medium ${
                    tab.id === 'with' 
                      ? isActive ? 'text-green-600' : 'text-green-500'
                      : isActive ? 'text-red-600' : 'text-red-500'
                  }`}>
                    {tab.id === 'with' ? 'Comprehensive approach' : 'Limited approach'}
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Comparison Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`
              rounded-3xl p-8 md:p-12 border-2 relative overflow-hidden
              ${activeTab.id === 'with' 
                ? 'bg-linear-to-br from-green-50/50 to-emerald-50/30 border-green-200' 
                : 'bg-linear-to-br from-red-50/50 to-rose-50/30 border-red-200'
              }
            `}
          >
            {/* Header with Icon */}
            <div className="flex items-center gap-5 mb-10">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg shrink-0"
                style={{ 
                  backgroundColor: activeTab.color
                }}
              >
                {activeTab.id === 'with' ? (
                  <CheckCircleIcon size={32} weight="fill" className="text-white" />
                ) : (
                  <XCircle size={32} weight="fill" className="text-white" />
                )}
              </div>
              <div>
                <h3 className={`text-3xl md:text-4xl font-black ${activeTab.id === 'with' ? 'text-gray-900' : 'text-gray-800'} leading-tight mb-2`}>
                  {activeTab.name}
                </h3>
                <p className={`text-base md:text-lg mt-1 font-medium ${
                  activeTab.id === 'with' ? 'text-green-700' : 'text-red-700'
                }`}>
                  {activeTab.id === 'with' 
                    ? 'Measurable outcomes with comprehensive tracking' 
                    : 'Limited visibility and tracking capabilities'
                  }
                </p>
              </div>
            </div>
            
            {/* Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {activeTab.data.map((item, index) => {
                // Extract numbers from values for emphasis
                const numberMatch = item.value.match(/[\d,]+/g)
                const parts = numberMatch 
                  ? item.value.split(new RegExp(`(${numberMatch.join('|')})`))
                  : [item.value]
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`
                      rounded-xl p-6 md:p-7 transition-all duration-200 bg-white border-2
                      ${activeTab.id === 'with' 
                        ? 'border-green-200 hover:border-green-300 hover:shadow-lg' 
                        : 'border-red-200 hover:border-red-300 hover:shadow-lg'
                      }
                    `}
                  >
                    <div className={`text-xs md:text-sm font-black uppercase tracking-widest mb-3 ${
                      activeTab.id === 'with' ? 'text-green-700' : 'text-red-700'
                    }`}>
                      {item.label}
                    </div>
                    <div className={`text-base md:text-lg leading-relaxed font-medium ${
                      activeTab.id === 'with' ? 'text-gray-900' : 'text-gray-800'
                    }`}>
                      {parts.map((part, idx) => {
                        if (numberMatch && numberMatch.includes(part)) {
                          return (
                            <span key={idx} className="font-black text-xl md:text-2xl text-gray-900">
                              {part}
                            </span>
                          )
                        }
                        return <span key={idx}>{part}</span>
                      })}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-2xl md:text-3xl font-black text-gray-900 leading-relaxed">
            The difference is <span className="text-green-600">measurable</span>, <span className="text-green-600">documented</span>, and <span className="text-green-600">examiner-approved</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ExaminationSection
