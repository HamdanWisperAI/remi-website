'use client'

import React, { useState } from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'

function CTA() {
  const [showForm, setShowForm] = useState(false)

  return (
    <section className="py-32 px-4 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Ready to see <span className="text-blue-600">80% completion rates</span> instead of 12.6%?
        </h2>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          See the platform live, with your branding. 20 minutes, zero pressure.
        </p>

        {/* Primary CTA */}
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="group relative inline-flex items-center justify-center px-10 md:px-12 py-4 md:py-5 text-lg md:text-xl font-semibold text-white bg-linear-to-r from-blue-600 to-purple-600 rounded-full hover:scale-105 transition-transform shadow-2xl mb-8"
          >
            Book Your Demo
            <ArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </button>
        ) : null}

        {/* Expectation setting */}
        {!showForm && (
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 mb-12">
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" />
              <span>20 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" />
              <span>Your branding</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-600" />
              <span>ROI calculator included</span>
            </div>
          </div>
        )}

        {/* Minimal form */}
        {showForm && (
          <div className="max-w-md mx-auto mb-6 text-left">
            <form className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm" placeholder="First Name" required />
                <input className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm" placeholder="Last Name" required />
              </div>
              <input className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm" placeholder="Work Email" type="email" required />
              <input className="w-full rounded-lg border border-gray-300 px-3 py-3 text-sm" placeholder="Company Name" required />
              <button className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Schedule My Demo
              </button>
              <p className="text-xs text-gray-500 text-center">We&apos;ll email you calendar options within 2 hours</p>
            </form>
          </div>
        )}

        {/* Secondary option */}
        <p className="text-gray-500">
          Not ready for demo?
          <a href="#assessment" className="text-blue-600 hover:underline ml-1">
            Get a free program assessment
          </a>
        </p>
      </div>
    </section>
  )
}

export default CTA
