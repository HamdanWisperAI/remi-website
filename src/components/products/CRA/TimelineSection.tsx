'use client'

import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const TimelineSection = () => {
  const colors = {
    1: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-600' },
    2: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-600' },
    3: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-600' },
    4: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-600' },
    5: { bg: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-600' },
    6: { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'border-emerald-600' },
  } as const

  const timelineData = [
    {
      title: 'Month 01',
      content: (
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mb-2">
            Platform <span className="text-blue-600">Launch</span>
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-5">Foundation for CRA success</p>
          <ul className="space-y-3 text-gray-700">
            {[
              'Technical integration complete',
              'Content customization finished',
              'Staff training delivered',
              'Soft launch with pilot group'
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-2"
              >
                <CheckCircle size={18} className={`${colors[1].text} mt-0.5 shrink-0`} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: 'Month 02',
      content: (
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mb-2">
            Community <span className="text-purple-600">Rollout</span>
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-5">Building engagement and awareness</p>
          <ul className="space-y-3 text-gray-700">
            {[
              'Marketing campaign launch',
              'Partner organization integration',
              'Community event kickoffs',
              'Media coverage secured'
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-2"
              >
                <CheckCircle size={18} className={`${colors[2].text} mt-0.5 shrink-0`} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: 'Month 03',
      content: (
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mb-2">
            Scale <span className="text-green-600">Achievement</span>
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-5">Reaching critical milestones</p>
          <ul className="space-y-3 text-gray-700">
            {[
              '1,000+ active users',
              '80%+ completion rates',
              'Initial outcomes documented',
              'Geographic coverage expanding'
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-2"
              >
                <CheckCircle size={18} className={`${colors[3].text} mt-0.5 shrink-0`} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: 'Month 04',
      content: (
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mb-2">
            Impact <span className="text-orange-600">Documentation</span>
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-5">Measuring real-world results</p>
          <ul className="space-y-3 text-gray-700">
            {[
              'First behavioral changes measured',
              'Credit improvements beginning',
              'Product adoption tracking',
              'Community feedback collected'
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-2"
              >
                <CheckCircle size={18} className={`${colors[4].text} mt-0.5 shrink-0`} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: 'Month 05',
      content: (
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mb-2">
            Report <span className="text-pink-600">Preparation</span>
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-5">Examiner-ready documentation</p>
          <ul className="space-y-3 text-gray-700">
            {[
              'CRA documentation package',
              'Examiner-ready dashboards',
              'Impact visualization tools',
              'Success story compilation'
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-2"
              >
                <CheckCircle size={18} className={`${colors[5].text} mt-0.5 shrink-0`} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: 'Month 06',
      content: (
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mb-2">
            Examination <span className="text-emerald-600">Ready</span>
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-5">Positioned for Outstanding rating</p>
          <ul className="space-y-3 text-gray-700">
            {[
              'Full platform deployment',
              'Measurable outcomes proven',
              'Innovation clearly demonstrated',
              'Outstanding rating positioned'
            ].map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="flex items-start gap-2"
              >
                <CheckCircle size={18} className={`${colors[6].text} mt-0.5 shrink-0`} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )
    }
  ]

  return (
    <section className="relative w-full bg-white overflow-hidden py-24 px-6 md:px-10 lg:px-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-3">
            From Contract to Outstanding
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-semibold">
            Your 6-month roadmap to CRA success
          </p>
        </div>

        {/* Timeline Component */}
        <Timeline data={timelineData} />

        {/* CTA Section */}
        <div className="mt-24 text-center">
          <div className="inline-block bg-linear-to-r from-[#625bff] to-purple-600 rounded-3xl p-12 shadow-xl">
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

