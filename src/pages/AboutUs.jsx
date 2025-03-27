import React from 'react'
import Navbar from '../components/Navbar';
import About from '../components/sections/About';
import KeyComp from '../components/sections/KeyComp';
import ProbSol from '../components/sections/ProbSol';
import Footer from '../components/Footer';
import HeroTwo from '../components/sections/HeroTwo';
import AboutUsImg from "../assets/about-heroImg.jpeg";


const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo
        backgroundImage={AboutUsImg}
        title="About Us"
        subtitle="Empowering Student Entrepreneurs With Mentorship, Funding, And Opportunities"
        buttonText="Join Us Today"
        buttonLink="/aboutus"
      />
      <About />
      <KeyComp />
      <ProbSol />
      <Footer />
    </div>
  );
}

export default AboutUs;