'use client'

import React, { useState } from 'react'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'

const ImpactSection = () => {
  const [showMore, setShowMore] = useState(false)

  return (
    <section className="relative w-full bg-linear-to-b from-white to-[#625bff]/5 overflow-hidden py-24 px-6 md:px-10 lg:px-16">
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proven Community Impact
          </h2>
          <p className="text-xl text-gray-600">
            Evidence-based outcomes from federal research
          </p>
        </div>

        {/* HERO METRIC - The one that matters most */}
        <div className="bg-white rounded-3xl border-2 border-[#625bff]/20 p-12 md:p-16 text-center shadow-xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#625bff]/10 text-[#625bff] text-sm font-bold uppercase mb-6">
            <span className="w-2 h-2 bg-[#625bff] rounded-full animate-pulse"></span>
            Primary Outcome
          </div>
          
          <div className="mb-4">
            <span className="text-7xl md:text-8xl font-black text-[#625bff]">
              +<NumberTicker value={26} />
            </span>
            <span className="text-4xl font-bold text-gray-600 ml-2">points</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Average Credit Score Increase
          </h3>
          
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Members completing financial education programs show measurable improvement 
            in creditworthiness within 12-18 months
          </p>
          
          {/* Context - Critical for trust */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" />
              <span>CFPB 2019 Study</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" />
              <span>5,271 participants</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" />
              <span>12-18 month period</span>
            </div>
          </div>
        </div>

        {/* 3 SUPPORTING METRICS - Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Metric 1 */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#625bff]/30 hover:shadow-lg transition-all">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              <NumberTicker value={83} />%
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Program Completion
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              vs 12.6% traditional courses
            </p>
            <div className="text-xs text-gray-400">
              EdApp 2021 | 10,000+ learners
            </div>
          </div>

          {/* Metric 2 */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#625bff]/30 hover:shadow-lg transition-all">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              <NumberTicker value={33} />%
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Delinquency Reduction
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Maximum observed decrease
            </p>
            <div className="text-xs text-gray-400">
              Federal Reserve NY | Equifax data
            </div>
          </div>

          {/* Metric 3 */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-8 hover:border-[#625bff]/30 hover:shadow-lg transition-all">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              <NumberTicker value={4} />x
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">
              Mobile Engagement
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              vs desktop-only platforms
            </p>
            <div className="text-xs text-gray-400">
              Mobile learning industry 2024
            </div>
          </div>
        </div>

        {/* Expandable "Show More" Section */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
          <button
            onClick={() => setShowMore(!showMore)}
            className="w-full p-6 flex items-center justify-center gap-2 font-semibold text-[#625bff] hover:text-[#625bff]/80 transition-colors"
          >
            {showMore ? (
              <>
                <span>Hide Additional Research Outcomes</span>
                <ChevronUp size={20} />
              </>
            ) : (
              <>
                <span>View Additional Research Outcomes</span>
                <ChevronDown size={20} />
              </>
            )}
          </button>
          
          {showMore && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 pt-0 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  <NumberTicker value={92} />%
                </div>
                <div className="text-sm text-gray-600">Lesson play-through rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  <NumberTicker value={45} />%
                </div>
                <div className="text-sm text-gray-600">Faster completion time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  <NumberTicker value={80} />%
                </div>
                <div className="text-sm text-gray-600">Mobile completion rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  <NumberTicker value={3} />x
                </div>
                <div className="text-sm text-gray-600">Product engagement lift</div>
              </div>
            </div>
          )}
        </div>

        {/* Research Citation */}
        <div className="mt-12 p-6 bg-[#625bff]/5 rounded-xl border border-[#625bff]/20">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Research Methodology:</strong> Outcomes based on CFPB 2019 Financial Education Review (5,271 participants), 
            Federal Reserve Bank of NY/Equifax Credit Panel (2003-2012), EdApp 2021 Microlearning Study (10,000+ learners), 
            and Mobile Learning Industry Benchmarks 2024. All metrics represent median values across studies.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ImpactSection
