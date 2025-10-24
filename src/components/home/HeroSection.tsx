'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Zap, CheckCircle2, Users, Shield } from 'lucide-react';

// Text reveal animation component
const SplitText: React.FC<{ 
  text: string; 
  className?: string;
  isInView: boolean;
  delay?: number;
}> = ({ text, className = '', isInView, delay = 0 }) => {
  const words = text.split(' ');
  
  return (
    <div className={className}>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.5,
            delay: delay + idx * 0.05,
            ease: 'easeOut'
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
};

// Comparison highlight component
const ComparisonHighlight: React.FC<{ 
  before: string; 
  after: string; 
  isInView: boolean;
  delay?: number;
}> = ({ before, after, isInView, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay }}
      className="space-y-3"
    >
      <p className="text-base md:text-lg text-[#6b7280]">
        <span className="line-through text-red-400">Other competitors: Rip everything out</span>
      </p>
      <p className="text-base md:text-lg text-[#10b981] font-semibold">
        We: Let's make what you have amazing
      </p>
    </motion.div>
  );
};

// Different and Why Section - Redesigned for TEXT FOCUS
const DifferentSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const bulletPoints = [
    "Your 40-year-old core system? Keep it. It's working.",
    "Your processes? They stay.",
    "Your team? They'll love us."
  ];

  return (
    <div ref={ref} className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#625bff]/2 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="inline-block mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-[#625bff]/10 border border-[#625bff]/30 text-sm font-semibold text-[#625bff] uppercase tracking-wider">
            How We're Different
          </span>
        </motion.div>

        {/* Main Headline - Animated */}
        <div className="mb-8">
          <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            <SplitText 
              text="We don't replace." 
              isInView={isInView} 
              delay={0.2}
              className="text-[#171717]"
            />
            <SplitText 
              text="We enhance." 
              isInView={isInView} 
              delay={0.5}
              className="text-[#625bff]"
            />
          </div>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-xl md:text-2xl text-[#6b7280] font-light mb-12"
        >
          Build on what you've built. Keep the foundation that works.
        </motion.p>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="grid md:grid-cols-2 gap-8 mb-16 py-8"
        >
          {/* Left: The Problem (What Others Do) */}
          <div className="p-8 rounded-xl bg-red-50 border border-red-200">
            <h3 className="text-lg font-bold text-red-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">❌</span> What Others Do
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold text-lg mt-0.5">•</span>
                <span className="text-[#6b7280]"><span className="line-through text-red-500 font-medium">Rip everything out</span> and start from scratch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold text-lg mt-0.5">•</span>
                <span className="text-[#6b7280]">Your <span className="font-semibold text-red-600">entire team</span> retrains</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold text-lg mt-0.5">•</span>
                <span className="text-[#6b7280]">Months of <span className="font-semibold text-red-600">downtime and disruption</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 font-bold text-lg mt-0.5">•</span>
                <span className="text-[#6b7280]">Investment is <span className="font-semibold text-red-600">high risk</span></span>
              </li>
            </ul>
          </div>

          {/* Right: The Solution (What We Do) */}
          <div className="p-8 rounded-xl bg-[#10b981]/5 border border-[#10b981]/30">
            <h3 className="text-lg font-bold text-[#10b981] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6" /> What We Do
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#10b981] font-bold text-lg mt-0.5">✓</span>
                <span className="text-[#171717]">Your 40-year-old system? <span className="font-semibold text-[#10b981]">Keep it.</span> It's working.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10b981] font-bold text-lg mt-0.5">✓</span>
                <span className="text-[#171717]">Your processes? <span className="font-semibold text-[#10b981]">They stay.</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10b981] font-bold text-lg mt-0.5">✓</span>
                <span className="text-[#171717]">Your team? <span className="font-semibold text-[#10b981]">They'll love us.</span></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#10b981] font-bold text-lg mt-0.5">✓</span>
                <span className="text-[#171717]">Implementation is <span className="font-semibold text-[#10b981]">fast & seamless</span></span>
              </li>
            </ul>
          </div>
        </motion.div>

    
      </div>
    </div>
  );
};

