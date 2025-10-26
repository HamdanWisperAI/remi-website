'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Clock, Trophy, Shield, TrendingUp, Target } from 'lucide-react'

const ResultFeature = ({ icon: Icon, title, subtitle, isLast }: { icon: React.ElementType; title: string; subtitle: string; isLast: boolean }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      <div
        className={`flex items-start gap-4 transition-all duration-700 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex-shrink-0 mt-1 transition-transform duration-300 hover:scale-110 hover:text-[#625bff]">
          <Icon size={32} className="text-[#625bff]" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-base text-[#222222]">{title}</h4>
          <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
        </div>
      </div>
      {!isLast && <div className="border-b-2 border-gray-200 mt-4 mb-4"></div>}
    </div>
  )
}

const TriangleImageLayout = () => {
  return (
    <>
      {/* Top Left - Faster Response Time */}
      <img
        src="/assets/images/product/faster-response.png"
        alt="Faster Response Time"
        className="absolute top-1/4 left-0 h-[320px] w-[320px] transition-all duration-300 hover:scale-110"
      />

      {/* Top Right - Better Win Rates */}
      <img
        src="/assets/images/product/better-win.png"
        alt="Better Win Rates"
        className="absolute top-1/4 right-0 h-[320px] w-[320px] transition-all duration-300 hover:scale-110"
      />

      {/* Bottom Center - Proactive Retention */}
      <img
        src="/assets/images/product/proactive-retention.png"
        alt="Proactive Retention"
        className="absolute top-2/3 left-1/2 transform -translate-x-1/2 h-[320px] w-[320px] transition-all duration-300 hover:scale-110"
      />
    </>
  )
}

function Hero() {
  const results = [
    {
      icon: Clock,
      title: 'Faster Response Time',
      subtitle: 'Get insights instantly with real-time analytics'
    },
    {
      icon: Trophy,
      title: 'Better Win Rates',
      subtitle: 'Increase your competitive advantage measurably'
    },
    {
      icon: Shield,
      title: 'Proactive Retention',
      subtitle: 'Identify and prevent churn before it happens'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Decisions',
      subtitle: 'Make strategic choices backed by intelligence'
    }
  ]

  return (
    <section className="w-full bg-white py-20 px-4 md:px-16 relative">
      {/* Animated Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0" style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(98, 91, 255, 0.15) 25%, rgba(98, 91, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.15) 75%, rgba(98, 91, 255, 0.15) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(98, 91, 255, 0.15) 25%, rgba(98, 91, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.15) 75%, rgba(98, 91, 255, 0.15) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '50px 50px'
      }} />
      <div className="flex flex-row justify-center items-center gap-x-32 max-w-7xl mx-auto relative z-10">
        {/* Left Side - Text & Icons */}
        <div className="flex-1 flex flex-col justify-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tighter mb-4">
            RESULTS THAT{' '}
            <span className="text-[#625bff]">MATTER</span>
          </h1>

          {/* Animated Accent Bar */}
          <div className="flex gap-2 mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#625bff] to-transparent animate-pulse rounded-full" />
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#625bff] to-transparent animate-pulse rounded-full" style={{ animationDelay: '300ms' }} />
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#625bff] to-transparent animate-pulse rounded-full" style={{ animationDelay: '600ms' }} />
          </div>

          <p className="text-xl md:text-2xl lg:text-2xl font-semibold text-gray-600 mb-12">
            What intelligence enables
          </p>

          {/* Results List */}
          <div className="space-y-0">
            {results.map((result, index) => (
              <ResultFeature
                key={index}
                icon={result.icon}
                title={result.title}
                subtitle={result.subtitle}
                isLast={index === results.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Right Side - Triangle Image Layout */}
        <div className="flex-1 flex justify-center items-center hidden md:flex relative h-[640px] w-[640px]">
          <TriangleImageLayout />
        </div>

        {/* Mobile Triangle Layout */}
        <div className="w-full flex justify-center items-center md:hidden mt-12 relative h-[640px]">
          <TriangleImageLayout />
        </div>
      </div>
    </section>
  )
}

export default Hero