import React from "react";
import { useLocation } from "react-router-dom";

const HeroTwo = ({
  backgroundImage,
  title,
  subtitle,
  buttonText,
  buttonLink,
}) => {
  const location = useLocation();

  return (
    <div
      className="relative w-full h-[40rem] bg-cover bg-center flex items-center mt-16"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <p className="text-xl text-white mb-8">{subtitle}</p>

          {buttonText && buttonLink && (
            <a
              href={buttonLink}
              className="bg-red hover:bg-darkRed text-white font-medium py-2 px-6 rounded-md transition duration-300"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
