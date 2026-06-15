import React from 'react'
import Hero from '../components/Home/Hero'
import Trusted from '../components/Home/Trusted'
import FTLSection from '../components/Home/FTLSection'
import PTLSection from '../components/Home/PTLSection'
import ServiceGlance from '../components/Home/ServiceGlance'
import FactsFigures from '../components/Home/FactsFigures'
import  CustomersSection from '../components/Home/CustomersSection'
import RecentBlogs from '../components/Home/RecentBlogs'
import Footer from '../components/Footer/Footer'

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
