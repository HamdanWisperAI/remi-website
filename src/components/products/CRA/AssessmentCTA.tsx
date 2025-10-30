'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ClipboardText, 
  Lightning, 
  Rocket, 
  CheckCircle, 
  ArrowRight 
} from '@phosphor-icons/react'

const AssessmentCTA = () => {
  const paths = [
    {
      title: 'CRA Innovation Assessment',
      subtitle: 'Strategic evaluation of current programs',
      features: [
        'Innovation gap analysis',
        'Regulatory alignment review',
        'Quick win identification',
        'ROI projection'
      ],
      cta: 'Request Assessment',
      ctaLink: '#assessment',
      icon: ClipboardText,
      color: 'from-blue-600 to-blue-700',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-50'
    },
    {
      title: 'Pilot Program',
      subtitle: '90-day strategic deployment',
      features: [
        '500 member pilot program',
        'Comprehensive tracking and analytics',
        'Impact measurement and reporting',
        'Examiner-ready documentation'
      ],
      cta: 'Start Pilot Program',
      ctaLink: '#pilot',
      icon: Lightning,
      color: 'from-[#625bff] to-blue-700',
      borderColor: 'border-[#625bff]',
      bgColor: 'bg-[#625bff]/5',
      featured: true
    },
    {
      title: 'Enterprise Implementation',
      subtitle: 'Complete CRA innovation solution',
      features: [
        'Unlimited member capacity',
        'Full feature suite access',
        'Dedicated success manager',
        'Examination support and consultation'
      ],
      cta: 'Contact Sales',
      ctaLink: '#demo',
      icon: Rocket,
      color: 'from-indigo-600 to-purple-600',
      borderColor: 'border-indigo-200',
      bgColor: 'bg-indigo-50'
    }
  ]

  return (
    <section className="relative w-full bg-white overflow-hidden py-24 px-6 md:px-10 lg:px-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
            Choose Your Implementation Path
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-3xl mx-auto leading-relaxed">
            Flexible deployment options tailored to your institution&apos;s needs and timeline
          </p>
        </motion.div>

        {/* Three-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {paths.map((path, index) => {
            const IconComponent = path.icon
            return (
              <motion.div
                key={index}
                className={`
                  group relative bg-white rounded-2xl overflow-hidden border transition-all duration-300
                  ${path.featured 
                    ? `${path.borderColor} border-2 shadow-xl` 
                    : `border-gray-200 shadow-md`
                  }
                  hover:shadow-2xl hover:border-gray-300
                `}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Featured Badge */}
                {path.featured && (
                  <div className="absolute top-5 right-5 bg-[#625bff] text-white px-4 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wide shadow-md z-10">
                    Recommended
                  </div>
                )}

                {/* Accent Bar */}
                <div className={`h-1 bg-gradient-to-r ${path.color}`}></div>

                {/* Card Content */}
                <div className="p-8">
                  {/* Icon Container */}
                  <div className={`w-16 h-16 ${path.bgColor} rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105`}>
                    <IconComponent 
                      size={28} 
                      weight="regular"
                      className={path.featured ? 'text-[#625bff]' : 'text-gray-700'}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {path.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-gray-600 text-base mb-8 leading-relaxed min-h-[48px]">
                    {path.subtitle}
                  </p>

                  {/* Features List */}
                  <div className="space-y-4 mb-10">
                    {path.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle 
                          size={20} 
                          weight="fill" 
                          className="text-green-600 shrink-0 mt-0.5" 
                        />
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href={path.ctaLink}
                    className={`
                      group/btn w-full flex items-center justify-center gap-2 py-4 px-6 rounded-lg font-semibold text-sm transition-all duration-300
                      ${path.featured 
                        ? 'bg-[#625bff] text-white hover:bg-[#5048ff] hover:shadow-lg' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                      }
                    `}
                  >
                    <span>{path.cta}</span>
                    <ArrowRight 
                      size={18} 
                      className="group-hover/btn:translate-x-1 transition-transform" 
                    />
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 pt-12 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-gray-600 mb-4 font-medium">
            Need guidance selecting the right path for your institution?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-[#625bff] font-semibold hover:text-[#5048ff] transition-colors text-lg"
          >
            Schedule a consultation with our team
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default AssessmentCTA
