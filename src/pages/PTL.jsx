import React from 'react'
import HeroPTL from "../components/PTL/HeroPTL"
import ServicesPTL from "../components/PTL/ServicesPTL"
import Industries from "../components/PTL/Industries"
import Footer from '../components/Footer/Footer'
const PTL = () => {
  return (
   <main
      style={{
        paddingTop: "88px",
        minHeight: "100vh",
        background: "#fff",
      }}
    >
      <HeroPTL/>
      <ServicesPTL/>
      <Industries/>
      <Footer/>
    </main>
  )
}

export default PTL
