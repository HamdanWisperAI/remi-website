import React from 'react'
import Header from '@/components/home/Header'
import Hero from '@/components/home/Hero'
import Footer from '@/components/home/Footer'
import SocialProof from '@/components/home/SocialProof'

function index() {
  return (
    <div style={{width:"100%", backgroundColor:"white"}}>
      <Header />
      <div style={{marginTop: '70px'}}>
        <Hero />
        <SocialProof />
        <Footer />
      </div>
    </div>
  )
}

export default index