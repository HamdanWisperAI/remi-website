import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Zap, Shield } from 'lucide-react'

const HowWeDoIt = () => {
  const cards = [
    {
      id: 1,
      title: 'Public Data Aggregation',
      subtitle: 'Automated aggregation from public websites, filings, and APIs only.',
      icon: Globe,
      gradient: 'linear-gradient(135deg, #625bff 0%, #5044d9 100%)',
      accentColor: '#625bff'
    },
    {
      id: 2,
      title: 'Pattern Recognition & Verification',
      subtitle: 'AI-assisted pattern recognition with expert human QA.',
      icon: Zap,
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      accentColor: '#10b981'
    },
    {
      id: 3,
      title: 'Legal, Secure & Private',
      subtitle: 'Your data is never shared—compliance and privacy by design.',
      icon: Shield,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      accentColor: '#f59e0b'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="relative w-full bg-stone-50 px-10 py-20 overflow-hidden md:px-8 md:py-16 lg:px-10 lg:py-20 sm:px-5 sm:py-12">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-3 pointer-events-none z-0" style={{
        backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(98, 91, 255, 0.05) 25%, rgba(98, 91, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.05) 75%, rgba(98, 91, 255, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(98, 91, 255, 0.05) 25%, rgba(98, 91, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.05) 75%, rgba(98, 91, 255, 0.05) 76%, transparent 77%, transparent)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Title */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto mb-16 text-center md:mb-14 lg:mb-16 sm:mb-10 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-black leading-tight text-black mb-2 tracking-tight md:text-3xl lg:text-4xl sm:text-2xl">How We Do It</h2>
        <p className="text-sm font-medium text-black uppercase tracking-wider md:text-xs lg:text-sm">Legal, Ethical, Transparent</p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto mb-10 grid grid-cols-1 md:grid-cols-3 gap-7 auto-rows-max md:gap-6 lg:gap-7 sm:gap-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      >
        {cards.map((card) => {
          const IconComponent = card.icon

          return (
            <motion.div
              key={card.id}
              className="relative bg-gray-100 border border-gray-300 rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 shadow-sm hover:border-gray-400 hover:shadow-lg md:p-7 lg:p-8 sm:p-6"
              variants={cardVariants}
              whileHover={{ y: -8 }}
              role="article"
              aria-label={`${card.title}: ${card.subtitle}`}
            >
              {/* Icon Container with Animation */}
              <motion.div
                className="relative w-20 h-20 rounded-lg flex items-center justify-center mb-5 overflow-hidden md:w-20 md:h-20 md:mb-4 lg:w-20 lg:h-20 lg:mb-5 sm:w-16 sm:h-16 sm:mb-4"
                style={{ background: card.gradient }}
                variants={iconVariants}
              >
                <motion.div
                  className="relative z-10 flex items-center justify-center"
                  animate={{
                    y: [0, -6, 0],
                    opacity: [1, 0.8, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: card.id * 0.3
                  }}
                >
                  <IconComponent size={32} color="#ffffff" strokeWidth={1.5} />
                </motion.div>

                {/* Animated Background Glow */}
                <motion.div
                  className="absolute rounded-full blur-lg"
                  style={{ 
                    background: card.accentColor,
                    width: '100%',
                    height: '100%',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 0
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: card.id * 0.3
                  }}
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-bold text-black mb-2 leading-snug md:text-base lg:text-lg sm:text-base">{card.title}</h3>

              {/* Subtitle */}
              <p className="text-sm font-normal text-black mb-5 leading-relaxed flex items-center justify-center flex-1 md:text-xs lg:text-sm sm:text-xs sm:mb-4">{card.subtitle}</p>

              {/* Bottom Accent Line */}
              <motion.div
                className="absolute bottom-0 left-0 h-1 w-0"
                style={{ backgroundColor: card.accentColor }}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 0.8, delay: 0.2 + card.id * 0.1 }}
                viewport={{ once: true }}
              />
            </motion.div>
          )
        })}
      </motion.div>

      {/* Legal Text Footer */}
      <motion.div
        className="relative z-10 text-center pt-5 border-t border-gray-300 md:pt-4 lg:pt-5 sm:pt-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-xs font-normal text-gray-600 leading-relaxed tracking-wide md:text-xs lg:text-xs sm:text-xs">
          Compliant with regulatory frameworks. Your strategies stay secret.
        </p>
      </motion.div>
    </section>
  )
}

export default HowWeDoIt