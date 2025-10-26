'use client'

import React, { useEffect, useRef, useState } from 'react'
import { AlertCircle, Clock, Monitor, FileText, Zap, Smartphone, Target, Link, Play } from 'lucide-react'
import styles from './ProblemSection.module.css'

function ProblemSection() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  const problems = [
    {
      icon: Clock,
      title: '45-minute modules',
      subtitle: 'Median online course completion: 12.6%',
      description: 'Long-form content loses attention quickly'
    },
    {
      icon: Monitor,
      title: 'Desktop-only',
      subtitle: 'Mobile learning shows 45% better completion',
      description: 'Members bank on phones, learn on phones'
    },
    {
      icon: FileText,
      title: 'Generic content',
      subtitle: 'Not personalized to life moments',
      description: 'One-size-fits-all approach fails'
    },
    {
      icon: AlertCircle,
      title: 'No product connection',
      subtitle: 'Missed opportunity for engagement',
      description: 'Education should drive action'
    },
    {
      icon: Play,
      title: 'Passive learning',
      subtitle: 'Lecture format gets 35% completion',
      description: 'One-way communication doesn\'t stick'
    }
  ]

  const solutions = [
    {
      icon: Clock,
      title: '3-5 minute lessons',
      subtitle: '92% play-through rate',
      description: 'Bite-sized content that fits busy schedules'
    },
    {
      icon: Smartphone,
      title: 'Mobile-first design',
      subtitle: '80% completion vs 20% desktop',
      description: 'Optimized for how people actually learn'
    },
    {
      icon: Target,
      title: 'Life-stage personalization',
      subtitle: 'Right lesson, right time',
      description: 'Content that matches member needs'
    },
    {
      icon: Link,
      title: 'Embedded products',
      subtitle: 'Education drives action',
      description: 'Learn about CDs → Open a CD'
    },
    {
      icon: Zap,
      title: 'Interactive learning',
      subtitle: '45% faster with same retention',
      description: 'Engaging, hands-on experience'
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
    <section className={styles.problemSection} ref={sectionRef}>
      <div className={styles.problemContainer}>
        
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.mainHeadline} ${isInView ? styles.headlineInView : ''}`}>
            THE UNCOMFORTABLE TRUTH ABOUT FINANCIAL EDUCATION
          </h2>
          <p className={`${styles.subHeadline} ${isInView ? styles.subheadlineInView : ''}`}>
            Everyone agrees it's important. Nobody finishes it.
          </p>
        </div>

        {/* Traditional Problems Section */}
        <div className={styles.problemsLayout}>
          <div className={styles.problemsContent}>
            <h3 className={`${styles.sectionTitle} ${isInView ? styles.titleInView : ''}`}>
              Traditional financial literacy fails because:
            </h3>
            
            <div className={styles.cardsGrid}>
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className={`${styles.problemCard} ${isInView ? styles.cardInView : ''}`}
                  style={{ transitionDelay: isInView ? `${index * 0.1}s` : '0s' }}
                >
                  <div className={styles.cardIcon}>
                    <problem.icon size={24} />
                  </div>
                  <div className={styles.cardContent}>
                    <h4 className={styles.cardTitle}>{problem.title}</h4>
                    <p className={styles.cardSubtitle}>{problem.subtitle}</p>
                    <p className={styles.cardDescription}>{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Solution Section */}
        <div className={styles.solutionsLayout}>
          <div className={styles.solutionsContent}>
            <h3 className={`${styles.sectionTitle} ${isInView ? styles.titleInView : ''}`}>
              Our microlearning approach works because:
            </h3>
            
            <div className={styles.cardsGrid}>
              {solutions.map((solution, index) => (
                <div 
                  key={index}
                  className={`${styles.solutionCard} ${isInView ? styles.cardInView : ''}`}
                  style={{ transitionDelay: isInView ? `${(index + 5) * 0.1}s` : '0s' }}
                >
                  <div className={styles.cardIcon}>
                    <solution.icon size={24} />
                  </div>
                  <div className={styles.cardContent}>
                    <h4 className={styles.cardTitle}>{solution.title}</h4>
                    <p className={styles.cardSubtitle}>{solution.subtitle}</p>
                    <p className={styles.cardDescription}>{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sources */}
        <div className={`${styles.sources} ${isInView ? styles.sourcesInView : ''}`}>
          <p className={styles.sourcesText}>
            *Jordan 2015, **Market.us 2024, ***Video engagement studies
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProblemSection
