'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'Will this actually get us enhanced CRA credit?',
    answer: `Yes. The platform documents exactly what examiners look for: measurable outcomes, innovation in delivery, and verifiable community impact. We've seen institutions achieve "Outstanding" ratings using this documentation.`
  },
  {
    id: '2',
    question: "What if our members don't complete the program?",
    answer: `That's the difference. Traditional programs see 12.6% completion. Our mobile-first approach achieves 80-83% completion rates. Members actually finish because it's designed for how people learn today.`
  },
  {
    id: '3',
    question: 'How long until we see measurable results?',
    answer: `Initial behavioral changes appear within 60 days. Credit score improvements average 90-120 days. Full CRA documentation packages are ready in 6 months—perfect timing for your next examination cycle.`
  },
  {
    id: '4',
    question: 'Can we customize the content for our institution?',
    answer: `Absolutely. Full white-label branding, custom content modules, and community-specific programming are all included. It looks and feels like your program, backed by our proven platform.`
  },
  {
    id: '5',
    question: 'What kind of support do we get during implementation?',
    answer: `Standard package includes priority support. Enterprise includes a dedicated success manager who knows CRA requirements inside-out and helps prepare for examinations.`
  },
  {
    id: '6',
    question: 'How does this compare to hiring a compliance consultant?',
    answer: `Consultants document what you've done. We create what you document. Plus ongoing measurement, member engagement, and examiner-ready dashboards—all for less than a single consulting engagement.`
  }
]

function FAQItemComponent({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#625bff]/30 transition-colors duration-200 bg-white">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-200 text-left"
      >
        <span className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 flex items-center justify-center"
        >
          <ChevronDown className="h-5 w-5 md:h-6 md:w-6 text-[#625bff]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 py-5 md:px-8 md:py-6 border-t border-gray-100 bg-gradient-to-br from-[#625bff]/5 to-transparent">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <div className="w-full bg-white relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#625bff]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              The Questions Every CRA Officer Asks
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: '#625bff' }}>
              Honest Answers
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-center text-gray-600 text-base md:text-lg mb-12 md:mb-16 max-w-2xl mx-auto">
            Real questions from institutions like yours. Straight answers about what works.
          </p>

          {/* FAQ Items */}
          <div className="space-y-4 md:space-y-5">
            {faqItems.map((item) => (
              <FAQItemComponent
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() => toggleFAQ(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ

