import React from 'react'
import Header from '@/components/home/Header'
import Footer from '@/components/home/Footer'
import MainSection from '@/components/products/CRA/MainSection'
function index() {
  return (
    <div style={{width:"100%", backgroundColor:"white", height: "100vh"}}>
      <Header />
      <div style={{marginTop: '70px'}}>
        <MainSection />
        <Footer />
      </div>
    </div>
  )
}

export default index
