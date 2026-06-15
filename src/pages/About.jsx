import React from "react";
import Services from "../components/AboutUs/Services"
import Leaders from "../components/AboutUs/Leaders"
import ApartSection from "../components/AboutUs/ApartSection";
import Networks from "../components/AboutUs/Networks";
import Footer from "../components/Footer/Footer";
const About = () => {
  return (
    <main
      style={{
        paddingTop: "88px",
        minHeight: "100vh",
        background: "#fff",
      }}
    >
     <Services/>
     <Leaders/>
     <ApartSection/>
     <Networks/>
     <Footer/>
    </main>
  );
};

export default About;