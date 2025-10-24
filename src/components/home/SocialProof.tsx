import React, { useEffect, useState } from 'react'

function SocialProof() {
  const [isVisible, setIsVisible] = useState(false)
  const [animateLogos, setAnimateLogos] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    const logoTimer = setTimeout(() => setAnimateLogos(true), 600)
    return () => {
      clearTimeout(timer)
      clearTimeout(logoTimer)
    }
  }, [])

  const containerStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "100vh",
    background: `linear-gradient(135deg, #f5f9fc 0%, white 50%, #f5f9fc 100%)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 20px",
    position: "relative",
    overflow: "hidden"
  }

  const decorativeCircleStyle: React.CSSProperties = {
    position: "absolute",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: `radial-gradient(circle, rgba(98, 91, 255, 0.1) 0%, rgba(98, 91, 255, 0.05) 50%, transparent 100%)`,
    top: "-150px",
    right: "-150px",
    animation: "float 6s ease-in-out infinite"
  }

  const decorativeCircle2Style: React.CSSProperties = {
    position: "absolute",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: `radial-gradient(circle, rgba(98, 91, 255, 0.08) 0%, transparent 70%)`,
    bottom: "-100px",
    left: "-100px",
    animation: "float 8s ease-in-out infinite reverse"
  }

  const contentStyle: React.CSSProperties = {
    maxWidth: "1200px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "60px",
    transform: isVisible ? "translateY(0)" : "translateY(50px)",
    opacity: isVisible ? 1 : 0,
    transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
  }

  const titleStyle: React.CSSProperties = {
    color: "black",
    textAlign: "center",
    fontSize: "clamp(32px, 5vw, 56px)",
    fontWeight: "700",
    margin: "0",
    lineHeight: "1.2",
    letterSpacing: "-0.02em"
  }

  const highlightStyle: React.CSSProperties = {
    color: "#625bff",
    fontWeight: "800"
  }

  const subtitleStyle: React.CSSProperties = {
    color: "#666",
    fontSize: "18px",
    fontWeight: "400",
    margin: "10px 0 0 0",
    textAlign: "center",
    maxWidth: "600px",
    whiteSpace: "nowrap"
  }

  const logoGridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "40px",
    width: "100%",
    maxWidth: "1000px",
    padding: "40px",
    background: "white",
    borderRadius: "24px",
    boxShadow: `
      0 20px 40px rgba(0, 0, 0, 0.1),
      0 4px 12px rgba(98, 91, 255, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.6)
    `,
    border: "1px solid rgba(98, 91, 255, 0.1)",
    position: "relative"
  }

  const logoItemStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "16px",
    background: "#f5f9fc",
    transition: "all 0.15s ease-out",
    cursor: "pointer",
    border: "2px solid transparent",
    transform: animateLogos ? "translateY(0)" : "translateY(30px)",
    opacity: animateLogos ? 1 : 0
  }

  const logoStyle: React.CSSProperties = {
    maxWidth: "140px",
    maxHeight: "90px",
    objectFit: "contain",
    filter: "grayscale(100%) opacity(0.7)",
    transition: "all 0.15s ease-out"
  }

  const logos = [
    { src: "/assets/images/bankofamericaLogo.png", alt: "Bank of America" },
    { src: "/assets/images/chaseLogo.png", alt: "Chase Bank" },
    { src: "/assets/images/citiLogo.png", alt: "Citibank" },
    { src: "/assets/images/firstrepublicLogo.png", alt: "First Republic Bank" },
    { src: "/assets/images/jpmorganLogo.png", alt: "JPMorgan" },
    { src: "/assets/images/techCUlogo.png", alt: "Tech CU" },
    { src: "/assets/images/bmoLogo.png", alt: "BMO Bank" },
    { src: "/assets/images/goldmanSachsLogo.png", alt: "Goldman Sachs" }
  ]

  const testimonials = [
    {
      id: 1,
      logo: "/assets/images/bankofamericaLogo.png",
      company: "Bank of America",
      quote: "This platform has revolutionized how we handle customer transactions. The security and reliability are unmatched in the industry.",
      author: "Sarah Johnson",
      position: "Chief Technology Officer"
    },
    {
      id: 2,
      logo: "/assets/images/chaseLogo.png",
      company: "Chase Bank",
      quote: "Outstanding service and incredible performance. Our customers love the seamless experience this platform provides.",
      author: "Michael Chen",
      position: "VP of Digital Banking"
    },
    {
      id: 3,
      logo: "/assets/images/jpmorganLogo.png",
      company: "JPMorgan",
      quote: "The innovation and cutting-edge technology have transformed our operations. Highly recommend this solution.",
      author: "Emma Rodriguez",
      position: "Head of Innovation"
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // Testimonials section styles
  const testimonialsContainerStyle: React.CSSProperties = {
    width: "100%",
    minHeight: "100vh",
    background: "white",
    padding: "100px 20px",
    position: "relative"
  }

  const testimonialsContentStyle: React.CSSProperties = {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    gap: "80px",
    height: "100%"
  }

  const testimonialsLeftStyle: React.CSSProperties = {
    flex: "1",
    paddingRight: "40px"
  }

  const testimonialsTitleStyle: React.CSSProperties = {
    color: "black",
    fontSize: "clamp(32px, 5vw, 56px)",
    fontWeight: "700",
    margin: "0 0 20px 0",
    lineHeight: "1.2",
    letterSpacing: "-0.02em"
  }

  const testimonialsSubtitleStyle: React.CSSProperties = {
    color: "#666",
    fontSize: "18px",
    fontWeight: "400",
    margin: "0",
    lineHeight: "1.6"
  }

  const testimonialsRightStyle: React.CSSProperties = {
    flex: "1",
    position: "relative",
    height: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }

  const carouselContainerStyle: React.CSSProperties = {
    position: "relative",
    width: "400px",
    height: "450px",
    perspective: "1000px"
  }

  const testimonialCardStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "white",
    borderRadius: "24px",
    padding: "40px 30px 30px 30px",
    boxShadow: `
      0 25px 50px rgba(0, 0, 0, 0.15),
      0 10px 20px rgba(98, 91, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.8)
    `,
    border: "1px solid rgba(98, 91, 255, 0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    transformStyle: "preserve-3d"
  }

  const logoCircleStyle: React.CSSProperties = {
    position: "absolute",
    top: "-30px",
    left: "50%",
    transform: "translateX(-50%)",
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "#f5f9fc",
    border: "4px solid white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
  }

  const logoCircleImgStyle: React.CSSProperties = {
    maxWidth: "50px",
    maxHeight: "50px",
    objectFit: "contain"
  }

  const quoteStyle: React.CSSProperties = {
    color: "black",
    fontSize: "18px",
    fontWeight: "400",
    lineHeight: "1.6",
    fontStyle: "italic",
    margin: "30px 0",
    textAlign: "center"
  }

  const authorStyle: React.CSSProperties = {
    textAlign: "center",
    marginTop: "auto"
  }

  const authorNameStyle: React.CSSProperties = {
    color: "#625bff",
    fontSize: "16px",
    fontWeight: "600",
    margin: "0"
  }

  const authorPositionStyle: React.CSSProperties = {
    color: "#666",
    fontSize: "14px",
    fontWeight: "400",
    margin: "5px 0 0 0"
  }

  const navigationStyle: React.CSSProperties = {
    position: "absolute",
    bottom: "-80px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "20px"
  }

  const navButtonStyle: React.CSSProperties = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    background: "#625bff",
    border: "none",
    color: "white",
    fontSize: "20px",
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
        
        @keyframes pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .logo-item:hover {
          transform: translateY(-8px) scale(1.05) !important;
          background: white !important;
          border-color: #625bff !important;
          box-shadow: 
            0 20px 40px rgba(98, 91, 255, 0.2),
            0 8px 16px rgba(0, 0, 0, 0.1) !important;
        }

        .logo-item:hover img {
          filter: grayscale(0%) opacity(1) !important;
          transform: scale(1.1);
        }

        .nav-button:hover {
          background: #5048ff !important;
          transform: scale(1.1);
        }

        .testimonial-card-active {
          transform: translateZ(50px) scale(1) !important;
          opacity: 1 !important;
          z-index: 3 !important;
        }

        .testimonial-card-left {
          transform: translateX(-120px) translateZ(-100px) scale(0.8) rotateY(25deg) !important;
          opacity: 0.6 !important;
          z-index: 1 !important;
        }

        .testimonial-card-right {
          transform: translateX(120px) translateZ(-100px) scale(0.8) rotateY(-25deg) !important;
          opacity: 0.6 !important;
          z-index: 1 !important;
        }

        .testimonial-card-hidden {
          transform: translateZ(-200px) scale(0.5) !important;
          opacity: 0 !important;
          z-index: 0 !important;
        }

      `}</style>
      
      <div style={containerStyle}>
        <div style={decorativeCircleStyle}></div>
        <div style={decorativeCircle2Style}></div>
        
        <div style={contentStyle}>
          <div style={{ textAlign: "center" }}>
            <h1 style={titleStyle}>
              Trusted by{" "}
              <span style={highlightStyle}>
                50+
              </span>{" "}
              Financial Institutions
            </h1>
            <p style={subtitleStyle}>Leading banks and financial services trust our platform to deliver secure, reliable solutions for their customers worldwide.</p>
          </div>
          
          <div style={logoGridStyle}>
            {logos.map((logo, index) => (
              <div
                key={logo.alt}
                className="logo-item"
                style={{
                  ...logoItemStyle,
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={logoStyle}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={testimonialsContainerStyle}>
        <div style={testimonialsContentStyle}>
          {/* Left Side - Text */}
          <div style={testimonialsLeftStyle}>
            <h2 style={testimonialsTitleStyle}>
              Here's what the <span style={highlightStyle}>banks</span> have to say about us
            </h2>
            <p style={testimonialsSubtitleStyle}>
              Discover why leading financial institutions choose our platform for their most critical operations and customer experiences.
            </p>
          </div>

          {/* Right Side - Carousel */}
          <div style={testimonialsRightStyle}>
            <div style={carouselContainerStyle}>
              {testimonials.map((testimonial, index) => {
                let cardClass = 'testimonial-card-hidden'
                
                if (index === currentTestimonial) {
                  cardClass = 'testimonial-card-active'
                } else if (index === (currentTestimonial - 1 + testimonials.length) % testimonials.length) {
                  cardClass = 'testimonial-card-left'
                } else if (index === (currentTestimonial + 1) % testimonials.length) {
                  cardClass = 'testimonial-card-right'
                }

                return (
                  <div
                    key={testimonial.id}
                    className={cardClass}
                    style={testimonialCardStyle}
                  >
                    <div style={logoCircleStyle}>
                      <img
                        src={testimonial.logo}
                        alt={testimonial.company}
                        style={logoCircleImgStyle}
                      />
                    </div>
                    
                    <div style={quoteStyle}>
                      "{testimonial.quote}"
                    </div>
                    
                    <div style={authorStyle}>
                      <p style={authorNameStyle}>{testimonial.author}</p>
                      <p style={authorPositionStyle}>{testimonial.position}</p>
                      <p style={authorPositionStyle}>{testimonial.company}</p>
                    </div>
                  </div>
                )
              })}

              {/* Navigation Buttons */}
              <div style={navigationStyle}>
                <button
                  className="nav-button"
                  style={navButtonStyle}
                  onClick={prevTestimonial}
                >
                  ←
                </button>
                <button
                  className="nav-button"
                  style={navButtonStyle}
                  onClick={nextTestimonial}
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

export default SocialProof