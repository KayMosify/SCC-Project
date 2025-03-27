// AboutUs.jsx
import React from "react";
// import { AiOutlineEye, AiOutlineTarget } from "react-icons/ai";
import PeopleImg1 from "../../assets/people-img1.png";
import PeopleImg2 from "../../assets/people-img2.png";
import { AiOutlineEye } from "react-icons/ai";
import { RxTarget } from "react-icons/rx";
import { FaEye, FaBullseye } from "react-icons/fa";
import { LuScanEye } from "react-icons/lu";

const About = () => {
  return (
    <div className="bg-blue text-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg flex flex-col space-y-8 sm:space-y-12">
      {/* About Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center">
        {/* Image Section */}
        <div className="w-full h-[280px] lg:h-[650px]">
          <img
            src={PeopleImg1}
            alt="Students celebrating in a business meeting"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full">
          <h2 className="text-white text-3xl font-bold mb-2">About Us</h2>
          <p className="text-white mb-4">A Little About SCC</p>
          <p className="text-white mb-8 text-lg">
            The Student Chamber of Commerce (SCC) is a dynamic platform
            dedicated to empowering future business leaders. We bridge the gap
            between academic learning and real-world experience, providing
            students with opportunities to network, develop professional skills,
            and explore entrepreneurial ventures.
          </p>
          <h3 className="text-white text-2xl font-semibold mb-6">
            Our Core Values
          </h3>
          <div className="space-y-6">
            {[
              {
                number: "1",
                title: "Leadership Development",
                description:
                  "Cultivating the next generation of ethical and effective leaders.",
              },
              {
                number: "2",
                title: "Professional Networking",
                description:
                  "Connecting students with industry professionals and peers.",
              },
              {
                number: "3",
                title: "Entrepreneurial Spirit",
                description:
                  "Encouraging innovation and the pursuit of business ventures.",
              },
              {
                number: "4",
                title: "Community Engagement",
                description:
                  "Contributing to the economic development of our university and the surrounding area.",
              },
            ].map((item) => (
              <div key={item.number} className="flex items-start gap-4">
                <div className="bg-red text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                  {item.number}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">
                    {item.title}
                  </h4>
                  <p className="text-white text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 items-center bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-lg">
        {/* Text Section */}
        <div className="flex flex-col space-y-8">
          <div>
            <div className="text-red mb-4">
              <LuScanEye size={40} />
            </div>
            <h3 className="text-blue text-2xl lg:text-3xl font-semibold mb-4">
              Our Vision
            </h3>
            <p className="text-blue text-lg">
              A dynamic ecosystem where student innovation, investor capital,
              and community needs converge to drive sustainable economic
              development and alleviate poverty.
            </p>
          </div>
          <div>
            <div className="text-red mb-4">
              <RxTarget size={40} />
            </div>
            <h3 className="text-blue text-2xl lg:text-3xl font-semibold mb-4">
              Our Mission
            </h3>
            <p className="text-blue text-lg">
              To establish and empower student-led Chambers of Commerce within
              educational institutions, fostering entrepreneurial skills,
              providing access to funding, and promoting community-focused
              ventures that address poverty and improve livelihoods.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full h-[280px] lg:h-[650px]">
          <img
            src={PeopleImg2}
            alt="Students attentively listening in a classroom"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Footer Message */}
      <p className="text-center text-white text-lg">
        Join us as we build the next generation of business innovators.
      </p>
    </div>
  );
};

export default About;
