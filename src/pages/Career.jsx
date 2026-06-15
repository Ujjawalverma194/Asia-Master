import React from 'react'
import Footer from '../components/Footer/Footer'
import HeroCareer from "../components/Career/HeroCareer"
const Career = () => {
  return (
        <main
      style={{
        paddingTop: "88px",
        minHeight: "100vh",
        background: "#fff",
      }}
    >
      <HeroCareer/>
      <Footer/>
    </main>
  )
}

export default Career
