'use client'

import React, { useEffect, useRef, useState } from 'react'
import { TrendingUp, Smartphone, Clock, Award, Shield } from 'lucide-react'
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
      icon: TrendingUp,
      title: 'Completion Rate',
      value: 83,
      suffix: '%',
      subtitle: 'vs 12.6% traditional',
      description: 'Microlearning vs traditional online courses',
      source: 'EdApp 2021, Jordan 2015'
    },
    {
      icon: Smartphone,
      title: 'Mobile Engagement',
      value: 4,
      suffix: 'x',
      subtitle: 'better than desktop',
      description: 'Mobile learning advantage',
      source: 'Mobile learning industry studies 2024'
    },
    {
      icon: Clock,
      title: 'Faster Completion',
      value: 45,
      suffix: '%',
      subtitle: 'with same retention',
      description: 'Mobile learning speed advantage',
      source: 'Merrill Lynch GoLearn Initiative'
    },
    {
      icon: Award,
      title: 'Credit Score Improvement',
      value: 26,
      suffix: ' points',
      subtitle: 'average increase',
      description: 'Following financial education',
      source: 'CFPB 2019, FINRA Foundation'
    },
    {
      icon: Shield,
      title: 'Delinquency Reduction',
      value: 33,
      suffix: '%',
      subtitle: 'maximum reduction',
      description: 'State mandate programs',
      source: 'Federal Reserve Bank of NY/Equifax'
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
      {/* Animated Background Grid Pattern */}
      <div className={styles.backgroundGrid} />
      
      <div className={styles.researchContainer}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.mainHeadline} ${isInView ? styles.headlineInView : ''}`}>
            THE NUMBERS DON'T LIE
          </h2>
          
          {/* Animated Accent Bar */}
          <div className={styles.accentBars}>
            <div className={styles.accentBar}></div>
            <div className={styles.accentBar}></div>
            <div className={styles.accentBar}></div>
          </div>

          <p className={`${styles.subHeadline} ${isInView ? styles.subheadlineInView : ''}`}>
            Published Research. Real Results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`${styles.statCard} ${isInView ? styles.cardInView : ''}`}
              style={{ transitionDelay: isInView ? `${index * 0.1}s` : '0s' }}
            >
              <div className={styles.cardIcon}>
                <stat.icon size={32} />
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{stat.title}</h3>
                
                <div className={styles.statValue}>
                  <AnimatedNumber 
                    value={stat.value} 
                    duration={2000}
                    suffix={stat.suffix}
                  />
                </div>
                
                <p className={styles.cardSubtitle}>{stat.subtitle}</p>
                <p className={styles.cardDescription}>{stat.description}</p>
                
                <div className={styles.cardSource}>
                  <span className={styles.sourceLabel}>Sources:</span>
                  <span className={styles.sourceText}>{stat.source}</span>
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
