import React, { useEffect, useRef, useState, useCallback } from 'react'
import styles from './ProblemSection.module.css'

function ProblemSection() {
  const sectionRef = useRef(null)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)
  const [sliderXPercent, setSliderXPercent] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [isMouseOver, setIsMouseOver] = useState(false)

  const currentReality = {
    title: 'The Current CRA Reality',
    icon: (
      <svg className={styles.crossIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    items: [
      { text: 'Launch programs to ', highlight: 'check boxes', highlightStyle: 'red' },
      { text: 'Report ', highlight: 'attendance', highlightStyle: 'red', text2: ', not ', highlight2: 'outcomes', highlightStyle2: 'red' },
      { text: 'Document ', highlight: 'activity', highlightStyle: 'red', text2: ', not ', highlight2: 'impact', highlightStyle2: 'red' },
      { text: 'Hope examiner sees ', highlight: 'innovation', highlightStyle: 'red' }
    ],
    badge: 'Pray for "Satisfactory" rating',
    type: 'currentReality'
  }

  const innovationOpportunity = {
    title: 'The Innovation Opportunity',
    icon: (
      <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    items: [
      { text: '', highlight: 'Measurable', highlightStyle: 'green', text2: ' behavior change', highlight2: '', highlightStyle2: '' },
      { text: '', highlight: 'Documented', highlightStyle: 'green', text2: ' member ', highlight2: 'outcomes', highlightStyle2: 'green' },
      { text: 'Credit score improvements: ', highlight: '23-26 points', highlightStyle: 'green' },
      { text: 'Delinquency reductions: ', highlight: '10-33%', highlightStyle: 'green' }
    ],
    badge: 'Real impact regulators recognize',
    type: 'innovationOpp'
  }

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

  const handleMove = useCallback(
    (clientX: number) => {
      if (!sliderRef.current) return
      const rect = sliderRef.current.getBoundingClientRect()
      const x = clientX - rect.left
      const percent = (x / rect.width) * 100
      requestAnimationFrame(() => {
        setSliderXPercent(Math.max(0, Math.min(100, percent)))
      })
    },
    []
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging || isMouseOver) {
        handleMove(e.clientX)
      }
    },
    [isDragging, isMouseOver, handleMove]
  )

  const handleMouseDown = useCallback(() => {
    setIsDragging(true)
  }, [])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsMouseOver(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsMouseOver(false)
    setIsDragging(false)
  }, [])

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setIsDragging(true)
      handleMove(e.touches[0].clientX)
    },
    [handleMove]
  )

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (isDragging) {
        handleMove(e.touches[0].clientX)
      }
    },
    [isDragging, handleMove]
  )

  const renderHighlightedText = (item: {
    text?: string;
    highlight?: string;
    highlightStyle?: string;
    text2?: string;
    highlight2?: string;
    highlightStyle2?: string;
  }) => {
    const highlightClass = item.highlightStyle === 'red' 
      ? styles.highlightRed 
      : item.highlightStyle === 'green' 
      ? styles.highlightGreen 
      : ''

    const highlightClass2 = item.highlightStyle2 === 'red' 
      ? styles.highlightRed 
      : item.highlightStyle2 === 'green' 
      ? styles.highlightGreen 
      : ''

    return (
      <>
        {item.text && <span>{item.text}</span>}
        {item.highlight && <span className={highlightClass}>{item.highlight}</span>}
        {item.text2 && <span>{item.text2}</span>}
        {item.highlight2 && <span className={highlightClass2}>{item.highlight2}</span>}
      </>
    )
  }

  const renderCard = (data: typeof currentReality, className: string) => (
    <div className={`${styles.comparisonCard} ${styles[data.type]} ${className}`}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          {data.icon}
        </div>
        <h3 className={styles.cardTitle}>{data.title}</h3>
      </div>
      
      <div className={styles.cardContent}>
        {data.items.map((item, itemIndex) => (
          <div 
            key={itemIndex}
            className={`${styles.listItem} ${isInView ? styles.listItemInView : ''}`}
            style={{ transitionDelay: isInView ? `${itemIndex * 0.1}s` : '0s' }}
          >
            <svg className={styles.listIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              {data.type === 'currentReality' ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              )}
            </svg>
            <p className={styles.itemText}>{renderHighlightedText(item)}</p>
          </div>
        ))}
      </div>
      
      <div className={styles.cardFooter}>
        <span className={styles.badge}>{data.badge}</span>
      </div>
    </div>
  )

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

        {/* Compare Slider Container */}
        <div 
          ref={sliderRef}
          className={styles.compareContainer}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {/* Background Card - Current Reality */}
          <div className={styles.backgroundCard}>
            {renderCard(currentReality, '')}
          </div>

          {/* Foreground Card - Innovation Opportunity (revealed by slider) */}
          <div 
            className={styles.foregroundCard}
            style={{
              clipPath: `inset(0 ${100 - sliderXPercent}% 0 0)`,
            }}
          >
            {renderCard(innovationOpportunity, '')}
          </div>

          {/* Slider Handle */}
          <div 
            className={styles.sliderHandle}
            style={{
              left: `${sliderXPercent}%`,
            }}
          >
            <div className={styles.handleLine} />
            <div className={styles.handleCircle}>
              <svg className={styles.handleIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Final Statement */}
        <p className={`${styles.finalStatement} ${isInView ? styles.statementInView : ''}`}>
          The Missing Link: <span className={styles.finalHighlight}>Technology</span> that <span className={styles.finalHighlight}>tracks everything</span>, proves <span className={styles.finalHighlight}>impact</span>, and <span className={styles.finalHighlight}>runs itself</span>.
        </p>

      </div>
    </section>
  )
}

export default ProblemSection

