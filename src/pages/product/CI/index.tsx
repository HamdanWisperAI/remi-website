import React from 'react'
import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import MainSection from '@/components/products/CI/MainSection'
import ProblemSection from '@/components/products/CI/ProblemSection'
import TrackSection from '@/components/products/CI/TrackSection'
import IntelligenceDashboard from '@/components/products/CI/IntelligenceDashboard'
import HowWeDoIt from '@/components/products/CI/HowWeDoIt'
import FAQ from '@/components/products/CI/FAQ'

function index() {
  return (
    <div style={{width:"100%", backgroundColor:"white", height: "100vh"}}>
      <Header />
      <div style={{marginTop: '70px'}}>
        <MainSection />
        <ProblemSection />
        <TrackSection />
        <IntelligenceDashboard />
        <HowWeDoIt />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default index