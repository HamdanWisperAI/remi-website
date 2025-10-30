'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Iphone15Pro } from '@/components/magicui/iphone-15-pro'
import { Marquee } from '@/components/magicui/marquee'
import { 
  GraduationCap, 
  Home, 
  Briefcase, 
  Clock, 
  TrendingUp,
  DollarSign,
  Wallet,
  PiggyBank,
  CreditCard,
  Shield,
  Building2,
  GraduationCap as CollegeIcon,
  Calculator,
  Rocket,
  Target,
  BarChart3,
  Coins,
  FileText,
  Heart,
  Smartphone,
  Link as LinkIcon
} from 'lucide-react'

interface Lesson {
  id: string
  title: string
  duration: string
  progress: number
  difficulty: string
  description: string
  icon: React.ElementType
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
      { 
        id: '1', 
        title: 'Managing Student Loan Payments', 
        duration: '3 min', 
        progress: 80, 
        difficulty: 'Beginner', 
        description: 'Learn how to structure your student loan payments effectively',
        icon: GraduationCap
      },
      { 
        id: '2', 
        title: 'Building Your First Budget', 
        duration: '4 min', 
        progress: 60, 
        difficulty: 'Beginner', 
        description: 'Create a budget that works for your new income',
        icon: Calculator
      },
      { 
        id: '3', 
        title: 'Emergency Fund Basics', 
        duration: '3 min', 
        progress: 40, 
        difficulty: 'Beginner', 
        description: 'Start saving for unexpected expenses',
        icon: PiggyBank
      },
      { 
        id: '4', 
        title: 'Understanding Credit Scores', 
        duration: '3 min', 
        progress: 20, 
        difficulty: 'Beginner', 
        description: 'Build credit from day one',
        icon: BarChart3
      },
      { 
        id: '5', 
        title: 'First Credit Card Tips', 
        duration: '4 min', 
        progress: 0, 
        difficulty: 'Beginner', 
        description: 'Use credit cards responsibly',
        icon: CreditCard
      }
    ]
  },
  {
    id: 'young-family',
    name: 'Young Family',
    icon: Home,
    description: 'Savings, insurance, home buying',
    color: '#10b981',
    lessons: [
      { 
        id: '1', 
        title: 'Life Insurance Essentials', 
        duration: '4 min', 
        progress: 90, 
        difficulty: 'Intermediate', 
        description: 'Protect your family with the right insurance coverage',
        icon: Shield
      },
      { 
        id: '2', 
        title: 'Saving for a Home', 
        duration: '5 min', 
        progress: 70, 
        difficulty: 'Intermediate', 
        description: 'Build a down payment and understand mortgages',
        icon: Building2
      },
      { 
        id: '3', 
        title: 'College Savings Plans', 
        duration: '4 min', 
        progress: 50, 
        difficulty: 'Intermediate', 
        description: 'Start saving for your children\'s education',
        icon: CollegeIcon
      },
      { 
        id: '4', 
        title: 'Family Budget Planning', 
        duration: '4 min', 
        progress: 30, 
        difficulty: 'Intermediate', 
        description: 'Manage expenses with growing family needs',
        icon: Wallet
      }
    ]
  },
  {
    id: 'mid-career',
    name: 'Mid-Career',
    icon: Briefcase,
    description: 'Investments, retirement, wealth building',
    color: '#8b5cf6',
    lessons: [
      { 
        id: '1', 
        title: '401(k) Optimization', 
        duration: '4 min', 
        progress: 85, 
        difficulty: 'Advanced', 
        description: 'Maximize your employer retirement benefits',
        icon: Rocket
      },
      { 
        id: '2', 
        title: 'Investment Portfolio Basics', 
        duration: '5 min', 
        progress: 65, 
        difficulty: 'Advanced', 
        description: 'Build a diversified investment strategy',
        icon: TrendingUp
      },
      { 
        id: '3', 
        title: 'Tax-Advantaged Accounts', 
        duration: '4 min', 
        progress: 45, 
        difficulty: 'Advanced', 
        description: 'Leverage IRAs and HSAs for tax benefits',
        icon: Coins
      },
      { 
        id: '4', 
        title: 'Estate Planning Basics', 
        duration: '4 min', 
        progress: 25, 
        difficulty: 'Advanced', 
        description: 'Protect your assets and plan for heirs',
        icon: FileText
      }
    ]
  },
  {
    id: 'pre-retirement',
    name: 'Pre-Retirement',
    icon: Clock,
    description: 'Estate planning, retirement income',
    color: '#f59e0b',
    lessons: [
      { 
        id: '1', 
        title: 'Retirement Income Planning', 
        duration: '5 min', 
        progress: 75, 
        difficulty: 'Expert', 
        description: 'Create sustainable income for retirement',
        icon: Target
      },
      { 
        id: '2', 
        title: 'Estate Planning Basics', 
        duration: '4 min', 
        progress: 55, 
        difficulty: 'Expert', 
        description: 'Protect your assets and plan for heirs',
        icon: FileText
      },
      { 
        id: '3', 
        title: 'Social Security Optimization', 
        duration: '4 min', 
        progress: 35, 
        difficulty: 'Expert', 
        description: 'Maximize your Social Security benefits',
        icon: DollarSign
      },
      { 
        id: '4', 
        title: 'Healthcare in Retirement', 
        duration: '4 min', 
        progress: 15, 
        difficulty: 'Expert', 
        description: 'Plan for healthcare costs and Medicare',
        icon: Heart
      }
    ]
  }
]

