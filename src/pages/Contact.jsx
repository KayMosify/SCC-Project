import React from "react";
import Navbar from "../components/Navbar";
import GetInTouch from "../components/sections/GetinTouch";
import MembershipPartnership from "../components/sections/Member";
import Footer from "../components/Footer";
import HeroTwo from "../components/sections/HeroTwo";
import ContactImg from "../assets/contact-heroImg.jpeg";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo
        backgroundImage={ContactImg}
        title="Contact Us"
        subtitle="Get In Touch With Us By Simply Dropping A Message"
        buttonText="Join Us Today"
        buttonLink="/joinus"
      />
      <GetInTouch />
      <MembershipPartnership />
      <Footer />
    </div>
  );
};

export default Contact;
