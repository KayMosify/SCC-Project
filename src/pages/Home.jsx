import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import ProbSol from "../components/sections/ProbSol";
import KeyComp from "../components/sections/KeyComp";
import ProgramsEvents from "../components/sections/ProgsEvents";
import GetInTouch from "../components/sections/GetinTouch";
import MembershipPartnership from "../components/sections/Member";
import Footer from "../components/Footer";
import SubheroCards from "../components/sections/SubheroCards";
import BenefitsCards from "../components/sections/BenefitsCards";
import SectionWrapper from "../components/SectionWrapper";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="mb-6 sm:mb-8 md:mb-10"></div>

      <SectionWrapper>
        <Hero />

        <SubheroCards />
      </SectionWrapper>

      <SectionWrapper>
        <About />
      </SectionWrapper>

      <SectionWrapper>
        <ProbSol />
      </SectionWrapper>

      <SectionWrapper>
        <KeyComp />
      </SectionWrapper>

      <SectionWrapper>
        <BenefitsCards />
      </SectionWrapper>

      <SectionWrapper>
        <ProgramsEvents />
      </SectionWrapper>

      <SectionWrapper>
        <GetInTouch />
      </SectionWrapper>

      <SectionWrapper>
        <MembershipPartnership />
      </SectionWrapper>

      <div className="mt-8 sm:mt-12 md:mt-16"></div>
      <Footer />
    </>
  );
};

export default Home;
