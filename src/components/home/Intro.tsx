import React, { useEffect, useState } from 'react'

function Intro() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="w-full bg-white flex flex-col items-center justify-center py-16 md:py-24 px-5 md:px-8">
      <div className="flex flex-col items-center justify-center gap-6 md:gap-8 max-w-3xl">
        {/* Main Title */}
        <div className="flex flex-col items-center gap-2 md:gap-3">
          <h1 className={`text-center font-bold text-black ${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'}`}>
            Three Tools.
          </h1>
          <h1 className={`text-center font-bold ${isMobile ? 'text-3xl' : 'text-4xl md:text-5xl'}`} style={{ color: '#625bff' }}>
            Infinite Possibilities.
          </h1>
        </div>

        {/* Subtitle */}
        <p className={`text-center text-gray-600 ${isMobile ? 'text-sm leading-relaxed' : 'text-base md:text-lg leading-relaxed'}`}>
          We build simple, powerful solutions that solve real problems for financial institutions.
        </p>
      </div>
    </div>
  )
}

export default Intro
