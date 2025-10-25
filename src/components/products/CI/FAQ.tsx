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
    question: 'Is this... legal?',
    answer: `100% yes. We only use public information. No mystery shopping. No deception. Just smart aggregation of data anyone could find (but nobody has time to compile).`
  },
  {
    id: '2',
    question: "Will competitors know we're tracking them?",
    answer: `Nope. We look like regular web traffic. No calls, no visits, no traces.`
  },
  {
    id: '3',
    question: "What if we're uncompetitive?",
    answer: `Better to know than guess. Most clients find they're more competitive than feared, just highlighting the wrong advantages.`
  },
  {
    id: '4',
    question: "Can't we do this ourselves?",
    answer: `Sure. Budget 20 hours/week, build scrapers, maintain databases, create dashboards, analyze patterns. Or spend $500 and focus on strategy.`
  },
  {
    id: '5',
    question: 'Do our competitors use this?',
    answer: `The smart ones do. The 67% of Fortune 500s with competitive intelligence? They're not using Excel.`
  }
]

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-[#625bff]/30 transition-colors duration-200 bg-white">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 md:px-8 md:py-6 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-200 text-left"
      >
        <span className="text-lg md:text-xl font-semibold text-gray-900 leading-relaxed">
          "{item.question}"
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
              The Awkward Questions,
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold" style={{ color: '#625bff' }}>
              Let's Address Them
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-center text-gray-600 text-base md:text-lg mb-12 md:mb-16 max-w-2xl mx-auto">
            Every leader asks. Here are the real answers to the questions nobody else wants to talk about.
          </p>

          {/* FAQ Items */}
          <div className="space-y-4 md:space-y-5">
            {faqItems.map((item) => (
              <FAQItem
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