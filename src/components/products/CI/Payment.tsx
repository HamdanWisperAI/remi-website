'use client'

import React, { useState } from 'react'

interface PricingCard {
  id: number
  title: string
  price: string
  description: string
  features: string[]
  cta: string
}

const pricingCards: PricingCard[] = [
  {
    id: 1,
    title: 'Starter Intelligence',
    price: '$999',
    description: 'Track 10 competitors',
    features: [
      'Real-time price monitoring',
      'Basic competitor tracking',
      'Monthly performance reports',
      'Email support',
      'Up to 10 tracked items',
    ],
    cta: 'Get Started',
  },
  {
    id: 2,
    title: 'Market Intelligence',
    price: '$2,999',
    description: 'Weekly competitive updates',
    features: [
      'All Starter features',
      'Unlimited competitor tracking',
      'Weekly actionable insights',
      'Advanced analytics dashboard',
      'Priority email & chat support',
      'Custom alerts & triggers',
      'Historical data (2 years)',
    ],
    cta: 'Get Started',
  },
  {
    id: 3,
    title: 'Enterprise Intelligence',
    price: 'Custom',
    description: 'Real-time enterprise solutions',
    features: [
      'All Market Intelligence features',
      'Real-time API access',
      'Dedicated account manager',
      'White-label options',
      'Custom integrations',
      'Advanced compliance & security',
      'SLA guarantee (99.9% uptime)',
    ],
    cta: 'Contact Sales',
  },
]

export default function Payment() {
  const [currentPricingCard, setCurrentPricingCard] = useState(0)
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

  // Styling for pricing section
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
    flexDirection: isDesktop ? "row" : "column",
    alignItems: isDesktop ? "center" : "stretch",
    gap: isDesktop ? "80px" : "40px",
    height: isDesktop ? "100%" : "auto",
    position: "relative",
    zIndex: 1
  }

  const leftStyle: React.CSSProperties = {
    flex: isDesktop ? "1" : "initial",
    paddingRight: isDesktop ? "40px" : "0"
  }

  const titleStyle: React.CSSProperties = {
    color: "black",
    fontSize: isDesktop ? "clamp(32px, 5vw, 56px)" : "clamp(24px, 4vw, 36px)",
    fontWeight: "700",
    margin: "0 0 20px 0",
    lineHeight: "1.2",
    letterSpacing: "-0.02em"
  }

  const highlightStyle: React.CSSProperties = {
    color: "#625bff",
    fontWeight: "800"
  }

  const subtitleStyle: React.CSSProperties = {
    color: "#666",
    fontSize: isDesktop ? "18px" : "14px",
    fontWeight: "400",
    margin: "0",
    lineHeight: "1.6"
  }

  const rightStyle: React.CSSProperties = {
    flex: isDesktop ? "1" : "initial",
    position: "relative",
    height: isDesktop ? "500px" : "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  }

  const carouselContainerStyle: React.CSSProperties = {
    position: "relative",
    width: isDesktop ? "450px" : "100%",
    height: isDesktop ? "500px" : "auto",
    perspective: "1000px",
    maxWidth: isDesktop ? "450px" : "100%",
    margin: isDesktop ? "0" : "0 auto",
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
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
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
        {/* Animated Background Grid Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none z-0" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(98, 91, 255, 0.15) 25%, rgba(98, 91, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.15) 75%, rgba(98, 91, 255, 0.15) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(98, 91, 255, 0.15) 25%, rgba(98, 91, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.15) 75%, rgba(98, 91, 255, 0.15) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px'
        }} />
        <div style={contentStyle}>
          {/* Left Side - Text */}
          <div style={leftStyle}>
            <h2 style={titleStyle}>
              PRICING THAT <span style={highlightStyle}>MAKES SENSE</span>
            </h2>
          </div>

          {/* Right Side - Carousel */}
          <div style={rightStyle}>
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
                    {/* Badge for Market Intelligence */}
                    {card.id === 2 && (
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
                        POPULAR
                      </div>
                    )}

                    {/* Title */}
                    <h3 style={{
                      color: "#625bff",
                      fontSize: "20px",
                      fontWeight: "600",
                      margin: "0 0 12px 0"
                    }}>
                      {card.title}
                    </h3>

                    {/* Price */}
                    <div style={{ marginBottom: "12px" }}>
                      <p style={{
                        fontSize: "36px",
                        fontWeight: "700",
                        color: "black",
                        margin: "0"
                      }}>
                        {card.price}
                      </p>
                      {card.id !== 3 && (
                        <p style={{
                          color: "#999",
                          fontSize: "12px",
                          margin: "4px 0 0 0"
                        }}>
                          /month, billed annually
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p style={{
                      color: "#666",
                      fontSize: "14px",
                      fontWeight: "500",
                      margin: "0 0 20px 0"
                    }}>
                      {card.description}
                    </p>

                    {/* Features List */}
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

                    {/* CTA Button */}
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

              {/* Navigation Buttons */}
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
          </div>
        </div>
      </div>
    </>
  )
}