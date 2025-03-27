import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroTwo from "../components/sections/HeroTwo";
import EventImg from "../assets/event-heroImg.jpeg";
import SccEvent from "../components/sections/SccEvent";
import SccNewsRatings from "../components/sections/SccNewsRating";

const Programs = () => {
  return (
    <div>
      <Navbar />
      <HeroTwo
        backgroundImage={EventImg}
        title="Programs & Events"
        subtitle="Explore Our Upcoming, Past Events And Programs"
        buttonText="Join Us Today"
        buttonLink="/join"
      />
      <SccEvent />
      <SccNewsRatings />
      <Footer />
    </div>
  );
};

export default Programs;
