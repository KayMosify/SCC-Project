import React from "react";
import { BsFillCheckSquareFill } from "react-icons/bs";
import HumanImg from "../../assets/human-img1.png";

const KeyComp = () => {
  return (
    <div className="bg-white p-3 sm:p-5 md:p-8 rounded-lg flex flex-col md:flex-row items-center">
      {/* Image Section */}
      <div className="md:w-1/2 w-full p-2 sm:p-4 place-items-center">
        <img
          src={HumanImg}
          alt="Key Component"
          className="w-full md:max-w-[500px] rounded-lg"
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 w-full p-2 sm:p-4">
        <h2 className="text-darkGrey text-3xl font-bold mb-6 sm:mb-10">
          Key Components of SCC
        </h2>
        <div className="space-y-4 sm:space-y-6 md:space-y-8 ">
          {[
            "Student-led governance with faculty advisors and industry mentors",
            "Organizational Structure",
            "Defined roles and responsibilities for members",
            "Partnerships with local businesses, NGOs, and government agencies",
            "Entrepreneurship Development Programs",
            "Workshops and training on business planning, financial literacy, marketing, and leadership",
            "Incubation and acceleration programs for student ventures",
            "Mentorship from experienced entrepreneurs and industry professionals",
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              <BsFillCheckSquareFill
                className="text-red rounded flex-shrink-0"
                size={24}
              />
              <p className="text-darkGrey text-lg font-">{item}</p>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-red text-white py-2 px-6 rounded-lg font-medium hover:bg-darkRed">
          See More
        </button>
      </div>
    </div>
  );
};

export default KeyComp;