// Mini lesson card for inside phone
const LessonCardMini = ({ lesson, color }: { lesson: Lesson, color: string }) => (
  <div className="bg-white rounded-lg p-3 mb-2 shadow-sm border border-gray-100 w-full hover:shadow-md transition-shadow">
    <div className="flex items-start gap-3">
      {/* Icon */}
      <div 
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-all"
        style={{ 
          backgroundColor: `${color}12`,
          border: `1.5px solid ${color}20`
        }}
      >
        <lesson.icon size={18} style={{ color }} strokeWidth={2.5} />
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h4 className="text-sm font-semibold text-gray-900 leading-tight">
            {lesson.title}
          </h4>
          <span 
            className="text-xs font-medium px-2 py-0.5 rounded-full whitespace-nowrap shrink-0"
            style={{ 
              backgroundColor: `${color}15`,
              color: color
            }}
          >
            {lesson.duration}
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-gray-100 rounded-full h-1.5 mb-1">
          <div 
            className="h-1.5 rounded-full transition-all duration-500"
            style={{ 
              width: `${lesson.progress}%`,
              backgroundColor: color
            }}
          />
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500">{lesson.progress}% complete</span>
          <span className="text-xs text-gray-400">{lesson.difficulty}</span>
        </div>
      </div>
    </div>
  </div>
)

// Phone screen content - this goes INSIDE the phone mockup
const PhoneScreen = ({ persona }: { persona: Persona }) => (
  <div className="h-full w-full bg-linear-to-b from-gray-50 to-white flex flex-col overflow-hidden pt-12">
    {/* Mini header inside phone */}
    <div className="px-4 py-3 bg-white border-b border-gray-200 shrink-0">
      <div className="flex items-center gap-2">
        <div 
          className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm"
          style={{ 
            backgroundColor: `${persona.color}15`,
            border: `1.5px solid ${persona.color}25`
          }}
        >
          <persona.icon size={17} style={{ color: persona.color }} strokeWidth={2.5} />
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-900">{persona.name} Path</h3>
          <p className="text-xs text-gray-500">Your learning journey</p>
        </div>
      </div>
    </div>

    {/* Scrolling lessons - using Marquee for smooth vertical scroll */}
    <div className="flex-1 px-4 py-3 overflow-hidden min-h-0">
      <Marquee 
        pauseOnHover 
        vertical
        className="[--duration:40s] h-full"
        repeat={2}
      >
        {persona.lessons.map((lesson) => (
          <LessonCardMini 
            key={lesson.id} 
            lesson={lesson} 
            color={persona.color} 
          />
        ))}
      </Marquee>
    </div>
  </div>
)

