import React from 'react'
import styles from './TrackSection.module.css'

interface TrackCard {
  id: string
  title: string
  subtitle: string
  image: string
}

const trackCards: TrackCard[] = [
  {
    id: 'deposit-rates',
    title: 'Deposit Rates',
    subtitle: 'Savings, MMA, and CD rates—live and updated weekly.',
    image: '/assets/images/product/deposit1.png'
  },
  {
    id: 'loan-rates',
    title: 'Loan Rates',
    subtitle: 'Auto, mortgage, and personal loan rates tracked daily.',
    image: '/assets/images/product/loan1.png'
  },
  {
    id: 'fees-minimums',
    title: 'Fees & Minimums',
    subtitle: 'Fees, minimums, and promotional offers monitored.',
    image: '/assets/images/product/fee1.png'
  },
  {
    id: 'promotional-offers',
    title: 'Promotions',
    subtitle: 'Limited-time offers and bonuses detected automatically.',
    image: '/assets/images/product/promotions1.png'
  },
  {
    id: 'digital-features',
    title: 'Digital Features',
    subtitle: 'Mobile apps and platform capabilities analyzed.',
    image: '/assets/images/product/digital1.png'
  },
  {
    id: 'rewards-cashback',
    title: 'Rewards & Cashback',
    subtitle: 'Reward programs and incentives benchmarked.',
    image: '/assets/images/product/rewards1.png'
  },
  {
    id: 'rate-history',
    title: 'Rate History',
    subtitle: 'Historical data and competitor trends over time.',
    image: '/assets/images/product/ratehistory1.png'
  },
  {
    id: 'alerts-delivery',
    title: 'Alerts & Reports',
    subtitle: 'Email updates, dashboard, and executive reports.',
    image: '/assets/images/product/alert1.png'
  }
]

function TrackSection() {
  return (
    <section className={styles.trackSection}>
      {/* Image Container with Text Overlay */}
      <div className={styles.trackImageContainer}>
        <div className={styles.trackImageWrapper}>
          <img 
            src="/assets/images/product/bgCI.png" 
            alt="What we track"
            className={styles.trackImage}
          />
          
          {/* Text Overlay */}
          <div className={styles.trackTextOverlay}>
            <h2 className={styles.trackHeadline}>
              Intelligence At The Speed Of Banking
            </h2>
            <h3 className={styles.trackSubtitle}>
              What do we track? (So you dont have to)
            </h3>
          </div>
        </div>
      </div>

      {/* Feature Cards Grid */}
      <div className={styles.cardsSection}>
        <div className={styles.cardsGrid}>
          {trackCards.map((card, index) => (
            <div 
              key={card.id} 
              className={styles.trackCard}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className={styles.cardImageContainer}>
                <img 
                  src={card.image}
                  alt={card.title}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.cardTitle}>{card.title}</h4>
                <p className={styles.cardDesc}>{card.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrackSection