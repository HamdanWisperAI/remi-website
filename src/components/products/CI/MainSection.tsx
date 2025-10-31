import React from 'react'
import styles from './MainSection.module.css'
import { Safari } from '@/components/magicui/safari'
import { Marquee } from '@/components/magicui/marquee'
import { TrendingUp, DollarSign, BarChart3, Target, AlertTriangle, Eye, Users, Zap, CheckCircle, Activity } from 'lucide-react'

function MainSection() {
  return (
    <section className={styles.ciHeroSection}>
      {/* Background */}
      <div className={styles.ciHeroBackground} />
      
      {/* Vignette overlay */}
      <div className={styles.ciHeroVignette} />

      {/* Container */}
      <div className={styles.ciHeroContainer}>
        {/* Left Side - Text Content */}
        <div className={styles.ciHeroLeft}>
          <div className={styles.ciHeroEyebrow}>COMPETITIVE INTELLIGENCE</div>
          
          <h1 className={styles.ciHeroHeadline}>
            Competitive Intelligence That Actually Keeps Up
          </h1>
          
          <p className={styles.ciHeroSubheadline}>
            Every rate. Every product. Every competitor. Updated weekly.
            <span className={styles.ciHeroPulseDot}></span>
          </p>
          
          <p className={styles.ciHeroBody}>
            Stop playing detective with competitor websites at midnight. Stop the quarterly mystery shopping that's outdated before the report's done. Stop pretending that annual competitive analysis is enough when rates change daily.
          </p>
          
          <p className={styles.ciHeroValueStatement}>
            Welcome to intelligence that moves at market speed.
          </p>
          
          <div className={styles.ciHeroButtons}>
            <button className={`${styles.ciBtn} ${styles.ciBtnPrimary}`}>See Live Demo</button>
            <button className={`${styles.ciBtn} ${styles.ciBtnSecondary}`}>Get Free Snapshot</button>
          </div>
        </div>

        {/* Right Side - Safari Browser with CI Dashboard */}
        <div className={styles.ciHeroRight}>
          <div className={styles.ciHeroDashboardWrapper}>
            <Safari url="ci-platform.wisperai.com" className="w-full safari-container">
              <div className="h-full w-full bg-white overflow-hidden">
                {/* Header */}
                <div className="px-4 py-3 bg-white border-b border-gray-300 overflow-hidden">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 shrink-0" />
                    <div className="text-sm font-semibold text-gray-900 truncate">Competitive Intelligence Dashboard</div>
                  </div>
                  <div className="text-xs text-gray-500 ml-4 truncate">Real-time market intelligence</div>
                </div>

                {/* Scrolling Content */}
                <div className="p-4 overflow-hidden h-full bg-gray-50 w-full">
                  <Marquee vertical pauseOnHover className="[--duration:35s] w-full" repeat={2}>
                    {/* Rate Intelligence Card */}
                    <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4 shadow-sm w-full max-w-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded border border-gray-300 bg-green-50 flex items-center justify-center shrink-0">
                          <TrendingUp size={18} className="text-green-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm truncate">Complete Rate Intelligence</h3>
                          <p className="text-xs text-gray-600 mt-1">
                            Every rate, every competitor, updated weekly
                          </p>
                        </div>
                      </div>
                      <div className="ml-[52px] space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-green-500 shrink-0" />
                          <span className="truncate">Deposit rates (Savings, MMA, CDs)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-green-500 shrink-0" />
                          <span className="truncate">Loan rates (Auto, Mortgage, Personal)</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-green-500 shrink-0" />
                          <span className="truncate">Fees & minimum balance requirements</span>
                        </div>
                      </div>
                    </div>

                    {/* Market Movement Card */}
                    <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4 shadow-sm w-full max-w-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded border border-gray-300 bg-blue-50 flex items-center justify-center shrink-0">
                          <BarChart3 size={18} className="text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm truncate">Market Movement Tracking</h3>
                          <p className="text-xs text-gray-600 mt-1">
                            Rate changes detected in real-time
                          </p>
                        </div>
                      </div>
                      <div className="ml-[52px] space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Activity size={16} className="text-blue-500 shrink-0" />
                          <span className="truncate">Rate change history & patterns</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Activity size={16} className="text-blue-500 shrink-0" />
                          <span className="truncate">Product launch detection</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Activity size={16} className="text-blue-500 shrink-0" />
                          <span className="truncate">Competitive positioning maps</span>
                        </div>
                      </div>
                    </div>

                    {/* Velocity Problem Alert */}
                    <div className="bg-white rounded-lg border border-yellow-300 p-4 mb-4 shadow-sm w-full max-w-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded border border-yellow-300 bg-yellow-50 flex items-center justify-center shrink-0">
                          <AlertTriangle size={18} className="text-yellow-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm truncate">The Velocity Problem</h3>
                          <p className="text-xs text-gray-600 mt-1">
                            Competitors change rates every 3.2 days
                          </p>
                        </div>
                      </div>
                      <div className="ml-[52px] space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Zap size={16} className="text-yellow-500 shrink-0" />
                          <span className="truncate">28 rate changes between your checks</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Eye size={16} className="text-yellow-500 shrink-0" />
                          <span className="truncate">Missing 60% of competition</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Users size={16} className="text-yellow-500 shrink-0" />
                          <span className="truncate">Members switch in minutes</span>
                        </div>
                      </div>
                    </div>

                    {/* Intelligence Dashboard Card */}
                    <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4 shadow-sm w-full max-w-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded border border-gray-300 bg-purple-50 flex items-center justify-center shrink-0">
                          <Target size={18} className="text-purple-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm truncate">Executive Command Center</h3>
                          <p className="text-xs text-gray-600 mt-1">
                            Strategic intelligence at your fingertips
                          </p>
                        </div>
                      </div>
                      <div className="ml-[52px] space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-purple-500 shrink-0" />
                          <span className="truncate">Competitive position summary</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-purple-500 shrink-0" />
                          <span className="truncate">Win/loss rate analysis</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-purple-500 shrink-0" />
                          <span className="truncate">One-page board reports</span>
                        </div>
                      </div>
                    </div>

                    {/* Product Intelligence Card */}
                    <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4 shadow-sm w-full max-w-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded border border-gray-300 bg-indigo-50 flex items-center justify-center shrink-0">
                          <DollarSign size={18} className="text-indigo-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm truncate">Product Feature Comparison</h3>
                          <p className="text-xs text-gray-600 mt-1">
                            Beyond rates - complete competitive view
                          </p>
                        </div>
                      </div>
                      <div className="ml-[52px] space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-indigo-500 shrink-0" />
                          <span className="truncate">Account benefits & perks tracking</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-indigo-500 shrink-0" />
                          <span className="truncate">Digital features comparison</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-indigo-500 shrink-0" />
                          <span className="truncate">Rewards programs analysis</span>
                        </div>
                      </div>
                    </div>

                    {/* Real-Time Alerts Card */}
                    <div className="bg-white rounded-lg border border-red-300 p-4 mb-4 shadow-sm w-full max-w-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded border border-red-300 bg-red-50 flex items-center justify-center shrink-0">
                          <Zap size={18} className="text-red-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm truncate">Instant Market Alerts</h3>
                          <p className="text-xs text-gray-600 mt-1">
                            Never miss a competitive move again
                          </p>
                        </div>
                      </div>
                      <div className="ml-[52px] space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <AlertTriangle size={16} className="text-red-500 shrink-0" />
                          <span className="truncate">Rate change notifications</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <AlertTriangle size={16} className="text-red-500 shrink-0" />
                          <span className="truncate">New product launch alerts</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <AlertTriangle size={16} className="text-red-500 shrink-0" />
                          <span className="truncate">Campaign detection warnings</span>
                        </div>
                      </div>
                    </div>

                    {/* Use Case Success Card */}
                    <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4 shadow-sm w-full max-w-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded border border-gray-300 bg-emerald-50 flex items-center justify-center shrink-0">
                          <Target size={18} className="text-emerald-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 text-sm truncate">Proven Success Cases</h3>
                          <p className="text-xs text-gray-600 mt-1">
                            Turn intelligence into competitive wins
                          </p>
                        </div>
                      </div>
                      <div className="ml-[52px] space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                          <span className="truncate">85% retention despite rate disadvantage</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                          <span className="truncate">First-mover advantage captured</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                          <span className="truncate">Win on value, not just rate</span>
                        </div>
                      </div>
                    </div>
                  </Marquee>
                </div>
              </div>
            </Safari>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.ciHeroScrollIndicator}>
        <div className={styles.ciScrollChevron}></div>
      </div>
    </section>
  )
}

export default MainSection