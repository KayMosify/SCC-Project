import React from "react";
import studentIcon from "../../assets/students-logo.png";
import investorIcon from "../../assets/investors-logo.png";
import communityIcon from "../../assets/communities-logo.png";
import educationIcon from "../../assets/house-icon.png";
import { GiCheckMark } from "react-icons/gi";

const BenefitsCards = () => {
  const benefits = [
    {
      title: "STUDENTS",
      icon: studentIcon,
      points: [
        "Gain practical entrepreneurial skills and experience",
        "Access to funding and mentorship",
        "Opportunities to launch and grow their own ventures",
        "Opportunities to launch and grow their own ventures",
      ],
    },
    {
      title: "INVESTORS",
      icon: investorIcon,
      points: [
        "Access to a pipeline of innovative and socially responsible ventures",
        "Opportunities to invest in early-stage companies with high growth potential",
        "Contribute to social impact and economic development.",
      ],
    },
    {
      title: "COMMUNITIES",
      icon: communityIcon,
      points: [
        "Access to innovative solutions to local challenges",
        "Increased job creation and economic opportunities",
        "Improved quality of life and reduced poverty",
        "Increased local economic activity.",
      ],
    },
    {
      title: "EDUCATIONAL INSTITUTIONS",
      icon: educationIcon,
      points: [
        "Enhance the practical relevance of education.",
        "Foster a culture of entrepreneurship and innovation.",
        "Strengthen relationships with the business community",
        "Increase graduate employability.",
      ],
    },
  ];

  return (
    <div className="p-3 sm:p-5 md:p-8 bg-white rounded-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">
        Benefits For Stakeholders
      </h2>
      <div className="grid grid-cols-1 lg:px-[8%] px:5% md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="border border-blue rounded-lg p-4 sm:p-6 md:p-10 shadow-md bg-gray-100"
          >
            <div className="flex flex-col items-start mb-4">
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-10 h-10 mr-3"
              />
              <h3 className="text-2xl text-blue font-semibold">
                {benefit.title}
              </h3>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {benefit.points.map((point, idx) => (
                <li className="flex items-center" key={idx}>
                  <GiCheckMark className="text-red mr-2" size={20} />
                  {point}
                </li>
              ))}
            </ul>
            <button className="mt-4 w-full bg-darkRed text-white py-2 rounded-lg font-semibold hover:bg-red-600">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsCards;
