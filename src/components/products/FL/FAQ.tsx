'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import styles from './FAQ.module.css'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "We already have financial education. What's the difference?",
    answer: "Cool. What's the completion rate? (Spoiler: if it's PDFs, it's under 13%) Our microlearning approach delivers 80-83% completion rates through 3-5 minute mobile-optimized lessons that connect to your actual products. Traditional programs fail because they're too long, desktop-only, and don't drive action."
  },
  {
    id: 2,
    question: "Our members aren't mobile-first. Will this work?",
    answer: "Even 55+ users show 70% mobile engagement. They bank on phones. They'll learn on phones. Mobile learning shows 45% better completion rates than desktop-only delivery. Your members are already using mobile banking - this just extends that experience to education."
  },
  {
    id: 3,
    question: "How do we know it actually works?",
    answer: "Meta-analysis of 160,000+ participants across 76 randomized controlled trials. Published research from FINRA Foundation, CFPB, and academic institutions. Not marketing fluff - peer-reviewed studies showing 23-26 point credit score improvements and 10-33% delinquency reduction."
  },
  {
    id: 4,
    question: "What if our core system is ancient?",
    answer: "If it has an API (even SOAP), we connect. We've seen COBOL from 1982. We make it work. Our platform integrates with any system that can handle basic API calls or file transfers. We've successfully deployed with credit unions using 20+ year old core systems."
  },
  {
    id: 5,
    question: "Do members really want this?",
    answer: "74% say financial wellness from their FI is important. Only 28% of institutions offer it. Be the 28%. Members are asking for help with financial education - they just want it delivered in a way that fits their busy lives and actually works."
  },
  {
    id: 6,
    question: "What about compliance and data security?",
    answer: "100% compliant with financial regulations. Your data stays yours - always. We're SOC 2 Type II certified, use bank-level encryption, and never share member data. All content is reviewed by compliance experts and meets regulatory standards."
  }
]

function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqContainer}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.mainTitle}>
            FREQUENTLY WONDERED
          </h2>
          
          {/* Animated Accent Bar */}
          <div className={styles.accentBars}>
            <div className={styles.accentBar}></div>
            <div className={styles.accentBar}></div>
            <div className={styles.accentBar}></div>
          </div>

          <p className={styles.subtitle}>
            "But what about..."
          </p>
        </div>

        {/* FAQ Items */}
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div 
              key={item.id}
              className={`${styles.faqItem} ${openItems.includes(item.id) ? styles.faqItemOpen : ''} ${styles.fadeInUp}`}
              style={{ 
                animationDelay: `${index * 0.1}s`
              }}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleItem(item.id)}
                aria-expanded={openItems.includes(item.id)}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className={styles.questionText}>{item.question}</span>
                <div className={styles.chevron}>
                  {openItems.includes(item.id) ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
              </button>
              
              <div 
                id={`faq-answer-${item.id}`}
                className={`${styles.faqAnswer} ${openItems.includes(item.id) ? styles.faqAnswerOpen : ''}`}
              >
                <div className={styles.answerContent}>
                  <p className={styles.answerText}>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCTA}>
          <p className={styles.ctaText}>
            Still have questions? Let's talk.
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaButtonPrimary}>
              Schedule a Call
            </button>
            <button className={styles.ctaButtonSecondary}>
              Email Us
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
