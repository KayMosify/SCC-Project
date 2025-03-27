import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MembershipPartnership from "../components/sections/Member";
import GetInTouch from "../components/sections/GetinTouch";
import HeroTwo from "../components/sections/HeroTwo";
import JoinUsImg from "../assets/joinus-heroImg.jpeg";

const Join = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo
        backgroundImage={JoinUsImg}
        title="Join Us"
        subtitle="Discover how we build future business leaders"
        buttonText="Apply Now"
        buttonLink="/contact"
      />
      <MembershipPartnership />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Join;
