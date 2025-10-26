'use client'

import React from 'react'
import { CheckCircle, ArrowRight, Mail, Phone, MessageCircle } from 'lucide-react'
import styles from './CTA.module.css'

function CTA() {
  const steps = [
    {
      number: 1,
      title: 'See Your Current State',
      description: 'Free assessment of your existing program',
      details: [
        'Completion rate audit',
        'Content effectiveness review',
        'Competitive comparison'
      ],
      buttonText: 'Get Assessment',
      buttonVariant: 'primary' as const
    },
    {
      number: 2,
      title: 'See the Platform',
      description: '20-minute demo with your branding',
      details: [
        'Live platform walkthrough',
        'ROI calculator with your numbers',
        'Implementation timeline'
      ],
      buttonText: 'Book Demo',
      buttonVariant: 'secondary' as const
    },
    {
      number: 3,
      title: 'Start Small, Think Big',
      description: 'Pilot with 500 members',
      details: [
        '90-day trial',
        'Success metrics included',
        'No obligation to expand'
      ],
      buttonText: 'Start Pilot',
      buttonVariant: 'accent' as const
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'education@wisperai.com',
      href: 'mailto:education@wisperai.com'
    },
    {
      icon: Phone,
      label: 'Call',
      value: '(510) 555-0100',
      href: 'tel:+15105550100'
    },
    {
      icon: MessageCircle,
      label: 'Or just',
      value: 'Start a Conversation',
      href: '#contact'
    }
  ]

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.mainTitle}>
            START HERE
          </h2>
          
          {/* Animated Accent Bar */}
          <div className={styles.accentBars}>
            <div className={styles.accentBar}></div>
            <div className={styles.accentBar}></div>
            <div className={styles.accentBar}></div>
          </div>

          <p className={styles.subtitle}>
            Three Steps to Better Financial Literacy
          </p>
        </div>

        {/* Steps Grid */}
        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className={`${styles.stepCard} ${styles.fadeInUp}`}
              style={{ 
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Step Number */}
              <div className={styles.stepNumber}>
                {step.number}
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.stepTitle}>
                  {step.title}
                </h3>
                
                <p className={styles.stepDescription}>
                  {step.description}
                </p>

                {/* Details List */}
                <ul className={styles.detailsList}>
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className={styles.detailItem}>
                      <CheckCircle size={16} className={styles.checkIcon} />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  className={`${styles.stepButton} ${styles[`button${step.buttonVariant.charAt(0).toUpperCase() + step.buttonVariant.slice(1)}`]}`}
                >
                  {step.buttonText}
                  <ArrowRight size={16} className={styles.buttonIcon} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          {/* Math Section */}
          <div className={styles.mathSection}>
            <h3 className={styles.mathTitle}>
              THE BOTTOM LINE
            </h3>
            <p className={styles.mathSubtitle}>
              Simple Math, Big Impact
            </p>
            
            <div className={styles.mathGrid}>
              <div className={styles.mathItem}>
                <span className={styles.mathLabel}>Traditional financial education:</span>
                <span className={styles.mathValue}>12.6% completion</span>
              </div>
              <div className={styles.mathItem}>
                <span className={styles.mathLabel}>Microlearning approach:</span>
                <span className={styles.mathValue}>80-83% completion</span>
              </div>
              <div className={styles.mathItem}>
                <span className={styles.mathLabel}>Mobile boost:</span>
                <span className={styles.mathValue}>Additional 45%</span>
              </div>
              <div className={styles.mathItem}>
                <span className={styles.mathLabel}>Your advantage:</span>
                <span className={styles.mathValue}>Priceless</span>
              </div>
            </div>

            <div className={styles.finalMessage}>
              <p className={styles.messageText}>
                Every competitor is launching digital education.
                <br />
                The question isn't if. It's when.
                <br />
                And more importantly: will it work?
                <br />
                <strong>Ours does. The research proves it.</strong>
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h3 className={styles.contactTitle}>
              Questions?
            </h3>
            
            <div className={styles.contactGrid}>
              {contactInfo.map((contact, index) => (
                <a 
                  key={index}
                  href={contact.href}
                  className={styles.contactItem}
                >
                  <contact.icon size={20} className={styles.contactIcon} />
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>{contact.label}</span>
                    <span className={styles.contactValue}>{contact.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className={styles.psSection}>
              <p className={styles.psText}>
                <strong>P.S.</strong> - That 12.6% completion rate for traditional programs? 
                That's the median. Half do worse. How's yours doing?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
