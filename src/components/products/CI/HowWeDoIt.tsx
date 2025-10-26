import React, { useState } from 'react'

const HowWeDoIt = () => {
  const [clickedCard, setClickedCard] = useState<number | null>(null)

  const cards = [
    {
      id: 1,
      title: 'Public Data Aggregation',
      subtitle: 'Automated aggregation from public websites, filings, and APIs only.'
    },
    {
      id: 2,
      title: 'AI + Human Verification',
      subtitle: 'Pattern recognition powered by artificial intelligence, verified by expert teams.'
    },
    {
      id: 3,
      title: 'Legal, Secure & Private',
      subtitle: 'Your data is never shared—compliance and privacy by design.'
    }
  ]

  return (
    <section className="relative w-full bg-white overflow-hidden py-24 px-6 md:px-10 lg:px-16">
      {/* Animated Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none z-0 animate-pulse" style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(98, 91, 255, 0.1) 25%, rgba(98, 91, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.1) 75%, rgba(98, 91, 255, 0.1) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(98, 91, 255, 0.1) 25%, rgba(98, 91, 255, 0.1) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.1) 75%, rgba(98, 91, 255, 0.1) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Headline with Bounce + Pulse Animation */}
        <div className="mb-6 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tighter mb-4">
            We Do It the Right Way
          </h2>

          {/* Animated Accent Bar */}
          <div className="flex justify-center gap-2 mb-8">
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#625bff] to-transparent animate-pulse rounded-full" />
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#625bff] to-transparent animate-pulse rounded-full animation-delay-300" />
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#625bff] to-transparent animate-pulse rounded-full animation-delay-600" />
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-20 opacity-0 animate-fade-in">
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Legal, Ethical, Transparent Collection—Guaranteed.
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`
                group relative
                bg-white border-2 border-black rounded-2xl
                p-10 md:p-8 lg:p-10
                flex flex-col items-start text-left
                transition-all duration-500
                hover:scale-105 hover:shadow-2xl
                ${clickedCard === card.id ? 'scale-95' : 'scale-100'}
                cursor-pointer
                focus-within:ring-2 focus-within:ring-[#625bff] focus-within:ring-offset-2
              `}
              role="article"
              aria-label={`${card.title}: ${card.subtitle}`}
              tabIndex={0}
              onClick={() => {
                setClickedCard(card.id)
                setTimeout(() => setClickedCard(null), 300)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  setClickedCard(card.id)
                  setTimeout(() => setClickedCard(null), 300)
                }
              }}
            >
              {/* Animated Border Ping Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#625bff] opacity-0 group-hover:opacity-100 animate-pulse pointer-events-none" />

              {/* Card Content */}
              <div className="relative z-10 w-full">
                <h3 className="text-2xl md:text-xl lg:text-2xl font-bold text-black mb-4 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                  {card.title}
                </h3>

                <p className="text-lg md:text-base lg:text-lg text-gray-500 leading-relaxed opacity-0 animate-fade-in" style={{
                  animationDelay: `${index * 0.15}s`
                }}>
                  {card.subtitle}
                </p>

                {/* Hover Accent Underline */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#625bff] to-purple-400 group-hover:w-20 transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* Legal Footer */}
        <div className="text-center pt-16 border-t-2 border-gray-200">
          <p className="text-sm md:text-base lg:text-lg text-gray-400 font-light leading-relaxed max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-600">
            100% compliant with financial regulations. Your data stays yours—always.
          </p>
        </div>
      </div>

      {/* Tailwind CSS Custom Animations in Style Tag */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }
      `}</style>
    </section>
  )
}

export default HowWeDoIt