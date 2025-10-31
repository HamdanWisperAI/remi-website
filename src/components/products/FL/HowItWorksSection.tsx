'use client'

import React from 'react'
import { Timeline } from '@/components/ui/timeline'
import { motion } from 'framer-motion'
import { 
  CheckCircle, 
  Clock, 
  Target, 
  Baby, 
  Zap, 
  Link, 
  TrendingUp, 
  ShoppingCart, 
  BarChart3, 
  Eye, 
  Smartphone, 
  Palette, 
  Shield, 
  Users 
} from 'lucide-react'

function HowItWorksSection() {
  const colors = {
    1: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-600' },
    2: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-600' },
    3: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-600' },
    4: { bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-600' },
  } as const

  const data = [
    {
      title: '01',
      content: (
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mb-3">
            Nano-<span className="text-blue-600">Learning</span> Architecture
          </h3>
          <p className="text-base md:text-lg text-gray-600 mb-6">700+ pre-built lessons (3–5 minutes each)</p>

          <ul className="space-y-3 text-gray-700 mb-6">
            {['Progressive difficulty levels','Spaced repetition for retention','Mobile-optimized delivery','Interactive content formats'].map((d, idx) => (
              <motion.li key={idx} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="flex items-start gap-2">
                <CheckCircle size={18} className={`${colors[1].text} mt-0.5 shrink-0`} />
                <span>{d}</span>
              </motion.li>
            ))}
          </ul>

          {/* Big numeric callouts - horizontal below bullets */}
          <div className="w-full">
            <div className="max-w-2xl md:max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-4 md:gap-6 border border-gray-200 rounded-2xl px-4 md:px-6 py-3 md:py-4 bg-white">
              <div className="flex items-baseline gap-2 md:gap-3 min-w-0">
                <div className="text-3xl md:text-5xl font-black text-gray-900 leading-none">700+</div>
                <div className="text-[10px] md:text-sm uppercase tracking-wider text-gray-500">Lessons</div>
              </div>
              <div className="hidden md:block h-8 w-px bg-gray-200" />
              <div className="flex items-baseline gap-2 md:gap-3 min-w-0">
                <div className="text-3xl md:text-5xl font-black text-gray-900 leading-none">3–5m</div>
                <div className="text-[10px] md:text-sm uppercase tracking-wider text-gray-500">Each</div>
              </div>
              <div className="hidden md:block h-8 w-px bg-gray-200" />
              <div className="flex items-baseline gap-2 md:gap-3 min-w-0">
                <div className="text-3xl md:text-5xl font-black text-blue-600 leading-none">83%</div>
                <div className="text-[10px] md:text-sm uppercase tracking-wider text-gray-500">Completion</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: '02',
      content: (
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mb-2">Life <span className="text-green-600">Moment</span> Integration</h3>
          <p className="text-base md:text-lg text-gray-600 mb-6">Right lesson at the right moment</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-4 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Baby size={20} className="text-green-600" />
                </div>
                <span className="font-semibold text-gray-800">Life Events</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">First job? Student loans? New baby?</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-4 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Zap size={20} className="text-green-600" />
                </div>
                <span className="font-semibold text-gray-800">Smart Triggers</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">Behavioral triggers, not random pushes</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-4 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Target size={20} className="text-green-600" />
                </div>
                <span className="font-semibold text-gray-800">Real Decisions</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">Connection to actual decisions</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-xl p-4 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Users size={20} className="text-green-600" />
                </div>
                <span className="font-semibold text-gray-800">Personal Paths</span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">Personalized learning paths</p>
            </motion.div>
          </div>
        </div>
      )
    },
    {
      title: '03',
      content: (
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mb-2">Product <span className="text-purple-600">Integration</span></h3>
          <p className="text-base md:text-lg text-gray-600 mb-6">Every lesson connects to your products</p>
          
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: 0.1 }}
              className="flex items-center justify-between bg-gradient-to-r from-purple-50 via-white to-indigo-50 border border-purple-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <Link size={24} className="text-purple-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">Learn → Act Flow</div>
                  <div className="text-sm text-gray-600">"Learn about CDs" → "Open a CD"</div>
                </div>
              </div>
              <div className="hidden md:block text-2xl">→</div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.2 }}
                className="text-center bg-white border border-purple-100 rounded-xl p-4 hover:border-purple-200 transition-all duration-300"
              >
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                  <TrendingUp size={20} className="text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Drive Action</h4>
                <p className="text-sm text-gray-600">Education drives action</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.3 }}
                className="text-center bg-white border border-purple-100 rounded-xl p-4 hover:border-purple-200 transition-all duration-300"
              >
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                  <BarChart3 size={20} className="text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Track Impact</h4>
                <p className="text-sm text-gray-600">Track conversion lift</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: 0.4 }}
                className="text-center bg-white border border-purple-100 rounded-xl p-4 hover:border-purple-200 transition-all duration-300"
              >
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-3">
                  <Eye size={20} className="text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">Discovery</h4>
                <p className="text-sm text-gray-600">Seamless product discovery</p>
              </motion.div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: '04',
      content: (
        <div className="max-w-4xl">
          <h3 className="text-2xl md:text-4xl font-black tracking-tight text-gray-900 mb-2">White‑Label <span className="text-orange-600">Delivery</span></h3>
          <p className="text-base md:text-lg text-gray-600 mb-6">Your brand, your voice</p>
          
          <div className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 border border-orange-100 rounded-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50"
                >
                  <div className="p-2 bg-orange-100 rounded-lg mt-1">
                    <Smartphone size={18} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">App Integration</h4>
                    <p className="text-sm text-gray-600">Seamless app integration</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50"
                >
                  <div className="p-2 bg-orange-100 rounded-lg mt-1">
                    <Palette size={18} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Custom Content</h4>
                    <p className="text-sm text-gray-600">Custom content options</p>
                  </div>
                </motion.div>
              </div>

              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50"
                >
                  <div className="p-2 bg-orange-100 rounded-lg mt-1">
                    <Shield size={18} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Data Privacy</h4>
                    <p className="text-sm text-gray-600">Member data stays yours</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }} 
                  whileInView={{ opacity: 1, scale: 1 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: 0.4 }}
                  className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/50"
                >
                  <div className="p-2 bg-orange-100 rounded-lg mt-1">
                    <Users size={18} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Brand Unity</h4>
                    <p className="text-sm text-gray-600">Complete brand consistency</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Actually Works</h2>
        <p className="text-xl text-gray-600">Smart, Simple, Scalable</p>
      </div>

      <Timeline data={data} />
    </section>
  )
}

export default HowItWorksSection
