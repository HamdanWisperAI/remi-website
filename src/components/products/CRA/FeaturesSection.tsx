'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Globe, 
  Eye, 
  MapPin, 
  Users, 
  Handshake,
  CheckCircle 
} from '@phosphor-icons/react'

interface Feature {
  id: number
  title: string
  description: string
  impact: string
  icon: React.ElementType
  items: string[]
}

interface FeatureCategory {
  id: string
  name: string
  icon: React.ElementType
  description: string
  features: Feature[]
}

const FeaturesSection = () => {
  const categories: FeatureCategory[] = [
    {
      id: 'accessibility',
      name: 'Accessibility',
      icon: Eye,
      description: 'Universal access for all members',
      features: [
        {
          id: 1,
          title: 'Meet Every Member Where They Are',
          description: 'Multi-language accessibility ensures no community member is excluded from financial education',
          impact: 'Reach 68% more members in underserved communities',
          icon: Globe,
          items: [
            'Spanish, Vietnamese, Mandarin standard',
            '15+ additional languages available',
            'Cultural customization included'
          ]
        },
        {
          id: 2,
          title: 'Universal Access Guaranteed',
          description: 'ADA compliant design ensures every member can access financial education',
          impact: 'Serve 100% of your membership, including 26% with disabilities',
          icon: Eye,
          items: [
            'Full ADA compliance',
            'Screen reader compatible',
            'Adjustable text size & high contrast'
          ]
        }
      ]
    },
    {
      id: 'reporting',
      name: 'CRA Reporting',
      icon: MapPin,
      description: 'Automated compliance tracking',
      features: [
        {
          id: 3,
          title: 'CRA Reporting Made Simple',
          description: 'Automated census tract tracking meets examiner requirements automatically',
          impact: 'Save 40+ hours per CRA exam cycle',
          icon: MapPin,
          items: [
            'Census tract tracking',
            'LMI area identification',
            'Rural & opportunity zone mapping'
          ]
        },
        {
          id: 4,
          title: 'Know Your Impact, Prove Your Worth',
          description: 'Demographic tracking proves your community development investment',
          impact: 'Qualify for CRA consideration on every dollar invested',
          icon: Users,
          items: [
            'Income level tracking',
            'Age distribution & education insights',
            'Employment status & household data'
          ]
        }
      ]
    },
    {
      id: 'partnerships',
      name: 'Partnerships',
      icon: Handshake,
      description: 'Amplify reach through collaboration',
      features: [
        {
          id: 5,
          title: 'Extend Your Reach Through Partners',
          description: 'Co-branding with community organizations amplifies your impact',
          impact: '3x higher program completion when delivered through trusted partners',
          icon: Handshake,
          items: [
            'Community organization co-branding',
            'School system integration',
            'Workforce development alignment'
          ]
        }
      ]
    }
  ]

  const [activeCategory, setActiveCategory] = useState<FeatureCategory>(categories[0])

  return (
    <section className="relative w-full bg-linear-to-b from-gray-50 to-white overflow-hidden py-20 px-6 md:px-10 lg:px-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Benefit-Focused Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-4">
            Built for Examiner Approval
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-semibold max-w-3xl mx-auto">
            Every feature designed to meet CRA requirements while maximizing member impact.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const CategoryIcon = category.icon
            const isActive = activeCategory.id === category.id
            
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category)}
                className={`
                  flex items-center gap-3 px-6 py-3 rounded-xl transition-all
                  ${isActive 
                    ? 'bg-white shadow-lg scale-105' 
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                  }
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div 
                  className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm transition-all"
                  style={{ 
                    backgroundColor: isActive 
                      ? '#625bff' 
                      : '#625bff15',
                    border: isActive 
                      ? '1.5px solid #625bff'
                      : '1.5px solid #625bff25',
                  }}
                >
                  <CategoryIcon 
                    size={21} 
                    weight={isActive ? 'fill' : 'regular'} 
                    style={{ color: isActive ? 'white' : '#625bff' }}
                  />
                </div>
                <div className="text-left">
                  <div className={`font-semibold ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>
                    {category.name}
                  </div>
                  <div className="text-xs text-gray-500">{category.description}</div>
                </div>
              </motion.button>
            )
          })}
        </div>

        {/* Features Grid - Animated Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {activeCategory.features.map((feature, index) => {
              const Icon = feature.icon
              
              return (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8 hover:border-[#625bff] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-linear-to-br from-[#625bff] to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} weight="duotone" className="text-white" />
                  </div>
                  
                  {/* Title - Benefit First */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Impact Stat */}
                  <div className="bg-[#625bff]/5 rounded-lg p-4 mb-6 border border-[#625bff]/10">
                    <div className="text-2xl md:text-3xl font-black text-[#625bff] mb-1">
                      {feature.impact.split(' ')[0]}
                    </div>
                    <div className="text-xs md:text-sm text-gray-700 font-medium">
                      {feature.impact.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                  
                  {/* Capability Items - Max 3 */}
                  <div className="space-y-3">
                    {feature.items.slice(0, 3).map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle 
                          size={20} 
                          weight="fill" 
                          className="text-green-600 mt-0.5 shrink-0" 
                        />
                        <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default FeaturesSection