function PhoneDashboard() {
  const [activePersona, setActivePersona] = useState<Persona>(personas[0])

  return (
    <section className="py-20 px-4 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Life-Stage Learning Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Right lesson, right time, right member.
          </p>
        </motion.div>

        {/* Persona Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {personas.map((persona) => (
            <motion.button
              key={persona.id}
              onClick={() => setActivePersona(persona)}
              className={`
                flex items-center gap-3 px-6 py-3 rounded-xl transition-all
                ${activePersona.id === persona.id 
                  ? 'bg-white shadow-lg scale-105' 
                  : 'bg-white/50 hover:bg-white hover:shadow-md'
                }
              `}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div 
                className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm transition-all"
                style={{ 
                  backgroundColor: activePersona.id === persona.id 
                    ? persona.color 
                    : `${persona.color}15`,
                  border: activePersona.id === persona.id 
                    ? `1.5px solid ${persona.color}`
                    : `1.5px solid ${persona.color}25`,
                  color: activePersona.id === persona.id ? 'white' : persona.color
                }}
              >
                <persona.icon size={21} strokeWidth={activePersona.id === persona.id ? 2.5 : 2} />
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">{persona.name}</div>
                <div className="text-xs text-gray-500">{persona.description}</div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Main Layout: Phone + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Stats & Explanation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`stats-${activePersona.id}`}
              className="lg:col-span-4 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Persona Description Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div 
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-md transition-all"
                  style={{ 
                    backgroundColor: `${activePersona.color}15`,
                    border: `2px solid ${activePersona.color}25`
                  }}
                >
                  <activePersona.icon size={26} style={{ color: activePersona.color }} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {activePersona.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  Personalized content for {activePersona.description.toLowerCase()}
                </p>
                
                {/* Key stats */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-2xl font-bold text-gray-900">
                      {activePersona.lessons.length}
                    </div>
                    <div className="text-xs text-gray-600">Lessons</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-2xl font-bold" style={{ color: activePersona.color }}>
                      83%
                    </div>
                    <div className="text-xs text-gray-600">Completion</div>
                  </div>
                </div>
              </div>

              {/* Feature highlights */}
              <div className="space-y-3">
                {[
                  { icon: Clock, text: '3-5 minute lessons', stat: '92% play-through' },
                  { icon: Smartphone, text: 'Mobile-optimized', stat: '80% completion' },
                  { icon: LinkIcon, text: 'Product-integrated', stat: '3x engagement' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center gap-3 hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div 
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-all"
                      style={{ 
                        backgroundColor: `${activePersona.color}12`,
                        border: `1.5px solid ${activePersona.color}20`
                      }}
                    >
                      <item.icon size={20} style={{ color: activePersona.color }} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-gray-900">{item.text}</div>
                      <div className="text-xs text-gray-500">{item.stat}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Center: Phone Mockup */}
          <div className="lg:col-span-4 flex justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePersona.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <Iphone15Pro 
                  className="w-full max-w-[300px]"
                  width={300}
                  height={620}
                >
                  <PhoneScreen persona={activePersona} />
                </Iphone15Pro>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Lesson Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`lessons-${activePersona.id}`}
              className="lg:col-span-4 space-y-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Featured Lessons
              </h4>
              
              {activePersona.lessons.slice(0, 3).map((lesson, idx) => (
                <motion.div
                  key={lesson.id}
                  className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div 
                      className="w-13 h-13 rounded-xl flex items-center justify-center shrink-0 shadow-sm transition-all"
                      style={{ 
                        backgroundColor: `${activePersona.color}12`,
                        border: `1.5px solid ${activePersona.color}20`,
                        width: '52px',
                        height: '52px'
                      }}
                    >
                      <lesson.icon size={22} style={{ color: activePersona.color }} strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-1">
                        {lesson.title}
                      </h5>
                      <p className="text-sm text-gray-600">{lesson.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">{lesson.duration} • {lesson.difficulty}</span>
                    <span 
                      className="font-semibold"
                      style={{ color: activePersona.color }}
                    >
                      {lesson.progress}% complete
                    </span>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="w-full bg-gray-100 rounded-full h-2 mt-3">
                    <motion.div 
                      className="h-2 rounded-full"
                      style={{ backgroundColor: activePersona.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${lesson.progress}%` }}
                      transition={{ delay: idx * 0.1 + 0.2, duration: 0.5 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default PhoneDashboard
