import React from 'react'
import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import MainSection from '@/components/products/CI/MainSection'
import ProblemSection from '@/components/products/CI/ProblemSection'
import TrackSection from '@/components/products/CI/TrackSection'
import IntelligenceDashboard from '@/components/products/CI/IntelligenceDashboard'
import HowWeDoIt from '@/components/products/CI/HowWeDoIt'
import FAQ from '@/components/products/CI/FAQ'
import Payment from '@/components/products/CI/Payment'
import Hero from '@/components/products/CI/Hero'
import CTASection from '@/components/products/CI/CTA'

function index() {
  return (
    <div style={{width:"100%", backgroundColor:"white", height: "100vh"}}>
      <Header />
      <div style={{marginTop: '70px'}}>
        <MainSection />
        <ProblemSection />
        <TrackSection />
        <IntelligenceDashboard />
        <Hero />
        <HowWeDoIt />
        <FAQ />
        <Payment />
        <CTASection />
        <Footer />
      </div>
    </div>
  )
}

export default index