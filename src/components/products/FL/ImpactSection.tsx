'use client'

import React, { useEffect, useRef, useState } from 'react'
import { TrendingUp, Users, Award, Target } from 'lucide-react'
import styles from './ImpactSection.module.css'

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

function ImpactSection() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  const caseStudies = [
    {
      company: 'Pandora Jewelry',
      improvement: '15% → 90%',
      description: 'completion rate',
      details: '6x improvement after mobile microlearning',
      icon: TrendingUp,
      color: '#3b82f6'
    },
    {
      company: 'Shell Global',
      improvement: '75%+',
      description: 'completion across all topics',
      details: '86,000 employees, 70+ countries',
      icon: Users,
      color: '#10b981'
    },
    {
      company: 'MARS Corporation',
      improvement: '90%',
      description: 'average completion',
      details: '1,000 microlessons, 100,000 employees',
      icon: Award,
      color: '#8b5cf6'
    },
    {
      company: '2U Education Platform',
      improvement: '5% → 85%',
      description: 'completion',
      details: '17x improvement with mobile integration',
      icon: Target,
      color: '#f59e0b'
    }
  ]

  const businessImpacts = [
    {
      title: 'Member Outcomes',
      stats: [
        { label: 'Credit scores up', value: 32, suffix: ' points' },
        { label: 'Delinquency rates down', value: 33, suffix: '%' },
        { label: 'Savings account openings', value: 45, suffix: '% increase' }
      ]
    },
    {
      title: 'Institution Benefits',
      stats: [
        { label: 'Healthcare savings', value: 6, suffix: 'x ROI' },
        { label: 'Employee referral rates', value: 2, suffix: 'x increase' },
        { label: 'Support burden reduction', value: 60, suffix: '%' }
      ]
    },
    {
      title: 'Competitive Advantage',
      stats: [
        { label: 'Fortune 500 adoption', value: 67, suffix: '%' },
        { label: 'Financial app completion', value: 88, suffix: '%' },
        { label: 'Market growth rate', value: 24, suffix: '% annually' }
      ]
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
    <section className={styles.impactSection} ref={sectionRef}>
      {/* Animated Background Grid Pattern */}
      <div className={styles.backgroundGrid} />
      
      <div className={styles.impactContainer}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.mainHeadline} ${isInView ? styles.headlineInView : ''}`}>
            REAL PROGRAMS. REAL IMPACT.
          </h2>
          
          {/* Animated Accent Bar */}
          <div className={styles.accentBars}>
            <div className={styles.accentBar}></div>
            <div className={styles.accentBar}></div>
            <div className={styles.accentBar}></div>
          </div>

          <p className={`${styles.subHeadline} ${isInView ? styles.subheadlineInView : ''}`}>
            Case Studies That Matter
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className={styles.caseStudiesGrid}>
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className={`${styles.caseStudyCard} ${isInView ? styles.cardInView : ''}`}
              style={{ transitionDelay: isInView ? `${index * 0.1}s` : '0s' }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.cardIcon} style={{ backgroundColor: study.color }}>
                  <study.icon size={24} />
                </div>
                <h3 className={styles.companyName}>{study.company}</h3>
              </div>
              
              <div className={styles.improvement}>
                <span className={styles.improvementValue}>{study.improvement}</span>
                <span className={styles.improvementDescription}>{study.description}</span>
              </div>
              
              <p className={styles.cardDetails}>{study.details}</p>
            </div>
          ))}
        </div>

        {/* Business Impact Section */}
        <div className={styles.businessImpactSection}>
          <h3 className={`${styles.sectionTitle} ${isInView ? styles.titleInView : ''}`}>
            BEYOND COMPLETION: BUSINESS IMPACT
          </h3>
          <p className={`${styles.sectionSubtitle} ${isInView ? styles.subtitleInView : ''}`}>
            What Financial Literacy Really Delivers
          </p>

          <div className={styles.businessImpactsGrid}>
            {businessImpacts.map((impact, index) => (
              <div 
                key={index}
                className={`${styles.businessImpactCard} ${isInView ? styles.cardInView : ''}`}
                style={{ transitionDelay: isInView ? `${(index + 4) * 0.1}s` : '0s' }}
              >
                <h4 className={styles.impactTitle}>{impact.title}</h4>
                <div className={styles.statsList}>
                  {impact.stats.map((stat, statIndex) => (
                    <div key={statIndex} className={styles.statItem}>
                      <span className={styles.statLabel}>{stat.label}</span>
                      <span className={styles.statValue}>
                        <AnimatedNumber 
                          value={stat.value} 
                          duration={2000}
                          suffix={stat.suffix}
                        />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`${styles.bottomCTA} ${isInView ? styles.ctaInView : ''}`}>
          <p className={styles.ctaText}>
            Ready to see these results for your institution?
          </p>
          <button className={styles.ctaButton}>
            Start Your Pilot
          </button>
        </div>
      </div>
    </section>
  )
}

export default ImpactSection
