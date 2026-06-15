import React from 'react'
import Hero from '../components/Hero'
import Trusted from '../components/Trusted'
import FTLSection from '../components/FTLSection'
import PTLSection from '../components/PTLSection'
import ServiceGlance from '../components/ServiceGlance'
import FactsFigures from '../components/FactsFigures'
import  CustomersSection from '../components/CustomersSection'
import RecentBlogs from '../components/RecentBlogs'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Hero/>
    <Trusted/>
    <FTLSection/>
    <PTLSection/>
    <ServiceGlance/>
    <FactsFigures/>
    <CustomersSection/>
    <RecentBlogs/>
    <Footer/>
    </>
  )
}

export default Home
