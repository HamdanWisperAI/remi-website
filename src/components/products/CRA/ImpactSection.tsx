import React from 'react'

const ImpactSection = () => {
  return (
    <section className="relative w-full bg-white overflow-hidden py-24 px-6 md:px-10 lg:px-16">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Simplified Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-3">
            Measurable Community Impact
          </h2>
          <p className="text-lg md:text-xl text-gray-600 font-semibold">
            Evidence-based outcomes from CFPB research
          </p>
        </div>

        {/* Hero Stat - Single Focus */}
        <div className="mb-16 flex justify-center">
          <div className="inline-block bg-gradient-to-r from-[#625bff] to-purple-600 rounded-3xl p-12 md:p-16 text-center text-white shadow-xl">
            <div className="text-7xl md:text-8xl font-black mb-4">89%</div>
            <div className="text-2xl md:text-3xl font-bold mb-2">Report Improved Financial Confidence</div>
            <p className="text-white/90 text-base md:text-lg">The most meaningful outcome of our platform</p>
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
          
          {/* Large Feature Card - Left */}
          <div className="md:col-span-5 bg-gradient-to-br from-[#625bff]/5 to-white rounded-3xl border-2 border-[#625bff]/20 p-10 hover:shadow-lg transition-all duration-300">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#625bff]/10 text-[#625bff] text-xs font-bold uppercase tracking-wider mb-8">
              <span className="w-2 h-2 bg-[#625bff] rounded-full"></span>
              Financial Health
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="text-6xl md:text-7xl font-black text-gray-900 mb-2">$3,200</div>
                <div className="text-gray-600 text-base md:text-lg">Average debt reduction per member</div>
              </div>
              
              <div>
                <div className="text-6xl md:text-7xl font-black text-gray-900 mb-2">$1,800</div>
                <div className="text-gray-600 text-base md:text-lg">Average savings increase per member</div>
              </div>
              
              <div className="pt-8 border-t-2 border-gray-200">
                <div className="text-sm font-semibold text-gray-700 mb-4">Additional Improvements</div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Emergency funds created</span>
                    <span className="text-2xl font-bold text-[#625bff]">+34%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">On-time bill payments</span>
                    <span className="text-2xl font-bold text-[#625bff]">+28%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Credit utilization reduced</span>
                    <span className="text-2xl font-bold text-green-600">-15%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Medium & Small Cards Grid - Right */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Large Medium Card */}
            <div className="sm:col-span-2 bg-white rounded-3xl border-2 border-gray-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">First-Time Homebuyers</div>
              <div className="text-7xl font-black text-gray-900 mb-3">23%</div>
              <div className="text-gray-600 text-lg">of program graduates</div>
              <div className="mt-6 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[23%] bg-[#625bff] rounded-full transition-all duration-500"></div>
              </div>
              <div className="mt-3 text-xs text-gray-500 font-semibold">Progress: 230 of 1,000 participants</div>
            </div>

            {/* Small Cards */}
            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Predatory Lending Reduction</div>
              <div className="text-6xl font-black text-gray-900 mb-2">43%</div>
              <div className="text-gray-600">decrease in usage</div>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                <span>↓</span>
                <span>Significant improvement</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Banking Relationships</div>
              <div className="text-6xl font-black text-gray-900 mb-2">67%</div>
              <div className="text-gray-600">increase in accounts</div>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#625bff]/10 text-[#625bff] text-xs font-bold">
                <span>↑</span>
                <span>Strong engagement</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Reduced Financial Stress</div>
              <div className="text-6xl font-black text-gray-900 mb-2">71%</div>
              <div className="text-gray-600">report improvement</div>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#625bff]/10 text-[#625bff] text-xs font-bold">
                <span className="text-base">✓</span>
                <span>Wellness achieved</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Small Business Creation</div>
              <div className="text-6xl font-black text-gray-900 mb-2">12%</div>
              <div className="text-gray-600">started their own business</div>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#625bff]/10 text-[#625bff] text-xs font-bold">
                <span>→</span>
                <span>New entrepreneurs</span>
              </div>
            </div>

            <div className="bg-white rounded-3xl border-2 border-gray-200 p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Higher Education</div>
              <div className="text-6xl font-black text-gray-900 mb-2">18%</div>
              <div className="text-gray-600">enrollment increase</div>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#625bff]/10 text-[#625bff] text-xs font-bold">
                <span>↑</span>
                <span>Educational advancement</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Life Outcomes Section */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border-2 border-[#625bff]/10 p-10 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Life Transformation Outcomes</h3>
            <p className="text-gray-600">Beyond financial metrics - real life changes</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="py-4">
              <div className="text-5xl md:text-6xl font-black text-gray-900 mb-3">23%</div>
              <div className="text-sm md:text-base text-gray-700 font-medium">Became first-time homeowners</div>
            </div>
            
            <div className="py-4">
              <div className="text-5xl md:text-6xl font-black text-gray-900 mb-3">31%</div>
              <div className="text-sm md:text-base text-gray-700 font-medium">Received job promotions/raises</div>
            </div>
            
            <div className="py-4">
              <div className="text-5xl md:text-6xl font-black text-gray-900 mb-3">15%</div>
              <div className="text-sm md:text-base text-gray-700 font-medium">Local spending increase</div>
            </div>
            
            <div className="py-4">
              <div className="text-5xl md:text-6xl font-black text-gray-900 mb-3">12%</div>
              <div className="text-sm md:text-base text-gray-700 font-medium">Started small businesses</div>
            </div>
          </div>
        </div>

        {/* Citation */}
        <p className="text-center text-sm text-gray-500 mt-12 italic">
          Based on CFPB 2019 financial education review and academic research studies
        </p>
      </div>
    </section>
  )
}

export default ImpactSection

