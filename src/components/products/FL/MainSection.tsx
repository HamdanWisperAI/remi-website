'use client'

import React from 'react'
import { Android } from '@/components/ui/shadcn-io/android'
import styles from './MainSection.module.css'

function MainSection() {
  return (
    <section className={styles.flHeroSection}>
      {/* Background */}
      <div className={styles.flHeroBackground} />
      
      {/* Vignette overlay */}
      <div className={styles.flHeroVignette} />

      {/* Container */}
      <div className={styles.flHeroContainer}>
        {/* Left Side - Text Content */}
        <div className={styles.flHeroLeft}>
          <div className={styles.flHeroEyebrow}>FINANCIAL LITERACY</div>
          
          <h1 className={styles.flHeroHeadline}>
            Financial Education That Members Actually Complete
          </h1>
          
          <p className={styles.flHeroSubheadline}>
            700+ Lessons. 80-83% Completion Rate. 100% Your Brand.
            <span className={styles.flHeroPulseDot}></span>
          </p>
          
          <p className={styles.flHeroBody}>
            Remember that financial literacy program you launched? The one with 12.6% completion rates? Where members downloaded the PDF and never opened it? Where your team spent months creating content that gathered digital dust?
          </p>
          
          <p className={styles.flHeroValueStatement}>
            We fixed that. With data to prove it.
          </p>
          
          <div className={styles.flHeroButtons}>
            <button className={`${styles.flBtn} ${styles.flBtnPrimary}`}>See the Platform</button>
            <button className={`${styles.flBtn} ${styles.flBtnSecondary}`}>Calculate Your ROI</button>
          </div>
        </div>

        {/* Right Side - Phone Mockup */}
        <div className={styles.flHeroRight}>
          <div className={styles.flHeroPhoneWrapper}>
            <Android 
              src="/assets/images/Remi.jpg"
              className={styles.androidPhone}
            />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.flHeroScrollIndicator}>
        <div className={styles.flScrollChevron}></div>
      </div>
    </section>
  )
}

export default MainSection