// Timeline Component
const TimelineSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: '-100px' });

  const milestones = [
    { period: 'Week 1', text: 'Wait, we can see competitor rates daily?' },
    { period: 'Month 1', text: 'Our young members are actually engaging.' },
    { period: 'Month 3', text: 'The board wants to know what other magic we have.' },
    { period: 'Month 6', text: "We're the innovative FI others copy now." }
  ];

  const metrics = [
    { value: '41%', label: 'Fewer Delinquencies', source: 'CFPB Financial Wellness Study 2023' },
    { value: '32%', label: 'Reduction in Support Calls', source: 'Internal Case Studies' },
    { value: '3.4x', label: 'Product Adoption', source: 'Member Engagement Metrics' },
    { value: '67%', label: 'Increase in Lifetime Value', source: 'Industry Benchmarks' }
  ];

  return (
    <div ref={ref} className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#625bff]/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold text-[#625bff] uppercase tracking-wider mb-3">
            The Real Impact
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717]">
            Results That Speak
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="relative"
              >
                {/* Timeline Connector */}
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute left-full top-8 w-full h-1 bg-gradient-to-r from-[#625bff] to-transparent" />
                )}

                {/* Card */}
                <div className="relative p-6 rounded-lg border border-[#625bff]/30 bg-white hover:border-[#625bff]/60 hover:shadow-lg transition-all duration-300 h-full">
                  {/* Period Badge */}
                  <div className="inline-block mb-3 px-3 py-1 rounded-full bg-[#625bff]/10 text-[#625bff] text-xs font-semibold">
                    {milestone.period}
                  </div>
                  {/* Text */}
                  <p className="text-sm md:text-base font-medium text-[#171717]">
                    {milestone.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative p-6 rounded-xl bg-gradient-to-br from-[#625bff]/5 to-[#10b981]/5 border border-[#625bff]/20 hover:border-[#625bff]/60 transition-all duration-300"
            >
              {/* Animated Counter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <CounterAnimation
                  value={parseFloat(metric.value)}
                  suffix={metric.value.includes('x') ? 'x' : '%'}
                  isInView={isInView}
                />
              </motion.div>

              <p className="text-sm font-semibold text-[#171717] mt-2">{metric.label}</p>

              {/* Source Tooltip */}
              <div className="absolute inset-0 rounded-xl bg-[#171717] opacity-0 group-hover:opacity-95 transition-opacity duration-300 flex items-center justify-center p-4">
                <p className="text-xs text-white text-center">{metric.source}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Counter Animation Component
const CounterAnimation: React.FC<{ value: number; suffix: string; isInView: boolean }> = ({
  value,
  suffix,
  isInView
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setDisplayValue(0);
      return;
    }

    let startValue = 0;
    const increment = value / 60;
    let currentValue = startValue;

    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= value) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(Math.floor(currentValue * 10) / 10);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isInView, value]);

  return (
    <div className="text-4xl md:text-5xl font-bold text-[#625bff]">
      {displayValue.toFixed(1)}{suffix}
    </div>
  );
};

// Built By People Section
const BuiltByPeopleSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const credentials = [
    "Our founder protected $200 billion at PayPal.",
    "Banking isn't just algorithms. It's about communities and trust."
  ];

  return (
    <div ref={ref} className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-[#625bff]/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold text-[#625bff] uppercase tracking-wider mb-3">
            Our Foundation
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717]">
            Built by People Who Get It
          </h2>
        </motion.div>
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Avatar/Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              {/* Avatar Circle with gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#625bff]/20 to-[#10b981]/20 border-4 border-[#625bff]/40 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#625bff]/10 to-[#10b981]/10 flex items-center justify-center">
                  <Users className="w-24 h-24 text-[#625bff] opacity-60" />
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-[#625bff]/20"
              >
                <Zap className="w-6 h-6 text-[#625bff]" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg border border-[#10b981]/20"
              >
                <Shield className="w-6 h-6 text-[#10b981]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Story Text */}
          <div className="space-y-6">
            {credentials.map((cred, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="p-6 rounded-lg bg-gradient-to-r from-[#625bff]/5 to-transparent border border-[#625bff]/20 hover:border-[#625bff]/40 transition-all"
              >
                <p className="text-lg md:text-xl text-[#171717] font-semibold">{cred}</p>
              </motion.div>
            ))}

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-base text-[#6b7280] leading-relaxed"
            >
              We understand your challenges because we've been in your shoes. That's why our solutions
              are built to enhance, not replace, the foundation you've carefully built.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Hero Section Component
export const HeroSection: React.FC = () => {
  return (
    <div className="w-full bg-white">
      <DifferentSection />
      <TimelineSection />
      <BuiltByPeopleSection />
    </div>
  );
};

export default HeroSection;
