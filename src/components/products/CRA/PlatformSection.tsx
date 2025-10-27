import React from 'react'

const PlatformSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-24 px-6 md:px-10 lg:px-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Minimal Intro */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-4">
            The Platform That Proves Impact
          </h2>
          <p className="text-xl text-gray-600 font-medium">
            Every interaction tracked. Every outcome measured. Examiner-ready documentation generated automatically.
          </p>
        </div>

        {/* Product Screenshot - Dominant Hero */}
        <div className="mb-16 md:mb-20">
          <div className="relative rounded-2xl border border-gray-200 overflow-hidden shadow-xl">
            {/* Clean shadow only, no gradients */}
            <div className="absolute -inset-4 bg-gray-900/5 rounded-2xl blur-xl -z-10"></div>
            
            <img
              src="/assets/images/product/laptopImage.png"
              alt="CRA Platform Dashboard"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Key Stats Bar - Massive & Clear */}
        <div className="mb-20 bg-white border border-gray-200 rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-7xl md:text-8xl font-black text-gray-900 mb-2">80-83%</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Program Completion</div>
            </div>
            <div>
              <div className="text-7xl md:text-8xl font-black text-gray-900 mb-2">23-26</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Point Credit Increase</div>
            </div>
            <div>
              <div className="text-7xl md:text-8xl font-black text-gray-900 mb-2">10-33%</div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Delinquency Reduction</div>
            </div>
          </div>
        </div>

        {/* Feature Cards - Minimal, Purposeful */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Feature 1 - Tracking */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Comprehensive Tracking</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">Track every interaction and outcome from enrollment to results:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#625bff] font-bold text-lg">•</span>
                  <span className="text-gray-700">Member enrollment and demographics</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#625bff] font-bold text-lg">•</span>
                  <span className="text-gray-700">Lesson completion and knowledge gains</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#625bff] font-bold text-lg">•</span>
                  <span className="text-gray-700">Behavior changes and credit improvements</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Documentation */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Automated Documentation</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">Generate examiner-ready reports with zero manual work:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#625bff] font-bold text-lg">•</span>
                  <span className="text-gray-700">Real-time CRA compliance dashboard</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#625bff] font-bold text-lg">•</span>
                  <span className="text-gray-700">Geographic and demographic analysis reports</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#625bff] font-bold text-lg">•</span>
                  <span className="text-gray-700">Longitudinal outcome tracking and visualizations</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 - Scale */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Built for Scale</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">Deliver innovation across your institution at any scale:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#625bff] font-bold text-lg">•</span>
                  <span className="text-gray-700">Mobile delivery reaches 45% more learners</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#625bff] font-bold text-lg">•</span>
                  <span className="text-gray-700">Multi-language support and ADA compliance built-in</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#625bff] font-bold text-lg">•</span>
                  <span className="text-gray-700">Unlimited members - from pilot to full deployment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4 - Results */}
          <div className="bg-white border border-gray-200 rounded-2xl p-10 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7 12a5 5 0 1110 0 5 5 0 01-10 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Measurable Results</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 mb-4">Deliver impact that regulators recognize and members experience:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#625bff] font-bold text-lg">•</span>
                  <span className="text-gray-700">45% faster learning on mobile vs. traditional</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#625bff] font-bold text-lg">•</span>
                  <span className="text-gray-700">Measurable member behavior change within 60 days</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#625bff] font-bold text-lg">•</span>
                  <span className="text-gray-700">Documented credit and delinquency improvements</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformSection

