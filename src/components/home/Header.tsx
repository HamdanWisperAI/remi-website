import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState<React.CSSProperties>({})
  const [scrolled, setScrolled] = useState(false)
  const navItemsRef = React.useRef<(HTMLDivElement | null)[]>([])
  const closeTimerRef = React.useRef<number | null>(null)

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }

  const scheduleClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
    }
    closeTimerRef.current = window.setTimeout(() => {
      setActiveDropdown(null)
      setHoveredIndex(null)
    }, 150)
  }

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (hoveredIndex !== null && navItemsRef.current[hoveredIndex]) {
      const element = navItemsRef.current[hoveredIndex]
      if (element) {
        const rect = element.getBoundingClientRect()
        const parentRect = element.parentElement?.getBoundingClientRect()
        if (parentRect) {
          setIndicatorStyle({
            width: `${rect.width}px`,
            transform: `translateX(${rect.left - parentRect.left}px)`,
            opacity: 1
          })
        }
      }
    } else {
      setIndicatorStyle(prev => ({ ...prev, opacity: 0 }))
    }
  }, [hoveredIndex])

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false)
        setActiveDropdown(null)
      }
    }
    
    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleEscape)
    }
    
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isMobileMenuOpen])

  const navigationItems = [
    {
      name: 'Products',
      hasDropdown: true,
      items: [
        { name: 'Consumer Financial Literacy Platform', href: '#consumer-literacy', description: 'Empower your customers with financial knowledge' },
        { name: 'Competitive Intelligence Dashboard', href: '#competitive-intelligence', description: 'Stay ahead with market insights' },
        { name: 'CRA Compliance & Tracking', href: '#cra-compliance', description: 'Simplify regulatory compliance' },
        { name: 'Platform Overview', href: '#platform-overview', description: 'See all our capabilities' }
      ]
    },
    {
      name: 'Solutions',
      hasDropdown: true,
      items: [
        { name: 'Increase Cross-Sell & Retention', href: '#cross-sell', description: 'Boost customer lifetime value' },
        { name: 'Drive Digital Engagement', href: '#digital-engagement', description: 'Enhance digital experiences' },
        { name: 'Meet CRA Requirements', href: '#cra-requirements', description: 'Ensure compliance effortlessly' },
        { name: 'Combat Customer Attrition', href: '#customer-attrition', description: 'Reduce churn and retain customers' },
        { name: 'Competitive Positioning', href: '#competitive-positioning', description: 'Differentiate your offerings' }
      ]
    },
    {
      name: 'Who We Serve',
      hasDropdown: true,
      items: [
        { name: 'Community Banks', href: '#community-banks', description: 'Solutions for local banking' },
        { name: 'Credit Unions', href: '#credit-unions', description: 'Member-focused tools' },
        { name: 'Regional Banks', href: '#regional-banks', description: 'Scale with confidence' },
        { name: 'Digital-First Banks', href: '#digital-first-banks', description: 'Innovation for modern banking' }
      ]
    },
    {
      name: 'Resources',
      hasDropdown: true,
      items: [
        { name: 'Blog/Insights', href: '#blog', description: 'Industry trends and tips' },
        { name: 'Financial Literacy Content Library', href: '#content-library', description: 'Educational resources' },
        { name: 'Case Studies', href: '#case-studies', description: 'Success stories' },
        { name: 'Research & Reports', href: '#research', description: 'In-depth analysis' },
        { name: 'Guides & Whitepapers', href: '#guides', description: 'Expert knowledge' }
      ]
    },
    {
      name: 'Company',
      hasDropdown: true,
      items: [
        { name: 'About Us', href: '#about', description: 'Our mission and values' },
        { name: 'Team', href: '#team', description: 'Meet our experts' },
        { name: 'Careers', href: '#careers', description: 'Join our team' },
        { name: 'Press', href: '#press', description: 'News and media' }
      ]
    }
  ]

  return (
    <>
      <style jsx>{`
        .nav-item {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .nav-item:hover {
          background-color: #f8f9ff;
          color: #625bff;
          transform: translateY(-2px);
        }
        
        .dropdown-item {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .dropdown-item:hover {
          background-color: #f8f9ff;
          transform: translateX(5px);
        }

        .dropdown-item:hover .item-title {
          color: #625bff;
        }
        
        .nav-indicator {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .header-shadow {
          box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
        }

        .header-shadow-scrolled {
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        }
      `}</style>
      
      <header 
        className={`fixed top-0 left-0 right-0 z-1000 bg-white/95 backdrop-blur-md transition-all duration-300 ${
          scrolled ? 'header-shadow-scrolled py-2' : 'header-shadow py-0'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 flex items-center h-[70px]">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 text-2xl font-bold text-[#625bff] no-underline mr-12 hover:opacity-80 transition-opacity"
            aria-label="WisperAI Home"
          >
            <div className="w-10 h-10 bg-linear-to-br from-[#625bff] to-[#5048ff] rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg shadow-[#625bff]/20">
              W
            </div>
            <span className="hidden sm:inline">WisperAI</span>
          </Link>

          {/* Desktop Navigation */}
          {isDesktop && (
            <nav 
              className="relative flex items-center gap-1 flex-1"
              onMouseLeave={scheduleClose}
              role="navigation"
              aria-label="Main navigation"
            >
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  ref={(el) => { navItemsRef.current[index] = el }}
                  className="nav-item relative flex items-center gap-1.5 px-4 py-2.5 text-[#333] no-underline text-[15px] font-medium cursor-pointer rounded-lg whitespace-nowrap"
                  onMouseEnter={() => {
                    cancelClose()
                    setActiveDropdown(item.name)
                    setHoveredIndex(index)
                  }}
                  onMouseLeave={scheduleClose}
                  role="menuitem"
                  aria-haspopup={item.hasDropdown}
                  aria-expanded={activeDropdown === item.name}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <FaChevronDown 
                      size={10} 
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                  
                  {item.hasDropdown && (
                    <div 
                      className={`absolute top-full left-0 mt-3 bg-white border border-gray-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)] p-2 min-w-[320px] z-1001 origin-top-center
                        ${activeDropdown === item.name 
                          ? 'opacity-100 visible translate-y-0 scale-100 pointer-events-auto' 
                          : 'opacity-0 invisible -translate-y-2.5 scale-95 pointer-events-none'
                        }`}
                      style={{
                        transition: 'opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.25s'
                      }}
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                      role="menu"
                      aria-label={`${item.name} menu`}
                    >
                      {item.items?.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="dropdown-item block px-4 py-3 rounded-xl group"
                          role="menuitem"
                        >
                          <div className="item-title text-[15px] font-semibold text-[#1a1a1a] mb-0.5">
                            {subItem.name}
                          </div>
                          {subItem.description && (
                            <div className="text-[13px] text-gray-500 leading-snug">
                              {subItem.description}
                            </div>
                          )}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div 
                className="nav-indicator absolute -bottom-2 left-0 h-[3px] bg-linear-to-r from-[#625bff] to-[#7c6fff] rounded-full"
                style={indicatorStyle}
                aria-hidden="true"
              ></div>
            </nav>
          )}

          {/* CTA Button */}
          {isDesktop && (
            <div className="ml-auto flex items-center">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-linear-to-r from-[#625bff] to-[#7c6fff] text-white px-6 py-2.5 rounded-xl text-[15px] font-semibold no-underline transition-all duration-300 hover:shadow-lg hover:shadow-[#625bff]/30 hover:-translate-y-0.5 active:translate-y-0"
                role="button"
              >
                Contact Sales
              </a>
            </div>
          )}

          {/* Mobile Menu Button */}
          {!isDesktop && (
            <button
              className="ml-auto bg-transparent border-none text-2xl text-[#333] cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          )}
        </div>

        {/* Mobile Menu */}
        {!isDesktop && (
          <div 
            className={`fixed top-[70px] left-0 right-0 bg-white border-t border-gray-100 z-999 transition-all duration-300 ease-out overflow-y-auto max-h-[calc(100vh-70px)] ${
              isMobileMenuOpen 
                ? 'translate-y-0 opacity-100 visible shadow-2xl' 
                : '-translate-y-4 opacity-0 invisible'
            }`}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="p-6">
              {navigationItems.map((item, index) => (
                <div key={index} className="mb-2">
                  <button 
                    className="w-full text-left py-3 px-4 text-[#1a1a1a] font-semibold text-base rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between"
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <FaChevronDown 
                        size={12} 
                        className={`transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`}
                      />
                    )}
                  </button>
                  
                  {item.hasDropdown && item.items && (
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        activeDropdown === item.name 
                          ? 'max-h-[1000px] opacity-100 mt-2' 
                          : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="pl-4 space-y-1">
                        {item.items.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="block py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <div className="text-[15px] font-medium text-[#1a1a1a] mb-0.5">
                              {subItem.name}
                            </div>
                            {subItem.description && (
                              <div className="text-[13px] text-gray-500">
                                {subItem.description}
                              </div>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <a 
                  href="#contact" 
                  className="block text-center bg-linear-to-r from-[#625bff] to-[#7c6fff] text-white px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#625bff]/30"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
