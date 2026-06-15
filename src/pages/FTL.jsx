import React from 'react'
import  HeroFTL from "../components/FTL/HeroFTL"
import ServicesFTL from '../components/FTL/ServicesFTL'
import Process from '../components/FTL/Process'
import Footer from '../components/Footer/Footer'
const FTL = () => {
  return (
        <main
      style={{
        paddingTop: "88px",
        minHeight: "100vh",
        background: "#fff",
      }}
    >
      <HeroFTL/>
      <ServicesFTL/>
      <Process/>
      <Footer/>
    </main>
  )
}

export default FTL
