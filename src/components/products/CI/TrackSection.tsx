import React from 'react'

interface TrackCard {
  id: string
  title: string
  subtitle: string
  image: string
}

const trackCards: TrackCard[] = [
  {
    id: 'deposit-rates',
    title: 'Deposit Rates',
    subtitle: 'Savings, MMA, and CD rates—live and updated weekly.',
    image: '/assets/images/product/deposit1.png'
  },
  {
    id: 'loan-rates',
    title: 'Loan Rates',
    subtitle: 'Auto, mortgage, and personal loan rates tracked daily.',
    image: '/assets/images/product/loan1.png'
  },
  {
    id: 'fees-minimums',
    title: 'Fees & Minimums',
    subtitle: 'Fees, minimums, and promotional offers monitored.',
    image: '/assets/images/product/fee1.png'
  },
  {
    id: 'promotional-offers',
    title: 'Promotions',
    subtitle: 'Limited-time offers and bonuses detected automatically.',
    image: '/assets/images/product/promotions1.png'
  },
  {
    id: 'digital-features',
    title: 'Digital Features',
    subtitle: 'Mobile apps and platform capabilities analyzed.',
    image: '/assets/images/product/digital1.png'
  },
  {
    id: 'rewards-cashback',
    title: 'Rewards & Cashback',
    subtitle: 'Reward programs and incentives benchmarked.',
    image: '/assets/images/product/rewards1.png'
  },
  {
    id: 'rate-history',
    title: 'Rate History',
    subtitle: 'Historical data and competitor trends over time.',
    image: '/assets/images/product/ratehistory1.png'
  },
  {
    id: 'alerts-delivery',
    title: 'Alerts & Reports',
    subtitle: 'Email updates, dashboard, and executive reports.',
    image: '/assets/images/product/alert1.png'
  }
]

function TrackSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden py-8 lg:py-12 px-6 md:px-10 lg:px-16">
      {/* Animated Background Grid Pattern with #625bff */}
      <div className="absolute inset-0 opacity-8 pointer-events-none z-0 animate-pulse" style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(98, 91, 255, 0.15) 25%, rgba(98, 91, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.15) 75%, rgba(98, 91, 255, 0.15) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(98, 91, 255, 0.15) 25%, rgba(98, 91, 255, 0.15) 26%, transparent 27%, transparent 74%, rgba(98, 91, 255, 0.15) 75%, rgba(98, 91, 255, 0.15) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-3 lg:mb-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight tracking-tighter mb-2 lg:mb-3">
            Intelligence At The Speed Of Banking
          </h2>

          {/* Animated Accent Bar */}
          <div className="flex justify-center gap-2 mb-4 lg:mb-6">
            <div className="h-1 w-16 lg:w-24 bg-gradient-to-r from-transparent via-[#625bff] to-transparent animate-pulse rounded-full" />
            <div className="h-1 w-16 lg:w-24 bg-gradient-to-r from-transparent via-[#625bff] to-transparent animate-pulse rounded-full animation-delay-300" />
            <div className="h-1 w-16 lg:w-24 bg-gradient-to-r from-transparent via-[#625bff] to-transparent animate-pulse rounded-full animation-delay-600" />
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-10 lg:mb-14 opacity-0 animate-fade-in">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-600 leading-relaxed max-w-3xl mx-auto">
            What do we track? (So you dont have to)
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {trackCards.map((card, index) => (
            <div
              key={card.id}
              className="group relative bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#625bff] hover:border-2 hover:-translate-y-1 cursor-pointer opacity-0 animate-fade-in"
              style={{
                animationDelay: `${index * 0.08}s`
              }}
            >
              {/* Top accent bar on hover */}
              <div className="absolute top-0 left-0 w-0 h-1 bg-[#625bff] group-hover:w-full transition-all duration-500" />

              {/* Card Image Container */}
              <div className="relative w-full h-28 md:h-32 lg:h-36 bg-gradient-to-br from-purple-50 via-white to-gray-50 border-b border-gray-200 group-hover:border-[#625bff] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Card Content */}
              <div className="p-3 lg:p-4 flex flex-col flex-grow">
                <h4 className="text-sm md:text-base lg:text-base font-bold text-black mb-1 leading-tight group-hover:text-[#625bff] transition-colors duration-300">
                  {card.title}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 leading-snug flex-grow">
                  {card.subtitle}
                </p>

                {/* Bottom accent line */}
                <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-[#625bff] to-purple-400 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS Custom Animations */}
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

export default TrackSection