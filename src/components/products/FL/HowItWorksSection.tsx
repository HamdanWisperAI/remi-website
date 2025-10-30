'use client'

import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

function HowItWorksSection() {
  const colors = {
    1: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-600' },
    2: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-600' },
    3: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-600' },
    4: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-600' },
  } as const

  const data = [
    {
      title: '01',
      content: (
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mb-3">
            Nano-<span className="text-blue-600">Learning</span> Architecture
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-6">700+ pre-built lessons (3–5 minutes each)</p>

          <ul className="space-y-3 text-gray-700 mb-6">
            {['Progressive difficulty levels','Spaced repetition for retention','Mobile-optimized delivery','Interactive content formats'].map((d, idx) => (
              <motion.li key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="flex items-start gap-2">
                <CheckCircle size={18} className={`${colors[1].text} mt-0.5 shrink-0`} />
                <span>{d}</span>
              </motion.li>
            ))}
          </ul>

          {/* Big numeric callouts - horizontal below bullets */}
          <div className="w-full">
            <div className="max-w-2xl md:max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-6 border border-gray-200 rounded-2xl px-4 md:px-6 py-3 md:py-4 bg-white">
              <div className="flex items-baseline gap-2 md:gap-3 min-w-0">
                <div className="text-3xl md:text-5xl font-black text-gray-900 leading-none">700+</div>
                <div className="text-[10px] md:text-sm uppercase tracking-wider text-gray-500">Lessons</div>
              </div>
              <div className="hidden md:block h-8 w-px bg-gray-200" />
              <div className="flex items-baseline gap-2 md:gap-3 min-w-0">
                <div className="text-3xl md:text-5xl font-black text-gray-900 leading-none">3–5m</div>
                <div className="text-[10px] md:text-sm uppercase tracking-wider text-gray-500">Each</div>
              </div>
              <div className="hidden md:block h-8 w-px bg-gray-200" />
              <div className="flex items-baseline gap-2 md:gap-3 min-w-0">
                <div className="text-3xl md:text-5xl font-black text-blue-600 leading-none">83%</div>
                <div className="text-[10px] md:text-sm uppercase tracking-wider text-gray-500">Completion</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: '02',
      content: (
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mb-2">Life <span className="text-green-600">Moment</span> Integration</h3>
          <p className="text-base md:text-lg text-gray-600 mb-5">Right lesson at the right moment</p>
          <ul className="space-y-3 text-gray-700">
            {['First job? Student loans? New baby?','Behavioral triggers, not random pushes','Connection to actual decisions','Personalized learning paths'].map((d, idx) => (
              <motion.li key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="flex items-start gap-2">
                <CheckCircle size={18} className={`${colors[2].text} mt-0.5 shrink-0`} />
                <span>{d}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: '03',
      content: (
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mb-2">Product <span className="text-purple-600">Integration</span></h3>
          <p className="text-base md:text-lg text-gray-600 mb-5">Every lesson connects to your products</p>
          <ul className="space-y-3 text-gray-700">
            {['"Learn about CDs" → "Open a CD"','Education drives action','Track conversion lift','Seamless product discovery'].map((d, idx) => (
              <motion.li key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="flex items-start gap-2">
                <CheckCircle size={18} className={`${colors[3].text} mt-0.5 shrink-0`} />
                <span>{d}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )
    },
    {
      title: '04',
      content: (
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mb-2">White‑Label <span className="text-orange-600">Delivery</span></h3>
          <p className="text-base md:text-lg text-gray-600 mb-5">Your brand, your voice</p>
          <ul className="space-y-3 text-gray-700">
            {['Seamless app integration','Custom content options','Member data stays yours','Complete brand consistency'].map((d, idx) => (
              <motion.li key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="flex items-start gap-2">
                <CheckCircle size={18} className={`${colors[4].text} mt-0.5 shrink-0`} />
                <span>{d}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Actually Works</h2>
        <p className="text-xl text-gray-600">Smart, Simple, Scalable</p>
      </div>

      <Timeline data={data} />
    </section>
  )
}

export default HowItWorksSection
