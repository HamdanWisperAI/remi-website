'use client'

import React, { useEffect, useRef, useState } from 'react'
import { TrendUp, DeviceMobile, Clock, Trophy, ShieldCheck } from '@phosphor-icons/react'
import { HexagonBackground } from '@/components/animate-ui/components/backgrounds/hexagon'
import styles from './ResearchSection.module.css'

interface AnimatedNumberProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 2000, suffix = '', prefix = '' }) => {
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
      
      setDisplayValue(Math.floor(value * progress))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrameId)
  }, [value, duration, isVisible])

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
      {prefix}{displayValue}{suffix}
    </span>
  )
}

function ResearchSection() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  const stats = [
    {
      icon: TrendUp,
      title: 'Completion Rate',
      value: 83,
      suffix: '%',
      subtitle: 'vs 12.6% traditional',
      comparison: '+70.4%',
      description: 'Microlearning vs traditional online courses',
      source: 'EdApp 2021, Jordan 2015',
      iconColor: 'blue'
    },
    {
      icon: DeviceMobile,
      title: 'Mobile Engagement',
      value: 4,
      suffix: 'x',
      subtitle: 'better than desktop',
      comparison: '+300%',
      description: 'Mobile learning advantage',
      source: 'Mobile learning industry studies 2024',
      iconColor: 'purple'
    },
    {
      icon: Clock,
      title: 'Faster Completion',
      value: 45,
      suffix: '%',
      subtitle: 'with same retention',
      comparison: '+45%',
      description: 'Mobile learning speed advantage',
      source: 'Merrill Lynch GoLearn Initiative',
      iconColor: 'indigo'
    },
    {
      icon: Trophy,
      title: 'Credit Score Improvement',
      value: 26,
      suffix: ' points',
      subtitle: 'average increase',
      comparison: '+26 pts',
      description: 'Following financial education',
      source: 'CFPB 2019, FINRA Foundation',
      iconColor: 'amber'
    },
    {
      icon: ShieldCheck,
      title: 'Delinquency Reduction',
      value: 33,
      suffix: '%',
      subtitle: 'maximum reduction',
      comparison: '-33%',
      description: 'State mandate programs',
      source: 'Federal Reserve Bank of NY/Equifax',
      iconColor: 'emerald'
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

  return (
    <section className={styles.researchSection} ref={sectionRef}>
      <HexagonBackground
        className={styles.hexagonBackground}
        hexagonSize={60}
        hexagonMargin={2}
        hexagonProps={{
          className: styles.hexagonStyle,
          style: {}
        }}
      />
      <div className={styles.researchContainer}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.mainHeadline} ${isInView ? styles.headlineInView : ''}`}>
            Research-backed results
          </h2>

          <p className={`${styles.subHeadline} ${isInView ? styles.subheadlineInView : ''}`}>
            Published data from leading financial institutions
          </p>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`${styles.statCard} ${isInView ? styles.cardInView : ''}`}
              style={{ transitionDelay: isInView ? `${index * 0.05}s` : '0s' }}
            >
              {/* Icon container - subtle, not prominent */}
              <div className={`${styles.cardIcon} ${styles[`icon${stat.iconColor.charAt(0).toUpperCase() + stat.iconColor.slice(1)}`]}`}>
                <stat.icon size={20} weight="duotone" />
              </div>
              
              <div className={styles.cardContent}>
                {/* Number first - largest element */}
                <div className={styles.statValue}>
                  <AnimatedNumber 
                    value={stat.value} 
                    duration={2000}
                    suffix={stat.suffix}
                  />
                </div>
                
                {/* Label */}
                <h3 className={styles.cardTitle}>{stat.title}</h3>
                
                {/* Comparison - subtle green badge */}
                <div className={styles.cardComparison}>
                  <span className={styles.comparisonValue}>{stat.comparison}</span>
                  <span className={styles.comparisonText}>{stat.subtitle}</span>
                </div>
                
                <p className={styles.cardDescription}>{stat.description}</p>
                
                {/* Source - tiny, footer */}
                <div className={styles.cardSource}>
                  <p className={styles.sourceText}>{stat.source}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`${styles.bottomCTA} ${isInView ? styles.ctaInView : ''}`}>
          <p className={styles.ctaText}>
            Ready to see these results for your members?
          </p>
          <button className={styles.ctaButton}>
            See Live Demo
          </button>
        </div>
      </div>
    </section>
  )
}

export default ResearchSection
