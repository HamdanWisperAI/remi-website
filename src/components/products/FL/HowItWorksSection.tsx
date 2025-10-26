'use client'

import React, { useState } from 'react'
import { BookOpen, Target, Link, Palette } from 'lucide-react'
import styles from './HowItWorksSection.module.css'

function HowItWorksSection() {
  const [clickedCard, setClickedCard] = useState<number | null>(null)

  const cards = [
    {
      id: 1,
      title: 'Nano-Learning Architecture',
      subtitle: '700+ pre-built lessons (3-5 minutes each)',
      details: [
        'Progressive difficulty levels',
        'Spaced repetition for retention',
        'Mobile-optimized delivery',
        'Interactive content formats'
      ],
      icon: BookOpen,
      color: '#3b82f6'
    },
    {
      id: 2,
      title: 'Life Moment Integration',
      subtitle: 'Right lesson at the right moment',
      details: [
        'First job? Student loans? New baby?',
        'Behavioral triggers, not random pushes',
        'Connection to actual decisions',
        'Personalized learning paths'
      ],
      icon: Target,
      color: '#10b981'
    },
    {
      id: 3,
      title: 'Product Integration',
      subtitle: 'Every lesson connects to your products',
      details: [
        '"Learn about CDs" → "Open a CD"',
        'Education drives action',
        'Track conversion lift',
        'Seamless product discovery'
      ],
      icon: Link,
      color: '#8b5cf6'
    },
    {
      id: 4,
      title: 'White-Label Delivery',
      subtitle: 'Your brand, your voice',
      details: [
        'Seamless app integration',
        'Custom content options',
        'Member data stays yours',
        'Complete brand consistency'
      ],
      icon: Palette,
      color: '#f59e0b'
    }
  ]

  return (
    <section className={styles.howItWorksSection}>
      {/* Animated Background Grid Pattern */}
      <div className={styles.backgroundGrid} />

      <div className={styles.container}>
        {/* Main Headline */}
        <div className={styles.header}>
          <h2 className={styles.mainTitle}>
            HOW IT ACTUALLY WORKS
          </h2>

          {/* Animated Accent Bar */}
          <div className={styles.accentBars}>
            <div className={styles.accentBar}></div>
            <div className={styles.accentBar}></div>
            <div className={styles.accentBar}></div>
          </div>

          <p className={styles.subtitle}>
            Smart, Simple, Scalable
          </p>
        </div>

        {/* Cards Container */}
        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`
                ${styles.card}
                ${clickedCard === card.id ? styles.cardClicked : ''}
              `}
              role="article"
              aria-label={`${card.title}: ${card.subtitle}`}
              tabIndex={0}
              onClick={() => {
                setClickedCard(card.id)
                setTimeout(() => setClickedCard(null), 300)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setClickedCard(card.id)
                  setTimeout(() => setClickedCard(null), 300)
                }
              }}
            >
              {/* Animated Border Effect */}
              <div 
                className={styles.cardBorder} 
                style={{ borderColor: card.color }}
              />

              {/* Card Number */}
              <div 
                className={styles.cardNumber}
                style={{ backgroundColor: card.color }}
              >
                {card.id}
              </div>

              {/* Card Icon */}
              <div 
                className={styles.cardIcon}
                style={{ backgroundColor: `${card.color}20` }}
              >
                <card.icon size={32} style={{ color: card.color }} />
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {card.title}
                </h3>

                <p className={styles.cardSubtitle}>
                  {card.subtitle}
                </p>

                {/* Details List */}
                <ul className={styles.detailsList}>
                  {card.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className={styles.detailItem}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Accent Line */}
              <div 
                className={styles.hoverAccent}
                style={{ backgroundColor: card.color }}
              />
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className={styles.bottomText}>
          <p className={styles.bottomDescription}>
            Ready to transform your financial education program?
          </p>
          <button className={styles.ctaButton}>
            See Implementation Timeline
          </button>
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
