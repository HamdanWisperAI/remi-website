'use client'

import React from 'react'
import { Safari } from '@/components/magicui/safari'
import { Marquee } from '@/components/magicui/marquee'
import { CheckCircle, FileText, Users, BarChart3, BookOpen, Shield, Clock, Target } from 'lucide-react'

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

        {/* Right Side - Safari Browser with Marquee */}
        <div className="relative flex justify-center items-center z-30 ml-0 overflow-hidden">
          <div
            className="w-full max-w-[600px]"
            style={{
              animation: 'slideInRight 0.8s ease-out 0.8s both, float 3s ease-in-out infinite 1.6s'
            }}
          >
            <Safari url="cra-platform.wisperai.com" className="w-full">
              <div className="h-full w-full bg-white overflow-hidden">
                {/* Header */}
                <div className="px-4 py-3 bg-white border-b border-gray-300 overflow-hidden">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 shrink-0" />
                    <div className="text-sm font-semibold text-gray-900 truncate">CRA Innovation Platform</div>
                  </div>
                  <div className="text-xs text-gray-500 ml-4 truncate">Dashboard overview</div>
                </div>

                {/* Scrolling Content */}
                <div className="p-4 overflow-hidden h-full bg-gray-50 w-full">
                  <Marquee vertical pauseOnHover className="[--duration:40s] w-full" repeat={2}>
                    {/* Feature Card 1 - Financial Education */}
                    <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4 shadow-sm w-full max-w-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded border border-gray-300 bg-gray-50 flex items-center justify-center shrink-0">
                          <BookOpen size={18} className="text-gray-900" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Core Feature</div>
                          <div className="text-base font-semibold text-gray-900 leading-tight break-words">
                            Financial Literacy Platform
                          </div>
                        </div>
                      </div>
                      <div className="ml-[52px] space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0"></div>
                          <span className="break-words">700+ microlearning lessons</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0"></div>
                          <span className="break-words">Mobile-first delivery</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0"></div>
                          <span className="break-words">Multi-language support</span>
                        </div>
                      </div>
                    </div>

                    {/* Feature Card 2 - Compliance Tracking */}
                    <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4 shadow-sm w-full max-w-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded border border-gray-300 bg-gray-50 flex items-center justify-center shrink-0">
                          <Shield size={18} className="text-gray-900" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Compliance</div>
                          <div className="text-base font-semibold text-gray-900 leading-tight break-words">
                            Automatic CRA Documentation
                          </div>
                        </div>
                      </div>
                      <div className="ml-[52px] space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-gray-900 shrink-0" />
                          <span className="break-words">Real-time activity tracking</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-gray-900 shrink-0" />
                          <span className="break-words">Examiner-ready reports</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-gray-900 shrink-0" />
                          <span className="break-words">Assessment area mapping</span>
                        </div>
                      </div>
                    </div>

                    {/* Feature Card 3 - Analytics Dashboard */}
                    <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4 shadow-sm w-full max-w-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded border border-gray-300 bg-gray-50 flex items-center justify-center shrink-0">
                          <BarChart3 size={18} className="text-gray-900" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Analytics</div>
                          <div className="text-base font-semibold text-gray-900 leading-tight break-words">
                            Impact Measurement Dashboard
                          </div>
                        </div>
                      </div>
                      <div className="ml-[52px] space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0"></div>
                          <span className="break-words">Completion rates & engagement</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0"></div>
                          <span className="break-words">Behavior change metrics</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0"></div>
                          <span className="break-words">Credit score improvements</span>
                        </div>
                      </div>
                    </div>

                    {/* Feature Card 4 - Member Engagement */}
                    <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4 shadow-sm w-full max-w-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded border border-gray-300 bg-gray-50 flex items-center justify-center shrink-0">
                          <Users size={18} className="text-gray-900" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Engagement</div>
                          <div className="text-base font-semibold text-gray-900 leading-tight break-words">
                            Member Participation Tracking
                          </div>
                        </div>
                      </div>
                      <div className="ml-[52px] space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0"></div>
                          <span className="break-words">LMI community outreach</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0"></div>
                          <span className="break-words">Underserved population access</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0"></div>
                          <span className="break-words">Geographic distribution</span>
                        </div>
                      </div>
                    </div>

                    {/* Feature Card 5 - Reporting */}
                    <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4 shadow-sm w-full max-w-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded border border-gray-300 bg-gray-50 flex items-center justify-center shrink-0">
                          <FileText size={18} className="text-gray-900" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Reporting</div>
                          <div className="text-base font-semibold text-gray-900 leading-tight break-words">
                            CRA Examination Reports
                          </div>
                        </div>
                      </div>
                      <div className="ml-[52px] space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-gray-900 shrink-0" />
                          <span className="break-words">Quarterly performance summaries</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-gray-900 shrink-0" />
                          <span className="break-words">Regulatory compliance documentation</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-gray-900 shrink-0" />
                          <span className="break-words">Innovation credit evidence</span>
                        </div>
                      </div>
                    </div>

                    {/* Feature Card 6 - Implementation */}
                    <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4 shadow-sm w-full max-w-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded border border-gray-300 bg-gray-50 flex items-center justify-center shrink-0">
                          <Target size={18} className="text-gray-900" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Deployment</div>
                          <div className="text-base font-semibold text-gray-900 leading-tight break-words">
                            Rapid Implementation
                          </div>
                        </div>
                      </div>
                      <div className="ml-[52px] space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0"></div>
                          <span className="break-words">45-day deployment timeline</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0"></div>
                          <span className="break-words">White-label customization</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-900 shrink-0"></div>
                          <span className="break-words">Core banking integrations</span>
                        </div>
                      </div>
                    </div>

                    {/* Feature Card 7 - Success Metrics */}
                    <div className="bg-white rounded-lg border border-gray-300 p-4 mb-4 shadow-sm w-full max-w-full">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded border border-gray-300 bg-gray-50 flex items-center justify-center shrink-0">
                          <Clock size={18} className="text-gray-900" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Outcomes</div>
                          <div className="text-base font-semibold text-gray-900 leading-tight break-words">
                            Measurable Impact Tracking
                          </div>
                        </div>
                      </div>
                      <div className="ml-[52px] space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-gray-900 shrink-0" />
                          <span className="break-words">Credit score improvements</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-gray-900 shrink-0" />
                          <span className="break-words">Delinquency reduction</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle size={16} className="text-gray-900 shrink-0" />
                          <span className="break-words">Member retention gains</span>
                        </div>
                      </div>
                    </div>
                  </Marquee>
                </div>
              </div>
            </Safari>
          </div>
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
