import React from 'react'
import Header from '@/components/home/Header'
import Footer from '@/components/home/Footer'
import MainSection from '@/components/products/CRA/MainSection'
import ProblemSection from '@/components/products/CRA/ProblemSection'
import RegulatorsSection from '@/components/products/CRA/RegulatorsSection'
import PlatformSection from '@/components/products/CRA/PlatformSection'
import BenefitsSection from '@/components/products/CRA/BenefitsSection'
import CaseStudiesSection from '@/components/products/CRA/CaseStudiesSection'
import ExaminationSection from '@/components/products/CRA/ExaminationSection'
import FeaturesSection from '@/components/products/CRA/FeaturesSection'
import ImpactSection from '@/components/products/CRA/ImpactSection'
import TimelineSection from '@/components/products/CRA/TimelineSection'
import PricingSection from '@/components/products/CRA/PricingSection'
import AssessmentCTA from '@/components/products/CRA/AssessmentCTA'
import FAQ from '@/components/products/CRA/FAQ'
import FinalCTA from '@/components/products/CRA/FinalCTA'

function index() {
  return (
    <div style={{width:"100%", backgroundColor:"white"}}>
      <Header />
      <div style={{marginTop: '70px'}}>
        <MainSection />
        <ProblemSection />
        <RegulatorsSection />
        <PlatformSection />
        <BenefitsSection />
        <CaseStudiesSection />
        <ExaminationSection />
        <FeaturesSection />
        <ImpactSection />
        <TimelineSection />
        <PricingSection />
        <AssessmentCTA />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  )
}

export default index
