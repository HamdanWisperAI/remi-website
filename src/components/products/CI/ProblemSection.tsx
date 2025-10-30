import React, { useEffect, useRef, useState } from 'react'
import styles from './ProblemSection.module.css'

function ProblemSection() {
  const sectionRef = useRef(null)
  const [isInView, setIsInView] = useState(false)

  const problems = [
    'Quarterly mystery shopping keeps you perpetually behind',
    'Manual competitor tracking wastes hours every week',
    'Annual analysis is obsolete in weeks, not months',
    'Static spreadsheets can\'t match market speed'
  ]

  const competitorActions = [
    'Change rates three times per week.',
    'Launch new products without warning.',
    'Adjust terms overnight.',
    'Target your best members.'
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
        
        {/* PART 1: Problem Section - Image Left, Text Right */}
        <div className={styles.problemLayout}>
          
          {/* Left Column - Image */}
          <div className={`${styles.problemImageWrapper} ${isInView ? styles.imageInView : ''}`}>
            <img 
              src="/.jpg" 
              alt="Bank analyst working late on competitive rates analysis"
              className={styles.problemImage}
            />
          </div>

          {/* Right Column - Text Content */}
          <div className={styles.problemContent}>
            
            {/* Main Headline */}
            <h2 className={`${styles.mainHeadline} ${isInView ? styles.headlineInView : ''}`}>
              Are You Still Relying on Yesterday's Data?
            </h2>

            {/* Problem Grid - Modern Cards */}
            <div className={styles.problemsGrid}>
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className={`${styles.problemCard} ${isInView ? styles.cardInView : ''}`}
                  style={{ transitionDelay: isInView ? `${index * 0.1}s` : '0s' }}
                >
                  <p className={styles.cardText}>{problem}</p>
                </div>
              ))}
            </div>

            {/* Final Problem Statement */}
            <p className={`${styles.finalStatement} ${isInView ? styles.statementInView : ''}`}>
              Your competitors move at market speed—do you?
            </p>

          </div>
        </div>

        {/* PART 2: Competitor Section - Text Left, Image Right (Inverted) */}
        <div className={styles.competitorLayout}>

          {/* Left Column - Competitor Text Content */}
          <div className={styles.competitorContent}>

            {/* Competitor Headline */}
            <h3 className={`${styles.competitorHeadline} ${isInView ? styles.headlineInView : ''}`}>
              Meanwhile, Your Competitors Are Moving Faster.
            </h3>

            {/* Competitor Subheading */}
            <p className={`${styles.competitorSubhead} ${isInView ? styles.subheadingInView : ''}`}>
              Are you keeping up with the pace of innovation?
            </p>

            {/* Competitor Grid - 2x2 cards like above */}
            <div className={styles.problemsGrid}>
              {competitorActions.map((action, index) => (
                <div
                  key={index}
                  className={`${styles.problemCard} ${isInView ? styles.cardInView : ''}`}
                  style={{ transitionDelay: isInView ? `${index * 0.12}s` : '0s' }}
                >
                  <p className={styles.cardText}>{action}</p>
                </div>
              ))}
            </div>

            {/* Competitor Final Statement */}
            <p className={`${styles.finalStatement} ${isInView ? styles.statementInView : ''}`}>
              The result? You find out you're uncompetitive when members leave.
            </p>

          </div>

          {/* Right Column - Competitor Image */}
          <div className={`${styles.competitorImageWrapper} ${isInView ? styles.competitorImageInView : ''}`}>
            <img
              src="/assets/images/product/CIcompetitors.png"
              alt="Competitors moving faster with innovation and speed"
              className={styles.competitorImage}
            />
          </div>

        </div>

      </div>
    </section>
  )
}

export default ProblemSection