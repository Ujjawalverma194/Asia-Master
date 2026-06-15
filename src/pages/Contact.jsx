import React from 'react'
import HeroContact from "../components/Contact/HeroContact"
import Footer from '../components/Footer/Footer'

const Contact = () => {
  return (
    <main
      style={{
        paddingTop: "88px",
        minHeight: "100vh",
        background: "#fff",
      }}
    >
     <HeroContact/>
     <Footer/>
    </main>
  )
}

export default Contact
