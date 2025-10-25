import React from 'react'
import Header from '@/components/home/Header'
import Product from '@/components/home/Product'
import Footer from '@/components/home/Footer'
import SocialProof from '@/components/home/SocialProof'
import FAQ from '@/components/home/FAQ'
import PickYourPath from '@/components/home/PickYourPath'

function index() {
  return (
    <div style={{width:"100%", backgroundColor:"white"}}>
      <Header />
      <div style={{marginTop: '70px'}}>
        <Product />
        <SocialProof />
        <FAQ />
        <PickYourPath />
        <Footer />
      </div>
    </div>
  )
}

export default index