'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, Sparkles, TrendingUp, Users, Shield } from 'lucide-react';

const PickYourPath: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const paths = [
    {
      title: 'Competitive Intelligence',
      problem: 'Losing loans to rate competition?',
      timeline: '3 days',
      icon: TrendingUp,
      description: 'Real-time competitor tracking and rate analysis to keep you ahead.',
      href: '/product/CI'
    },
    {
      title: 'Financial Literacy',
      problem: 'Members choosing digital-first competitors?',
      timeline: '2 weeks',
      icon: Users,
      description: 'Engagement tools to keep your members informed and loyal.',
      href: '/product/financialLiteracy'
    },
    {
      title: 'Compliance Tracking',
      problem: 'CRA review keeping you up at night?',
      timeline: 'Instant',
      icon: Shield,
      description: 'Automated compliance monitoring for peace of mind.',
      href: '/product/CRA'
    },
    {
      title: 'Strategy Consultation',
      problem: 'Want it all?',
      timeline: '20 minutes',
      icon: Sparkles,
      description: 'Custom strategy session to unlock your full potential.',
      featured: true
    }
  ];

  return (
    <div ref={ref} className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#625bff]/5 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold text-[#625bff] uppercase tracking-wider mb-3">
            Your Journey Starts Here
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#171717] mb-4">
            Pick Your Path
          </h2>
          <p className="text-lg text-[#6b7280]">
            Choose the solution that fits your immediate needs
          </p>
        </motion.div>

        {/* Path Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {paths.map((path, index) => {
            const Icon = path.icon;
            const cardContent = (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className={`group relative p-6 rounded-xl transition-all duration-300 cursor-pointer ${
                  path.featured
                    ? 'bg-gradient-to-br from-[#625bff] to-[#625bff]/80 text-white border-2 border-[#625bff] md:col-span-2 lg:col-span-1 md:row-span-2 lg:row-span-1 flex flex-col justify-center'
                    : 'bg-white border-2 border-[#625bff]/20 hover:border-[#625bff] hover:shadow-xl'
                }`}
              >
                {/* Icon */}
                <div className={`mb-4 inline-block p-3 rounded-lg w-fit ${
                  path.featured ? 'bg-white/20' : 'bg-[#625bff]/10'
                }`}>
                  <Icon className={`w-6 h-6 ${path.featured ? 'text-white' : 'text-[#625bff]'}`} />
                </div>

                {/* Problem Statement */}
                <p className={`text-sm font-semibold mb-2 ${
                  path.featured ? 'text-white/90' : 'text-[#625bff]'
                }`}>
                  {path.problem}
                </p>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-2 ${
                  path.featured ? 'text-white' : 'text-[#171717]'
                }`}>
                  {path.title}
                </h3>

                {/* Timeline Badge */}
                <div className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold w-fit ${
                  path.featured
                    ? 'bg-white/20 text-white'
                    : 'bg-[#625bff]/10 text-[#625bff]'
                }`}>
                  {path.timeline}
                </div>
              </motion.div>
            );

            return path.href ? (
              <Link key={index} href={path.href}>
                {cardContent}
              </Link>
            ) : (
              cardContent
            );
          })}
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-[#625bff] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 group-hover:animate-pulse" />
            <div className="flex items-center justify-center gap-2">
              Schedule Your Demo
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-white text-[#625bff] font-semibold rounded-lg border-2 border-[#625bff]/30 hover:border-[#625bff] transition-all duration-300"
          >
            <div className="flex items-center justify-center gap-2">
              Get Free Competitive Analysis
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default PickYourPath;
