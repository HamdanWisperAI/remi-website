import React, { useEffect, useRef, useState } from 'react'
import styles from './ProblemSection.module.css'

function ProblemSection() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  const currentReality = [
    'Launch programs to check boxes',
    'Report attendance, not outcomes',
    'Document activity, not impact',
    'Hope examiner sees innovation'
  ]

  const innovationOpportunity = [
    'Measurable behavior change',
    'Documented member outcomes',
    'Credit score improvements: 23-26 points',
    'Delinquency reductions: 10-33%'
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.problemSection} ref={sectionRef}>
      <div className={styles.problemContainer}>
        
        {/* Main Headline */}
        <h2 className={`${styles.mainHeadline} ${isInView ? styles.headlineInView : ''}`}>
          THE CRA INNOVATION PARADOX
        </h2>
        
        <p className={`${styles.subheadline} ${isInView ? styles.subheadlineInView : ''}`}>
          Regulators want innovation. They measure activity.
        </p>

        {/* Comparison Grid */}
        <div className={styles.comparisonGrid}>
          
          {/* Left Column - Current Reality */}
          <div className={`${styles.comparisonCard} ${styles.currentReality} ${isInView ? styles.cardInView : ''}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <svg className={styles.crossIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>The Current CRA Reality</h3>
            </div>
            
            <div className={styles.cardContent}>
              {currentReality.map((item, index) => (
                <div 
                  key={index}
                  className={`${styles.listItem} ${isInView ? styles.listItemInView : ''}`}
                  style={{ transitionDelay: isInView ? `${index * 0.1}s` : '0s' }}
                >
                  <svg className={styles.listIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            
            <div className={styles.cardFooter}>
              <span className={styles.badge}>Pray for "Satisfactory" rating</span>
            </div>
          </div>

          {/* Right Column - Innovation Opportunity */}
          <div className={`${styles.comparisonCard} ${styles.innovationOpp} ${isInView ? styles.cardInView : ''}`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>The Innovation Opportunity</h3>
            </div>
            
            <div className={styles.cardContent}>
              {innovationOpportunity.map((item, index) => (
                <div 
                  key={index}
                  className={`${styles.listItem} ${isInView ? styles.listItemInView : ''}`}
                  style={{ transitionDelay: isInView ? `${index * 0.1}s` : '0s' }}
                >
                  <svg className={styles.listIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            
            <div className={styles.cardFooter}>
              <span className={styles.badge}>Real impact regulators recognize</span>
            </div>
          </div>
          
        </div>

        {/* Final Statement */}
        <p className={`${styles.finalStatement} ${isInView ? styles.statementInView : ''}`}>
          The Missing Link: Technology that tracks everything, proves impact, and runs itself.
        </p>

      </div>
    </section>
  )
}

export default ProblemSection

