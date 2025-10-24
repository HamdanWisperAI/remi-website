import React from 'react'
import Header from '@/components/home/Header'
import Intro from '@/components/home/Intro'
import Hero from '@/components/home/Hero'
import Footer from '@/components/home/Footer'
import SocialProof from '@/components/home/SocialProof'
import FAQ from '@/components/home/FAQ'

function index() {
  return (
    <div style={{width:"100%", backgroundColor:"white"}}>
      <Header />
      <div style={{marginTop: '70px'}}>
        <Hero />
        <Intro />
        <SocialProof />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default index