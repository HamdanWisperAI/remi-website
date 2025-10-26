'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Android } from '@/components/ui/shadcn-io/android'
import { GraduationCap, Home, Briefcase, Clock } from 'lucide-react'
import styles from './PhoneDashboard-new.module.css'

interface Lesson {
  id: string
  title: string
  duration: string
  progress: number
  difficulty: string
  description: string
}

interface Persona {
  id: string
  name: string
  icon: React.ElementType
  description: string
  lessons: Lesson[]
  color: string
}

const personas: Persona[] = [
  {
    id: 'first-job',
    name: 'First Job',
    icon: GraduationCap,
    description: 'Student loans, budgeting, emergency funds',
    color: '#3b82f6',
    lessons: [
      { id: '1', title: 'Managing Student Loan Payments', duration: '3 min', progress: 80, difficulty: 'Beginner', description: 'Learn how to structure your student loan payments effectively' },
      { id: '2', title: 'Building Your First Budget', duration: '4 min', progress: 60, difficulty: 'Beginner', description: 'Create a budget that works for your new income' },
      { id: '3', title: 'Emergency Fund Basics', duration: '3 min', progress: 40, difficulty: 'Beginner', description: 'Start saving for unexpected expenses' }
    ]
  },
  {
    id: 'young-family',
    name: 'Young Family',
    icon: Home,
    description: 'Savings, insurance, home buying',
    color: '#10b981',
    lessons: [
      { id: '1', title: 'Life Insurance Essentials', duration: '4 min', progress: 90, difficulty: 'Intermediate', description: 'Protect your family with the right insurance coverage' },
      { id: '2', title: 'Saving for a Home', duration: '5 min', progress: 70, difficulty: 'Intermediate', description: 'Build a down payment and understand mortgages' },
      { id: '3', title: 'College Savings Plans', duration: '4 min', progress: 50, difficulty: 'Intermediate', description: 'Start saving for your children\'s education' }
    ]
  },
  {
    id: 'mid-career',
    name: 'Mid-Career',
    icon: Briefcase,
    description: 'Investments, retirement, wealth building',
    color: '#8b5cf6',
    lessons: [
      { id: '1', title: '401(k) Optimization', duration: '4 min', progress: 85, difficulty: 'Advanced', description: 'Maximize your employer retirement benefits' },
      { id: '2', title: 'Investment Portfolio Basics', duration: '5 min', progress: 65, difficulty: 'Advanced', description: 'Build a diversified investment strategy' },
      { id: '3', title: 'Tax-Advantaged Accounts', duration: '4 min', progress: 45, difficulty: 'Advanced', description: 'Leverage IRAs and HSAs for tax benefits' }
    ]
  },
  {
    id: 'pre-retirement',
    name: 'Pre-Retirement',
    icon: Clock,
    description: 'Estate planning, retirement income',
    color: '#f59e0b',
    lessons: [
      { id: '1', title: 'Retirement Income Planning', duration: '5 min', progress: 75, difficulty: 'Expert', description: 'Create sustainable income for retirement' },
      { id: '2', title: 'Estate Planning Basics', duration: '4 min', progress: 55, difficulty: 'Expert', description: 'Protect your assets and plan for heirs' },
      { id: '3', title: 'Social Security Optimization', duration: '4 min', progress: 35, difficulty: 'Expert', description: 'Maximize your Social Security benefits' }
    ]
  }
]

const PersonaView = ({ persona }: { persona: Persona }) => (
  <div className={styles.personaContent}>
    <div className={styles.personaHeader}>
      <div className={styles.personaIcon} style={{ backgroundColor: persona.color }}>
        <persona.icon size={24} />
      </div>
      <div className={styles.personaInfo}>
        <h3 className={styles.personaName}>{persona.name}</h3>
        <p className={styles.personaDescription}>{persona.description}</p>
      </div>
    </div>

    <div className={styles.lessonsList}>
      {persona.lessons.map((lesson, index) => (
        <motion.div
          key={lesson.id}
          className={styles.lessonCard}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <div className={styles.lessonHeader}>
            <h4 className={styles.lessonTitle}>{lesson.title}</h4>
            <div className={styles.lessonMeta}>
              <span className={styles.lessonDuration}>{lesson.duration}</span>
              <span className={styles.lessonDifficulty}>{lesson.difficulty}</span>
            </div>
          </div>
          
          <p className={styles.lessonDescription}>{lesson.description}</p>
          
          <div className={styles.lessonProgress}>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ 
                  width: `${lesson.progress}%`,
                  backgroundColor: persona.color 
                }}
              />
            </div>
            <span className={styles.progressText}>{lesson.progress}%</span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
)

const PersonaExplanation = ({ persona }: { persona: Persona }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className={styles.explanationPanel}
  >
    <h4 className={styles.explanationTitle}>Personalized Learning Path</h4>
    <p className={styles.explanationText}>
      Content tailored for <span className={styles.keywordHighlight}>{persona.name.toLowerCase()}</span> life stage. 
      Each lesson is <span className={styles.keywordHighlight}>3-5 minutes</span> and connects to 
      <span className={styles.keywordHighlight}> relevant financial products</span> your institution offers.
    </p>
    <div className={styles.explanationStats}>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>80-83%</span>
        <span className={styles.statLabel}>Completion Rate</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statNumber}>92%</span>
        <span className={styles.statLabel}>Play-through Rate</span>
      </div>
    </div>
  </motion.div>
)

