import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroTwo from "../components/sections/HeroTwo";
import BenefitsImg from "../assets/benefits-heroImg.jpeg";
import KeyComp from "../components/sections/KeyComp";
import SubheroCards from "../components/sections/SubheroCards";
import BenefitsCards from "../components/sections/BenefitsCards";
import Space from "../components/sections/Space";

const Benefits = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo
        backgroundImage={BenefitsImg}
        title="Benefits"
        subtitle="We offer Variety Of Benefits For Stakeholders"
        buttonText="Join Us Today"
        buttonLink="/joinus"
      />
      <BenefitsCards />
      <Space />
      <SubheroCards />
      <KeyComp />

      <Footer />
    </div>
  );
};

export default Benefits;
