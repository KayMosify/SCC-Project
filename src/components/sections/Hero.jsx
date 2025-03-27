import React from "react";
import HeroImage from "../../assets/hero-img1.jpeg";

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center text-white text-center py-10 sm:py-16 md:py-20 px-4 md:px-8 flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Hero Content */}
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center py-8 sm:py-12 md:py-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight xl:mx-auto">
          STUDENT CHAMBER OF COMMERCE
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-4xl max-w-3xl mx-auto">
          Bridging Entrepreneurial Dreams and Community Development
        </p>
        <button className="bg-red hover:bg-darkRed text-white font-bold py-2 px-6 rounded-lg mt-8 md:text-2xl text-lg">
          Join Us Today
        </button>
      </div>
    </section>
  );
};

export default Hero;
