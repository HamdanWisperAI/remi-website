'use client'

import React from 'react'
import { CheckCircle, ArrowRight } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

const pricingPlans = [
  {
    name: 'Pilot Program',
    description: 'Test with 500 members',
    price: 'Custom',
    priceDetail: '90-day trial',
    features: [
      { text: 'Up to 500 active users', included: true },
      { text: 'Core financial literacy content', included: true },
      { text: 'Basic tracking and reporting', included: true },
      { text: 'Monthly CRA documentation', included: true },
      { text: 'Email support', included: true },
      { text: 'Success metrics included', included: true },
      { text: 'Multi-language support', included: false },
      { text: 'White-label options', included: false }
    ],
    cta: 'Start Pilot',
    ctaLink: '#pilot',
    popular: false
  },
  {
    name: 'Full Deployment',
    description: 'Scale across your institution',
    price: 'Custom',
    priceDetail: 'Annual contract',
    features: [
      { text: 'Unlimited active users', included: true },
      { text: 'Complete content library (700+ lessons)', included: true },
      { text: 'Real-time CRA dashboard', included: true },
      { text: 'Examiner-ready documentation', included: true },
      { text: 'Multi-language support (Spanish, Vietnamese, Mandarin)', included: true },
      { text: 'Custom branding', included: true },
      { text: 'Priority support', included: true },
      { text: 'Quarterly business reviews', included: true }
    ],
    cta: 'Get Pricing',
    ctaLink: '#demo',
    popular: true
  },
  {
    name: 'Enterprise',
    description: 'For multi-branch institutions',
    price: 'Custom',
    priceDetail: 'Contact for quote',
    features: [
      { text: 'Everything in Full Deployment', included: true },
      { text: 'Dedicated success manager', included: true },
      { text: 'Examination support', included: true },
      { text: 'Custom integrations (core banking, CRM)', included: true },
      { text: 'Advanced analytics and reporting', included: true },
      { text: 'White-label options', included: true },
      { text: 'SLA guarantee (99.9% uptime)', included: true },
      { text: 'Custom content development', included: true }
    ],
    cta: 'Contact Sales',
    ctaLink: '#contact',
    popular: false
  }
]

function PricingSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Transparent Pricing, Measurable Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with a pilot, scale when you see results. No hidden fees, no surprises.
          </p>
        </motion.div>

        {/* Pricing Grid - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`
                relative bg-white rounded-2xl border-2 p-8
                ${plan.popular 
                  ? 'border-blue-600 shadow-2xl scale-105 z-10' 
                  : 'border-gray-200 shadow-lg'
                }
                hover:shadow-xl transition-all duration-300
              `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  MOST POPULAR
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className="text-4xl font-black text-gray-900">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-gray-500">
                  {plan.priceDetail}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-start gap-3">
                    <CheckCircle 
                      size={20} 
                      weight={feature.included ? 'fill' : 'regular'}
                      className={feature.included ? 'text-green-600' : 'text-gray-300'}
                    />
                    <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={plan.ctaLink}
                className={`
                  group w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all
                  ${plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-105 shadow-lg'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }
                `}
              >
                {plan.cta}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Value Props - Replace ROI section */}
        <motion.div
          className="bg-white rounded-2xl border-2 border-gray-200 p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-center">
            Why Financial Institutions Choose Us
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: 'Start Small, Scale Fast',
                stat: '90 days',
                detail: 'Pilot program proves value before full commitment'
              },
              {
                title: 'Research-Backed Results',
                stat: '83%',
                detail: 'Completion rate vs 12.6% traditional programs (EdApp 2021)'
              },
              {
                title: 'Examiner-Ready Documentation',
                stat: 'Automatic',
                detail: 'All CRA compliance tracking built-in'
              },
              {
                title: 'Implementation Speed',
                stat: '45 days',
                detail: 'From contract to live deployment'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 md:gap-5">
                <div className="min-w-[80px] md:min-w-[100px] px-4 py-3 md:px-5 md:py-4 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                  <span className="text-xl md:text-2xl font-bold text-blue-600 whitespace-nowrap text-center leading-tight">
                    {item.stat}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-base md:text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ / Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-4">
            Questions about pricing or implementation?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            Schedule a 20-minute consultation
            <ArrowRight size={18} />
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default PricingSection
