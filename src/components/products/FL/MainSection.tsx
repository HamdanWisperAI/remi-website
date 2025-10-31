'use client'

import React from 'react'
import { Iphone15Pro } from '@/components/magicui/iphone-15-pro'
import { Marquee } from '@/components/magicui/marquee'
import { CheckCircle, TrendingUp, Link2, BarChart3, Play } from 'lucide-react'
import styles from './MainSection.module.css'

function MainSection() {
  return (
    <section className={styles.flHeroSection}>
      {/* Background */}
      <div className={styles.flHeroBackground} />
      
      {/* Vignette overlay */}
      <div className={styles.flHeroVignette} />

      {/* Container */}
      <div className={styles.flHeroContainer}>
        {/* Left Side - Text Content */}
        <div className={styles.flHeroLeft}>
          <div className={styles.flHeroEyebrow}>FINANCIAL LITERACY</div>
          
          <h1 className={styles.flHeroHeadline}>
            Financial Education That Members Actually Complete
          </h1>
          
          <p className={styles.flHeroSubheadline}>
            700+ Lessons. 80-83% Completion Rate. 100% Your Brand.
            <span className={styles.flHeroPulseDot}></span>
          </p>
          
          <div className={styles.flHeroButtons}>
            <button className={`${styles.flBtn} ${styles.flBtnPrimary}`}>See the Platform</button>
            <button className={`${styles.flBtn} ${styles.flBtnSecondary}`}>Calculate Your ROI</button>
          </div>
        </div>

        {/* Right Side - Phone Mockup */}
        <div className={styles.flHeroRight}>
          <div className={styles.flHeroPhoneWrapper}>
            <Iphone15Pro width={320} height={660} className="shadow-2xl">
              <div className="h-full w-full bg-linear-to-b from-gray-50 to-white overflow-hidden pt-12">
                {/* Enhanced header */}
                <div className="px-4 py-3.5 bg-white/95 backdrop-blur-sm border-b border-gray-100">
                  <div className="flex items-center gap-2 mb-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <div className="text-[13px] font-semibold text-gray-900">Financial Literacy</div>
                  </div>
                  <div className="text-[11px] text-gray-500 ml-3.5">Live preview</div>
                </div>

                {/* Scrollable content */}
                <div className="px-4 py-4 overflow-hidden flex-1 min-h-0">
                  <Marquee vertical pauseOnHover className="[--duration:40s]" repeat={2}>
                    {/* Value proposition card */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-3.5 mb-3 shadow-sm">
                      <div className="flex items-start gap-2.5 mb-2">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                          <CheckCircle size={14} className="text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-0.5">Promise</div>
                          <div className="text-[14px] font-semibold text-gray-900 leading-tight">Education members actually complete</div>
                        </div>
                      </div>
                      <div className="ml-9 flex items-center gap-1.5">
                        <div className="text-[12px] font-bold text-blue-600">80–83%</div>
                        <div className="text-[11px] text-gray-500">completion</div>
                      </div>
                    </div>

                    {/* Enhanced stat strip */}
                    <div className="bg-linear-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100 p-3.5 mb-3 shadow-sm">
                      <div className="text-[10px] uppercase tracking-wider text-gray-600 mb-2 text-center">Key Metrics</div>
                      <div className="flex items-center justify-around gap-2">
                        <div className="flex flex-col items-center min-w-0 flex-1">
                          <div className="text-[18px] font-black text-gray-900 leading-none">700+</div>
                          <div className="text-[10px] uppercase tracking-wide text-gray-600 mt-0.5">Lessons</div>
                        </div>
                        <div className="h-8 w-px bg-blue-200 shrink-0" />
                        <div className="flex flex-col items-center min-w-0 flex-1">
                          <div className="text-[18px] font-black text-gray-900 leading-none">3–5m</div>
                          <div className="text-[10px] uppercase tracking-wide text-gray-600 mt-0.5">Each</div>
                        </div>
                        <div className="h-8 w-px bg-blue-200 shrink-0" />
                        <div className="flex flex-col items-center min-w-0 flex-1">
                          <div className="text-[18px] font-black text-blue-600 leading-none">83%</div>
                          <div className="text-[10px] uppercase tracking-wide text-gray-600 mt-0.5">Complete</div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced lesson card */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-3 shadow-sm">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center shrink-0">
                          <Play size={14} className="text-green-600 ml-0.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[14px] font-semibold text-gray-900 leading-tight mb-1">Building Your First Budget</div>
                          <div className="flex items-center gap-2 text-[11px] text-gray-500">
                            <span>4 min</span>
                            <span>•</span>
                            <span className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-600">Beginner</span>
                          </div>
                        </div>
                      </div>
                      <div className="ml-11 space-y-1.5">
                        <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                          <div className="h-1.5 rounded-full bg-linear-to-r from-blue-500 to-blue-600" style={{ width: '65%' }} />
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="text-gray-500">65% complete</span>
                          <span className="text-blue-600 font-medium">Tap →</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced integration card */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-3 shadow-sm">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center shrink-0">
                          <Link2 size={14} className="text-purple-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-1">Product Integration</div>
                          <div className="text-[14px] font-semibold text-gray-900 leading-tight mb-1.5">&ldquo;Learn about CDs&rdquo; → Open a CD</div>
                          <div className="text-[11px] text-gray-500">Education that drives action</div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced outcomes card */}
                    <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-3 shadow-sm">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                          <TrendingUp size={14} className="text-emerald-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-[10px] uppercase tracking-wider text-gray-500 mb-2">Real Outcomes</div>
                          <div className="grid grid-cols-3 gap-2">
                            <div className="bg-emerald-50 rounded-lg p-2 text-center">
                              <div className="text-[15px] font-black text-emerald-600 leading-none">+32</div>
                              <div className="text-[10px] text-gray-600 mt-0.5">Credit</div>
                            </div>
                            <div className="bg-emerald-50 rounded-lg p-2 text-center">
                              <div className="text-[15px] font-black text-emerald-600 leading-none">-33%</div>
                              <div className="text-[10px] text-gray-600 mt-0.5">Delinq</div>
                            </div>
                            <div className="bg-emerald-50 rounded-lg p-2 text-center">
                              <div className="text-[15px] font-black text-emerald-600 leading-none">+45%</div>
                              <div className="text-[10px] text-gray-600 mt-0.5">Savings</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Trust indicator */}
                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-3 mb-3">
                      <div className="flex items-center justify-center gap-2 text-[11px] text-gray-600">
                        <BarChart3 size={12} className="text-gray-400" />
                        <span>Proven with Fortune 500 companies</span>
                      </div>
                    </div>
                  </Marquee>
                </div>
              </div>
            </Iphone15Pro>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.flHeroScrollIndicator}>
        <div className={styles.flScrollChevron}></div>
      </div>
    </section>
  )
}

export default MainSection
