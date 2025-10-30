'use client'

import React from 'react'
import { Safari } from '@/components/magicui/safari'
import { NumberTicker } from '@/components/magicui/number-ticker'
import { ChartBar, FileText, Globe, CheckCircle, Users, TrendUp, MapPin, Clock } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts'

// Minimal Professional CRA Dashboard - Black & White
const CRADashboard = () => {
  // Simplified chart data
  const engagementData = [
    { month: 'Jan', active: 2400 },
    { month: 'Feb', active: 3200 },
    { month: 'Mar', active: 3800 },
    { month: 'Apr', active: 4200 },
    { month: 'May', active: 4500 },
    { month: 'Jun', active: 4847 }
  ]

  const activityFeed = [
    { name: 'Maria G.', lesson: 'Emergency Savings', location: 'LMI Census Tract 4012', time: '2m ago' },
    { name: 'James T.', lesson: 'Credit Building', location: 'Rural Designated Area', time: '5m ago' },
    { name: 'Sarah L.', lesson: 'First Home Purchase', location: 'LMI Census Tract 3301', time: '8m ago' },
    { name: 'Robert M.', lesson: 'Debt Management', location: 'LMI Census Tract 4012', time: '12m ago' }
  ]

  return (
    <div className="w-full h-full bg-white p-4 md:p-6 overflow-auto">
      {/* Dashboard Header */}
      <div className="mb-6 pb-4 border-b border-gray-200">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">CRA Community Development Dashboard</h1>
        <p className="text-xs md:text-sm text-gray-500">Program tracking and examination documentation</p>
      </div>

      {/* Key Metrics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white border border-gray-300 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Users size={18} className="text-gray-700" />
            <span className="text-xs text-gray-500 uppercase tracking-wide">Active Participants</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900">
            <NumberTicker value={4847} />
          </div>
        </div>

        <div className="bg-white border border-gray-300 p-4">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle size={18} weight="fill" className="text-gray-700" />
            <span className="text-xs text-gray-500 uppercase tracking-wide">Completion Rate</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900">83%</div>
          <div className="text-xs text-gray-400 mt-1">vs 12.6% traditional</div>
        </div>

        <div className="bg-white border border-gray-300 p-4">
          <div className="flex items-center gap-2 mb-2">
            <MapPin size={18} className="text-gray-700" />
            <span className="text-xs text-gray-500 uppercase tracking-wide">LMI Coverage</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900">87%</div>
        </div>

        <div className="bg-white border border-gray-300 p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendUp size={18} className="text-gray-700" />
            <span className="text-xs text-gray-500 uppercase tracking-wide">Credit Score</span>
          </div>
          <div className="text-2xl md:text-3xl font-bold text-gray-900">+26</div>
          <div className="text-xs text-gray-400 mt-1">point increase</div>
        </div>
      </div>

      {/* Single Chart - Simple Line Chart */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="md:col-span-2 bg-white border border-gray-300 p-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Member Engagement Over Time</h3>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={engagementData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#6b7280' }} stroke="#9ca3af" />
              <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  fontSize: '12px', 
                  padding: '8px', 
                  borderRadius: '4px',
                  border: '1px solid #e5e7eb',
                  backgroundColor: '#fff'
                }}
              />
              <Line 
                type="monotone" 
                dataKey="active" 
                stroke="#000" 
                strokeWidth={2}
                dot={{ fill: '#000', strokeWidth: 2, r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="bg-white border border-gray-300 p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-900">Recent Activity</h3>
            <Clock size={14} className="text-gray-400" />
          </div>
          <div className="space-y-3">
            {activityFeed.map((item, i) => (
              <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-1.5 shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-gray-900 mb-0.5">{item.name}</div>
                  <div className="text-xs text-gray-500 mb-1">{item.lesson}</div>
                  <div className="text-xs text-gray-400">{item.location}</div>
                </div>
                <div className="text-xs text-gray-400 shrink-0">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simple Table View */}
      <div className="bg-white border border-gray-300 p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Program Metrics</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 px-3 font-semibold text-gray-700">Metric</th>
                <th className="text-right py-2 px-3 font-semibold text-gray-700">Value</th>
                <th className="text-right py-2 px-3 font-semibold text-gray-700">Target</th>
                <th className="text-right py-2 px-3 font-semibold text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { metric: 'Lessons Completed', value: '83%', target: '80%', status: 'Above' },
                { metric: 'Assessments Passed', value: '78%', target: '75%', status: 'Above' },
                { metric: 'Certificates Earned', value: '72%', target: '70%', status: 'Above' },
                { metric: 'Behavior Changes', value: '68%', target: '65%', status: 'Above' }
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2 px-3 text-gray-700">{row.metric}</td>
                  <td className="py-2 px-3 text-right font-semibold text-gray-900">{row.value}</td>
                  <td className="py-2 px-3 text-right text-gray-500">{row.target}</td>
                  <td className="py-2 px-3 text-right">
                    <span className="text-gray-700">{row.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function PlatformSection() {
  const features = [
    {
      icon: ChartBar,
      title: 'Comprehensive Tracking',
      items: [
        'Member enrollment and demographics',
        'Lesson completion and knowledge gains',
        'Behavior changes and credit improvements'
      ]
    },
    {
      icon: FileText,
      title: 'Automated Documentation',
      items: [
        'Real-time CRA compliance dashboard',
        'Geographic and demographic analysis',
        'Longitudinal outcome tracking'
      ]
    },
    {
      icon: Globe,
      title: 'Built for Scale',
      items: [
        'Mobile delivery reaches 45% more learners',
        'Multi-language support and ADA compliance',
        'Unlimited members - pilot to full deployment'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Measurable Results',
      items: [
        '45% faster learning on mobile',
        'Behavior change within 60 days',
        'Documented credit improvements'
      ]
    }
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            The Platform That Proves Impact
          </h2>
          <p className="text-xl text-gray-600">
            Every interaction tracked. Every outcome measured. Examiner-ready documentation generated automatically.
          </p>
        </motion.div>

        {/* Safari Mockup with Dashboard */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Safari
            url="platform.wisperai.com/cra-dashboard"
            className="w-full"
            src=""
          >
            <CRADashboard />
          </Safari>
        </motion.div>

        {/* Key Stats Bar */}
        <motion.div
          className="mb-20 bg-white border border-gray-300 p-8 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl md:text-7xl font-black text-gray-900 mb-2">
                <NumberTicker value={83} />%
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Program Completion
              </div>
              <div className="text-xs text-gray-500 mt-2">vs 12.6% traditional</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-black text-gray-900 mb-2">
                +<NumberTicker value={26} />
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Point Credit Increase
              </div>
              <div className="text-xs text-gray-500 mt-2">CFPB 2019 Study</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-black text-gray-900 mb-2">
                <NumberTicker value={33} />%
              </div>
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Delinquency Reduction
              </div>
              <div className="text-xs text-gray-500 mt-2">Maximum observed</div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards - Minimal Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-gray-300 p-8 hover:border-gray-400 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg border border-gray-300 flex items-center justify-center">
                  <feature.icon size={24} weight="regular" className="text-gray-900" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
              </div>
              
              <div className="space-y-3">
                {feature.items.map((item, itemIdx) => {
                  // Format text with typography variations
                  const formatText = (text: string) => {
                    // Handle items with bullet separators
                    if (text.includes(' • ')) {
                      const [main, secondary] = text.split(' • ')
                      return (
                        <>
                          <span className="font-semibold">{main}</span>
                          <span className="text-gray-500 font-normal"> • </span>
                          <span className="text-gray-600">{secondary}</span>
                        </>
                      )
                    }
                    
                    // Extract and format numbers
                    const numberMatch = text.match(/(\d+%|\d+\s+(more|days?))/i)
                    if (numberMatch) {
                      const numberPart = numberMatch[0]
                      const beforeNumber = text.substring(0, text.indexOf(numberPart))
                      const afterNumber = text.substring(text.indexOf(numberPart) + numberPart.length)
                      
                      return (
                        <>
                          {beforeNumber}
                          <strong className="font-bold text-gray-900">{numberPart}</strong>
                          {afterNumber}
                        </>
                      )
                    }
                    
                    // Format key terms with italics
                    const keyTerms: string[] = [
                      'Real-time', 'CRA compliance', 'Geographic', 'demographic',
                      'Longitudinal', 'Mobile delivery', 'Multi-language', 'ADA compliance',
                      'Unlimited members', 'Behavior changes', 'credit improvements',
                      'Member enrollment', 'Lesson completion', 'knowledge gains'
                    ]
                    
                    let formatted = text
                    keyTerms.forEach((term) => {
                      const regex = new RegExp(`\\b${term}\\b`, 'gi')
                      formatted = formatted.replace(regex, `__ITALIC__${term}__ITALIC__`)
                    })
                    
                    // Split and format
                    const parts = formatted.split(/__ITALIC__/)
                    return parts.map((part, i) => {
                      if (i % 2 === 1) {
                        // This is an italicized term
                        return <em key={i} className="italic font-medium">{part}</em>
                      }
                      return <span key={i}>{part}</span>
                    })
                  }
                  
                  return (
                    <div key={itemIdx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 shrink-0" />
                      <span className="text-gray-700 leading-relaxed text-sm">
                        {formatText(item)}
                      </span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-white border border-gray-300 p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              See Your Dashboard Live
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a demo and we&apos;ll configure a live dashboard with your institution&apos;s branding and sample data
            </p>
            <button className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Book Platform Demo
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default PlatformSection
