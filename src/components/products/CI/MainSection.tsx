import React from 'react'
import styles from './MainSection.module.css'

function MainSection() {
  return (
    <section className={styles.ciHeroSection}>
      {/* Background */}
      <div className={styles.ciHeroBackground} />
      
      {/* Vignette overlay */}
      <div className={styles.ciHeroVignette} />

      {/* Container */}
      <div className={styles.ciHeroContainer}>
        {/* Left Side - Text Content */}
        <div className={styles.ciHeroLeft}>
          <div className={styles.ciHeroEyebrow}>COMPETITIVE INTELLIGENCE</div>
          
          <h1 className={styles.ciHeroHeadline}>
            Competitive Intelligence That Actually Keeps Up
          </h1>
          
          <p className={styles.ciHeroSubheadline}>
            Every rate. Every product. Every competitor. Updated weekly.
            <span className={styles.ciHeroPulseDot}></span>
          </p>
          
          <p className={styles.ciHeroBody}>
            Stop playing detective with competitor websites at midnight. Stop the quarterly mystery shopping that's outdated before the report's done. Stop pretending that annual competitive analysis is enough when rates change daily.
          </p>
          
          <p className={styles.ciHeroValueStatement}>
            Welcome to intelligence that moves at market speed.
          </p>
          
          <div className={styles.ciHeroButtons}>
            <button className={`${styles.ciBtn} ${styles.ciBtnPrimary}`}>See Live Demo</button>
            <button className={`${styles.ciBtn} ${styles.ciBtnSecondary}`}>Get Free Snapshot</button>
          </div>
        </div>

        {/* Right Side - Dashboard Image */}
        <div className={styles.ciHeroRight}>
          <div className={styles.ciHeroDashboardWrapper}>
            <img 
              src="/assets/images/product/Dashboard CI.png" 
              alt="Competitive Intelligence Dashboard"
              className={styles.ciHeroDashboardImage}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.ciHeroScrollIndicator}>
        <div className={styles.ciScrollChevron}></div>
      </div>
    </section>
  )
}

export default MainSection