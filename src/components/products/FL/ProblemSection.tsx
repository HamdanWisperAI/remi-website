'use client'

import React, { useEffect, useRef, useState } from 'react'
import { AlertCircle, Clock, Monitor, FileText, Zap, Smartphone, Target, Link, Play } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import styles from './ProblemSection.module.css'

interface AnimatedNumberProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ 
  value, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  decimals = 0
}) => {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrameId: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const elapsed = (currentTime - startTime) / 1000
      const progress = Math.min(elapsed / (duration / 1000), 1)
      
      const easedProgress = 1 - Math.pow(1 - progress, 3) // Ease-out cubic
      const currentValue = value * easedProgress
      
      if (decimals > 0) {
        setDisplayValue(Math.round(currentValue * Math.pow(10, decimals)) / Math.pow(10, decimals))
      } else {
        setDisplayValue(Math.floor(currentValue))
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [value, duration, isVisible, decimals])

  return (
    <span 
      ref={(el) => {
        if (el && !isVisible) {
          const observer = new IntersectionObserver(
            ([entry]) => {
              if (entry.isIntersecting) {
                setIsVisible(true)
                observer.disconnect()
              }
            },
            { threshold: 0.1 }
          )
          observer.observe(el)
        }
      }}
    >
      {prefix}{decimals > 0 ? displayValue.toFixed(decimals) : displayValue}{suffix}
    </span>
  )
}

// Helper function to parse stat strings like "12.6%", "3x", "0%"
const parseStat = (stat: string): { value: number; suffix: string; prefix: string; decimals: number } => {
  if (stat.includes('x') || stat.includes('X')) {
    const num = parseFloat(stat.replace(/[xX]/g, ''))
    return { value: num || 0, suffix: 'x', prefix: '', decimals: 0 }
  }
  
  if (stat.includes('%')) {
    const num = parseFloat(stat.replace('%', ''))
    const hasDecimal = stat.includes('.')
    return { 
      value: num || 0, 
      suffix: '%', 
      prefix: '', 
      decimals: hasDecimal ? 1 : 0 
    }
  }
  
  if (stat === '∞' || stat === 'infinity') {
    return { value: Infinity, suffix: '', prefix: '∞', decimals: 0 }
  }
  
  const num = parseFloat(stat)
  const hasDecimal = stat.includes('.')
  return { 
    value: num || 0, 
    suffix: '', 
    prefix: '', 
    decimals: hasDecimal ? 1 : 0 
  }
}

function ProblemSection() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)
  const [activeTab, setActiveTab] = useState<'problems' | 'solutions'>('problems')

  const problemsData = [
    {
      icon: Clock,
      title: '45-minute modules',
      stat: '12.6%',
      statLabel: 'completion rate',
      impact: 'Long content loses attention',
      source: 'Jordan 2015'
    },
    {
      icon: Monitor,
      title: 'Desktop-only platforms',
      stat: '20%',
      statLabel: 'completion vs mobile',
      impact: 'Members bank on phones',
      source: 'Market.us 2024'
    },
    {
      icon: FileText,
      title: 'Generic content',
      stat: '0%',
      statLabel: 'personalization',
      impact: 'One-size-fits-all fails',
      source: 'CFPB 2019'
    },
    {
      icon: AlertCircle,
      title: 'No product connection',
      stat: '0',
      statLabel: 'action triggers',
      impact: 'Missed engagement opportunity',
      source: 'Industry analysis'
    },
    {
      icon: Play,
      title: 'Passive lecture format',
      stat: '35%',
      statLabel: 'completion rate',
      impact: 'One-way communication fails',
      source: 'EdApp 2021'
    }
  ]

  const solutionsData = [
    {
      icon: Clock,
      title: '3-5 minute lessons',
      stat: '92%',
      statLabel: 'play-through rate',
      impact: 'Fits busy schedules',
      source: 'EdApp 2021',
      improvement: '+79.4%'
    },
    {
      icon: Smartphone,
      title: 'Mobile-first design',
      stat: '80%',
      statLabel: 'completion rate',
      impact: 'Learn where they bank',
      source: 'Market.us 2024',
      improvement: '+60%'
    },
    {
      icon: Target,
      title: 'Life-stage personalization',
      stat: '100%',
      statLabel: 'contextual relevance',
      impact: 'Right lesson, right time',
      source: 'CFPB 2019',
      improvement: '∞'
    },
    {
      icon: Link,
      title: 'Embedded products',
      stat: '3x',
      statLabel: 'engagement boost',
      impact: 'Education drives action',
      source: 'Internal data',
      improvement: '+200%'
    },
    {
      icon: Zap,
      title: 'Interactive learning',
      stat: '45%',
      statLabel: 'faster completion',
      impact: 'Same retention, less time',
      source: 'Merrill Lynch',
      improvement: '+45%'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Reset animations when tab changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInView(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [activeTab])

  return (
    <section className={styles.problemSection} ref={sectionRef}>
      <div className={styles.problemContainer}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.mainHeadline} ${isInView ? styles.headlineInView : ''}`}>
            The Uncomfortable Truth
          </h2>
          <p className={`${styles.subHeadline} ${isInView ? styles.subheadlineInView : ''}`}>
            Everyone agrees financial education is important. Nobody finishes it. We fixed that.
          </p>
        </div>

        {/* Tabs */}
        <div className={styles.tabsContainer}>
          <div className={styles.tabsButtons} role="tablist">
            <button
              onClick={() => setActiveTab('problems')}
              className={`${styles.tabButton} ${activeTab === 'problems' ? styles.tabButtonActive : ''}`}
              aria-selected={activeTab === 'problems'}
              aria-controls="problems-tabpanel"
              id="problems-tab"
              role="tab"
            >
              <span>Traditional Approach</span>
            </button>
            <button
              onClick={() => setActiveTab('solutions')}
              className={`${styles.tabButton} ${activeTab === 'solutions' ? styles.tabButtonActive : ''}`}
              aria-selected={activeTab === 'solutions'}
              aria-controls="solutions-tabpanel"
              id="solutions-tab"
              role="tab"
            >
              <span>Our Solution</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className={styles.tabContentWrapper}>
            <AnimatePresence mode="wait">
              {activeTab === 'problems' && (
                <motion.div
                  key="problems"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`${styles.tabContent} ${styles.problemsTab}`}
                  role="tabpanel"
                  id="problems-tabpanel"
                  aria-labelledby="problems-tab"
                >
                  <div className={styles.tabHeader}>
                    <h3 className={styles.tabTitle}>Why Traditional Financial Education Fails</h3>
                    <p className={styles.tabDescription}>
                      Despite best intentions, most programs see completion rates under 15%. Here&apos;s why:
                    </p>
                  </div>

                  <div className={styles.cardsGrid}>
                    {problemsData.map((problem, index) => {
                      const statParts = parseStat(problem.stat)
                      return (
                        <div 
                          key={`problem-${activeTab}-${index}`}
                          className={`${styles.statCard} ${isInView ? styles.cardInView : ''}`}
                          style={{ transitionDelay: isInView ? `${index * 0.1}s` : '0s' }}
                        >
                          <div className={styles.cardIcon}>
                            <problem.icon size={24} />
                          </div>
                          <div className={styles.cardContent}>
                            <h4 className={styles.cardTitle}>{problem.title}</h4>
                            <div className={styles.statContainer}>
                              <div className={styles.statValue}>
                                {statParts.value === Infinity ? (
                                  <span>∞</span>
                                ) : (
                                  <AnimatedNumber
                                    value={statParts.value}
                                    suffix={statParts.suffix}
                                    prefix={statParts.prefix}
                                    decimals={statParts.decimals}
                                    duration={2000}
                                  />
                                )}
                              </div>
                              <div className={styles.statLabel}>{problem.statLabel}</div>
                            </div>
                            <p className={styles.cardImpact}>{problem.impact}</p>
                            <div className={styles.cardSource}>Source: {problem.source}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {activeTab === 'solutions' && (
                <motion.div
                  key="solutions"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`${styles.tabContent} ${styles.solutionsTab}`}
                  role="tabpanel"
                  id="solutions-tabpanel"
                  aria-labelledby="solutions-tab"
                >
                  <div className={styles.tabHeader}>
                    <h3 className={styles.tabTitle}>Our Microlearning Approach</h3>
                    <p className={styles.tabDescription}>
                      Research-backed design delivers 6x better completion rates. Here&apos;s how:
                    </p>
                  </div>

                  <div className={styles.cardsGrid}>
                    {solutionsData.map((solution, index) => {
                      const statParts = parseStat(solution.stat)
                      const improvementParts = solution.improvement ? parseStat(solution.improvement) : null
                      return (
                        <div 
                          key={`solution-${activeTab}-${index}`}
                          className={`${styles.statCard} ${styles.solutionCard} ${isInView ? styles.cardInView : ''}`}
                          style={{ transitionDelay: isInView ? `${index * 0.1}s` : '0s' }}
                        >
                          {solution.improvement && (
                            <div className={styles.improvementBadge}>
                              {improvementParts?.value === Infinity ? (
                                <span>∞</span>
                              ) : improvementParts ? (
                                <AnimatedNumber
                                  value={improvementParts.value}
                                  suffix={improvementParts.suffix}
                                  prefix={improvementParts.prefix}
                                  decimals={improvementParts.decimals}
                                  duration={1500}
                                />
                              ) : (
                                solution.improvement
                              )}
                            </div>
                          )}
                          <div className={styles.cardIcon}>
                            <solution.icon size={24} />
                          </div>
                          <div className={styles.cardContent}>
                            <h4 className={styles.cardTitle}>{solution.title}</h4>
                            <div className={styles.statContainer}>
                              <div className={styles.statValue}>
                                {statParts.value === Infinity ? (
                                  <span>∞</span>
                                ) : (
                                  <AnimatedNumber
                                    value={statParts.value}
                                    suffix={statParts.suffix}
                                    prefix={statParts.prefix}
                                    decimals={statParts.decimals}
                                    duration={2000}
                                  />
                                )}
                              </div>
                              <div className={styles.statLabel}>{solution.statLabel}</div>
                            </div>
                            <p className={styles.cardImpact}>{solution.impact}</p>
                            <div className={styles.cardSource}>Source: {solution.source}</div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
