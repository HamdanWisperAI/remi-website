'use client'

import React, { useState } from 'react'

interface PricingCard {
  id: number
  title: string
  price: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

const pricingCards: PricingCard[] = [
  {
    id: 1,
    title: 'Basic Package',
    price: '$2,500',
    description: 'Essential CRA compliance tools',
    features: [
      'Up to 1,000 active users',
      'Basic tracking and reporting',
      'Monthly CRA documentation',
      'Email support',
      'Core financial literacy content',
    ],
    cta: 'Get Started',
  },
  {
    id: 2,
    title: 'Standard Package',
    price: '$5,000',
    description: 'Complete CRA innovation platform',
    features: [
      'All Basic features',
      'Unlimited active users',
      'Real-time CRA dashboard',
      'Examiner-ready documentation',
      'Multi-language support',
      'Priority support',
      'Custom branding',
    ],
    cta: 'Get Started',
    popular: true
  },
  {
    id: 3,
    title: 'Enterprise Package',
    price: '$10,000',
    description: 'Full-service CRA excellence',
    features: [
      'All Standard features',
      'Dedicated success manager',
      'Examination support',
      'Custom integrations',
      'Advanced analytics',
      'White-label options',
      'SLA guarantee',
    ],
    cta: 'Contact Sales',
  },
]

export default function PricingSection() {
  const [currentPricingCard, setCurrentPricingCard] = useState(1) // Start with Standard (index 1)
  const [isDesktop, setIsDesktop] = React.useState(false)

  React.useEffect(() => {
    setIsDesktop(window.innerWidth >= 768)
    const handleResize = () => setIsDesktop(window.innerWidth >= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextPricingCard = () => {
    setCurrentPricingCard((prev) => (prev + 1) % pricingCards.length)
  }

  const prevPricingCard = () => {
    setCurrentPricingCard((prev) => (prev - 1 + pricingCards.length) % pricingCards.length)
  }

  const containerStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "white",
    padding: isDesktop ? "100px 20px" : "60px 16px 80px 16px",
    position: "relative"
  }

  const contentStyle: React.CSSProperties = {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "60px"
  }

  const headerStyle: React.CSSProperties = {
    textAlign: "center"
  }

  const titleStyle: React.CSSProperties = {
    color: "black",
    fontSize: isDesktop ? "clamp(32px, 5vw, 56px)" : "clamp(24px, 4vw, 36px)",
    fontWeight: "900",
    margin: "0 0 20px 0",
    lineHeight: "1.2"
  }

  const highlightStyle: React.CSSProperties = {
    color: "#625bff",
    fontWeight: "900"
  }

  const subtitleStyle: React.CSSProperties = {
    color: "#666",
    fontSize: isDesktop ? "20px" : "16px",
    fontWeight: "600",
    margin: "0"
  }

  const carouselContainerStyle: React.CSSProperties = {
    position: "relative",
    width: isDesktop ? "450px" : "100%",
    height: isDesktop ? "550px" : "auto",
    perspective: "1000px",
    maxWidth: isDesktop ? "450px" : "100%",
    margin: "0 auto",
    paddingBottom: isDesktop ? "0" : "20px"
  }

  const pricingCardStyle: React.CSSProperties = {
    position: isDesktop ? "absolute" : "relative",
    width: "100%",
    height: isDesktop ? "100%" : "auto",
    background: "white",
    borderRadius: isDesktop ? "24px" : "20px",
    padding: isDesktop ? "40px 30px 30px 30px" : "32px 24px 24px 24px",
    boxShadow: `
      0 25px 50px rgba(0, 0, 0, 0.15),
      0 10px 20px rgba(98, 91, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.8)
    `,
    border: "1px solid rgba(98, 91, 255, 0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    transformStyle: "preserve-3d"
  }

  const navigationStyle: React.CSSProperties = {
    position: isDesktop ? "absolute" : "relative",
    bottom: isDesktop ? "-80px" : "0",
    left: isDesktop ? "50%" : "auto",
    transform: isDesktop ? "translateX(-50%)" : "none",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    marginTop: isDesktop ? "0" : "40px",
    width: isDesktop ? "auto" : "100%"
  }

  const navButtonStyle: React.CSSProperties = {
    width: isDesktop ? "50px" : "44px",
    height: isDesktop ? "50px" : "44px",
    borderRadius: "50%",
    background: "#625bff",
    border: "none",
    color: "white",
    fontSize: isDesktop ? "20px" : "18px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    boxShadow: "0 5px 15px rgba(98, 91, 255, 0.3)"
  }

  return (
    <>
      <style jsx>{`
        .pricing-card-active {
          transform: translateZ(50px) scale(1) !important;
          opacity: 1 !important;
          z-index: 3 !important;
          display: block !important;
        }

        .pricing-card-left {
          transform: translateX(-120px) translateZ(-100px) scale(0.8) rotateY(25deg) !important;
          opacity: 0.6 !important;
          z-index: 1 !important;
          display: none !important;
        }

        .pricing-card-right {
          transform: translateX(120px) translateZ(-100px) scale(0.8) rotateY(-25deg) !important;
          opacity: 0.6 !important;
          z-index: 1 !important;
          display: none !important;
        }

        .pricing-card-hidden {
          transform: translateZ(-200px) scale(0.5) !important;
          opacity: 0 !important;
          z-index: 0 !important;
          display: none !important;
        }

        @media (min-width: 768px) {
          .pricing-card-left {
            display: block !important;
          }

          .pricing-card-right {
            display: block !important;
          }
        }

        .nav-button:hover {
          background: #5048ff !important;
          transform: scale(1.1);
        }
      `}</style>

      <div style={containerStyle} className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(98, 91, 255, 0.15) 25%, rgba(98, 91, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.15) 75%, rgba(98, 91, 255, 0.15) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(98, 91, 255, 0.15) 25%, rgba(98, 91, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.15) 75%, rgba(98, 91, 255, 0.15) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }} />

        <div style={contentStyle}>
          {/* Header */}
          <div style={headerStyle}>
            <h2 style={titleStyle}>
              INVESTMENT WITH <span style={highlightStyle}>GUARANTEED ROI</span>
            </h2>
            <p style={subtitleStyle}>
              CRA innovation that pays for itself
            </p>
          </div>

          {/* Carousel */}
          <div style={carouselContainerStyle}>
            {pricingCards.map((card, index) => {
              let cardClass = 'pricing-card-hidden'
              
              if (index === currentPricingCard) {
                cardClass = 'pricing-card-active'
              } else if (index === (currentPricingCard - 1 + pricingCards.length) % pricingCards.length) {
                cardClass = 'pricing-card-left'
              } else if (index === (currentPricingCard + 1) % pricingCards.length) {
                cardClass = 'pricing-card-right'
              }

              return (
                <div
                  key={card.id}
                  className={cardClass}
                  style={pricingCardStyle}
                >
                  {/* Popular Badge */}
                  {card.popular && (
                    <div style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      backgroundColor: "#625bff",
                      color: "white",
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "700",
                      zIndex: 10
                    }}>
                      MOST POPULAR
                    </div>
                  )}

                  <h3 style={{
                    color: "#625bff",
                    fontSize: "20px",
                    fontWeight: "600",
                    margin: "0 0 12px 0"
                  }}>
                    {card.title}
                  </h3>

                  <div style={{ marginBottom: "12px" }}>
                    <p style={{
                      fontSize: "36px",
                      fontWeight: "700",
                      color: "black",
                      margin: "0"
                    }}>
                      {card.price}
                    </p>
                    <p style={{
                      color: "#999",
                      fontSize: "12px",
                      margin: "4px 0 0 0"
                    }}>
                      /month
                    </p>
                  </div>

                  <p style={{
                    color: "#666",
                    fontSize: "14px",
                    fontWeight: "500",
                    margin: "0 0 20px 0"
                  }}>
                    {card.description}
                  </p>

                  <ul style={{
                    listStyle: "none",
                    padding: "0",
                    margin: "0 0 24px 0",
                    flex: "1"
                  }}>
                    {card.features.map((feature, idx) => (
                      <li
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          color: "#666",
                          fontSize: "13px",
                          margin: "10px 0"
                        }}
                      >
                        <span style={{
                          color: "#625bff",
                          fontWeight: "700",
                          marginRight: "8px",
                          marginTop: "2px",
                          flexShrink: 0
                        }}>
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      backgroundColor: "#625bff",
                      color: "white",
                      fontWeight: "600",
                      fontSize: "14px",
                      border: "none",
                      borderRadius: "8px",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                    onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => {
                      const target = e.target as HTMLButtonElement
                      target.style.backgroundColor = "#5048ff"
                      target.style.transform = "scale(1.02)"
                    }}
                    onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) => {
                      const target = e.target as HTMLButtonElement
                      target.style.backgroundColor = "#625bff"
                      target.style.transform = "scale(1)"
                    }}
                  >
                    {card.cta}
                  </button>
                </div>
              )
            })}

            {/* Navigation */}
            <div style={navigationStyle}>
              <button
                className="nav-button"
                style={navButtonStyle}
                onClick={prevPricingCard}
              >
                ←
              </button>
              <button
                className="nav-button"
                style={navButtonStyle}
                onClick={nextPricingCard}
              >
                →
              </button>
            </div>
          </div>

          {/* ROI Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-gradient-to-br from-green-50 to-white border-2 border-green-200 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-green-600 mb-2">$6</div>
              <div className="text-sm font-semibold text-gray-700">Saved per $1 invested (healthcare costs)</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-200 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-blue-600 mb-2">2x</div>
              <div className="text-sm font-semibold text-gray-700">Employee referral increase</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-purple-600 mb-2">23-26</div>
              <div className="text-sm font-semibold text-gray-700">Point credit score improvements</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200 rounded-2xl p-6 text-center">
              <div className="text-3xl font-black text-orange-600 mb-2">10-33%</div>
              <div className="text-sm font-semibold text-gray-700">Delinquency reduction</div>
            </div>
          </div>

          {/* Value Props */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-10 text-center">Beyond Pricing: Real CRA Value</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#625bff] to-purple-600 flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900 mb-2">Outstanding Rating Potential</p>
                  <p className="text-base text-[#625bff] font-semibold">Priceless</p>
                  <p className="text-sm text-gray-600 mt-1">Position yourself for examination success</p>
                </div>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#625bff] to-purple-600 flex items-center justify-center">
                  <span className="text-white text-sm">↑</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900 mb-2">Expanded Assessment Area Approval</p>
                  <p className="text-base text-[#625bff] font-semibold">Growth Enabler</p>
                  <p className="text-sm text-gray-600 mt-1">Open new markets and opportunities</p>
                </div>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#625bff] to-purple-600 flex items-center justify-center">
                  <span className="text-white text-sm">⟷</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900 mb-2">Regulatory Relationship Improvement</p>
                  <p className="text-base text-[#625bff] font-semibold">Risk Reducer</p>
                  <p className="text-sm text-gray-600 mt-1">Build trust with regulators and examiners</p>
                </div>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-gradient-to-br from-[#625bff] to-purple-600 flex items-center justify-center">
                  <span className="text-white text-sm">★</span>
                </div>
                <div>
                  <p className="text-lg font-bold text-gray-900 mb-2">Competitive Differentiation</p>
                  <p className="text-base text-[#625bff] font-semibold">Market Winner</p>
                  <p className="text-sm text-gray-600 mt-1">Stand out from competitors with proven innovation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