function PhoneDashboard() {
  const [activePersona, setActivePersona] = useState<Persona>(personas[0])

  return (
    <section className={styles.dashboardSection}>
      {/* Section Title */}
      <div className={styles.titleContainer}>
        <motion.h2
          className={styles.mainTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Life-Stage Learning Platform
        </motion.h2>

        {/* Animated Accent Bar */}
        <motion.div
          className={styles.accentBars}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className={styles.accentBar}></div>
          <div className={styles.accentBar}></div>
          <div className={styles.accentBar}></div>
        </motion.div>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Right lesson, right time, right member.
        </motion.p>
      </div>

      {/* Dashboard Container with 10/70/20 Layout */}
      <motion.div
        className={styles.dashboardContainer}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {/* Persona Selection Tabs - Horizontal on top */}
        <motion.div
          className={styles.personasTabs}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {personas.map((persona) => (
            <motion.button
              key={persona.id}
              className={`${styles.personaTab} ${activePersona.id === persona.id ? styles.personaTabActive : ''}`}
              onClick={() => setActivePersona(persona)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={styles.personaIconWrapper} style={{ backgroundColor: `${persona.color}20`, color: persona.color }}>
                <persona.icon size={24} />
              </div>
              <div className={styles.personaTextWrapper}>
                <div className={styles.personaLabel}>{persona.name}</div>
                <div className={styles.personaDesc}>{persona.description}</div>
              </div>
              
              {activePersona.id === persona.id && (
                <motion.div
                  className={styles.activeIndicator}
                  layoutId="activeIndicator"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Content Area */}
        <div className={styles.contentArea}>
          {/* Phone Mockup - Centered */}
          <div className={styles.phoneWrapper}>
            <Android 
              src="/assets/images/Remi.jpg"
              className={styles.phone}
            />
          </div>

          {/* Lesson Content Below Phone */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePersona.id}
              className={styles.lessonContent}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Stats Cards */}
              <div className={styles.statsRow}>
                <div className={styles.statCard} style={{ borderTopColor: activePersona.color }}>
                  <span className={styles.statValue}>80-83%</span>
                  <span className={styles.statLabel}>Completion Rate</span>
                </div>
                <div className={styles.statCard} style={{ borderTopColor: activePersona.color }}>
                  <span className={styles.statValue}>3-5 min</span>
                  <span className={styles.statLabel}>Per Lesson</span>
                </div>
                <div className={styles.statCard} style={{ borderTopColor: activePersona.color }}>
                  <span className={styles.statValue}>700+</span>
                  <span className={styles.statLabel}>Lessons</span>
                </div>
              </div>

              {/* Lesson Cards */}
              <div className={styles.lessonsRow}>
                {activePersona.lessons.map((lesson, index) => (
                  <motion.div
                    key={lesson.id}
                    className={styles.lessonCard}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <div className={styles.lessonTop}>
                      <span className={styles.lessonBadge} style={{ backgroundColor: `${activePersona.color}20`, color: activePersona.color }}>
                        {lesson.duration}
                      </span>
                      <span className={styles.lessonLevel}>{lesson.difficulty}</span>
                    </div>
                    <h5 className={styles.lessonTitle}>{lesson.title}</h5>
                    <p className={styles.lessonDesc}>{lesson.description}</p>
                    <div className={styles.lessonProgressBar}>
                      <div className={styles.progressTrack}>
                        <div 
                          className={styles.progressBar}
                          style={{ 
                            width: `${lesson.progress}%`,
                            backgroundColor: activePersona.color 
                          }}
                        />
                      </div>
                      <span className={styles.progressPercent}>{lesson.progress}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}

export default PhoneDashboard
