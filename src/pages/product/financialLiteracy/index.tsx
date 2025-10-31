import React from 'react'
import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import MainSection from '@/components/products/FL/MainSection'
import ProblemSection from '@/components/products/FL/ProblemSection'
import ResearchSection from '@/components/products/FL/ResearchSection'
import PhoneDashboard from '@/components/products/FL/PhoneDashboard'
import ImpactSection from '@/components/products/FL/ImpactSection'
import HowItWorksSection from '@/components/products/FL/HowItWorksSection'
import FAQ from '@/components/products/FL/FAQ'
import CTA from '@/components/products/FL/CTA'

function index() {
  return (
    <div style={{width:"100%", backgroundColor:"white", height: "100vh"}}>
      <Header />
      <div style={{marginTop: '70px'}}>
        <MainSection />
        <ProblemSection />
        <ResearchSection />
        <PhoneDashboard />
        <HowItWorksSection />
        <FAQ />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default index
