'use client';

import React from 'react';

const CTASection = () => {
  return (
    <section className="relative w-full bg-white py-12 md:py-16 px-4 md:px-8 overflow-hidden">
      {/* Animated Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0" style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(98, 91, 255, 0.15) 25%, rgba(98, 91, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.15) 75%, rgba(98, 91, 255, 0.15) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(98, 91, 255, 0.15) 25%, rgba(98, 91, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.15) 75%, rgba(98, 91, 255, 0.15) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '50px 50px'
      }} />

      {/* Content container */}
      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        {/* Heading and Subheading in compact form */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 leading-tight">
            Ready to See What{' '}
            <span className="text-[#625bff]">Intelligence</span>
            {' '}Can Do?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-medium">
            Stop guessing. Start knowing.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button
            className="relative px-8 md:px-12 py-3 md:py-4 bg-[#625bff] text-white font-bold text-base md:text-lg rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group overflow-hidden"
          >
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <span className="relative flex items-center gap-2 justify-center">
              Get Started
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
