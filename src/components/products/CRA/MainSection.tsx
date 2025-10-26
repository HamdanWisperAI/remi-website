'use client'

import React from 'react'

function MainSection() {
  return (
    <section className="relative w-full h-[700px] overflow-hidden flex items-center justify-center">
      {/* Background with CRABg.png */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/assets/images/product/CRABg.png')"
        }}
      />
      
      {/* Vignette overlay for depth */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/45 z-10 pointer-events-none" />

      {/* Container */}
      <div className="relative z-20 max-w-7xl w-full h-full grid grid-cols-2 items-center gap-0 px-10">
        {/* Left Side - Text Content */}
        <div className="pl-10 pr-10 z-30">
          {/* Eyebrow text */}
          <div 
            className="text-xs font-semibold tracking-widest uppercase text-white/70 mb-4 animate-in fade-in-left slide-in-from-left-7 duration-600"
            style={{
              animation: 'fadeInLeft 0.6s ease-out 0.6s both'
            }}
          >
            CRA INNOVATION CREDIT
          </div>
          
          {/* Main headline */}
          <h1 
            className="text-5xl font-bold leading-tight text-white mb-5 drop-shadow-lg"
            style={{
              animation: 'fadeInLeft 0.6s ease-out 0.8s both'
            }}
          >
            CRA Innovation Credit <br></br>Made Measurable
          </h1>
          
          {/* Subheadline */}
          <p 
            className="text-2xl font-medium text-white/90 mb-6 drop-shadow-md inline-block relative"
            style={{
              animation: 'fadeInLeft 0.6s ease-out 1s both'
            }}
          >
            Transform compliance burden into competitive advantage. Document impact, not just intent.
          </p>
          
          {/* Body paragraph */}
          
          
          {/* Value statement */}
          <p 
            className="text-xl font-medium text-white mb-8 drop-shadow-md"
            style={{
              animation: 'fadeIn 0.6s ease-out 1.4s both'
            }}
          >
            What if compliance could drive actual member success?
          </p>
          
          {/* Button group */}
          <div 
            className="flex gap-4"
            style={{
              animation: 'fadeInUp 0.6s ease-out 1.6s both'
            }}
          >
            {/* Primary button - White bg, purple text */}
            <button 
              className="px-8 py-4 text-base font-semibold rounded-lg border-none cursor-pointer transition-all duration-300 drop-shadow-md relative overflow-hidden bg-white text-blue-600 hover:scale-105 hover:shadow-2xl active:scale-95"
              style={{
                color: '#625bff',
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.2)'
              }}
            >
              See the Solution
            </button>
            
            {/* Secondary button - Transparent, white border */}
            <button 
              className="px-8 py-4 text-base font-semibold rounded-lg border-2 border-white/80 cursor-pointer transition-all duration-300 drop-shadow-md relative overflow-hidden bg-transparent text-white hover:scale-105 hover:border-white hover:shadow-lg active:scale-95"
              style={{
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)'
              }}
            >
              Calculate Your Credit
            </button>
          </div>
        </div>

        {/* Right Side - Laptop Image */}
        <div className="relative flex justify-center items-center z-30 ml-0">
          <img 
            src="/assets/images/product/laptopImage.png" 
            alt="CRA Innovation Credit"
            className="w-full h-auto"
            style={{
              animation: 'slideInRight 0.8s ease-out 0.8s both, float 3s ease-in-out infinite 1.6s'
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40"
        style={{
          animation: 'fadeIn 0.6s ease-out 2s both'
        }}
      >
        <div 
          className="w-6 h-6 border-2 border-white/60 border-t-0 border-l-0 rotate-45"
          style={{
            animation: 'scrollBounce 2s ease-in-out infinite'
          }}
        />
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes scrollBounce {
          0% {
            opacity: 0.6;
            transform: rotate(45deg) translateY(0);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.6;
            transform: rotate(45deg) translateY(10px);
          }
        }

        @media (max-width: 1024px) {
          section {
            height: auto;
            min-height: 600px;
            padding: 60px 20px;
          }

          .grid {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 0;
          }
        }

        @media (max-width: 768px) {
          section {
            height: auto;
            min-height: 100vh;
            padding: 40px 16px;
          }

          h1 {
            font-size: 32px;
          }

          p {
            font-size: 14px;
          }

          .grid {
            padding: 0;
          }

          .flex {
            flex-direction: column;
          }

          button {
            width: 100%;
            text-align: center;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 20px 12px;
          }

          h1 {
            font-size: 24px;
            margin-bottom: 16px;
          }

          p {
            font-size: 13px;
            margin-bottom: 16px;
          }

          button {
            padding: 14px 24px;
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  )
}

export default MainSection
