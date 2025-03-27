import React from "react";
import { FaExclamationTriangle, FaClipboardList } from "react-icons/fa";
import { MdSyncProblem } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";

const ProbSol = () => {
  return (
    <div className="bg-lightGrey p-3 sm:p-4 md:p-6 lg:p-8 rounded-lg">
      <h2 className="text-darkGrey text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">
        The Problems & Solutions
      </h2>

      <div className="flex flex-col justify-center md:flex-row lg:w-3/4 mx-auto">
        {/* Problems Section */}
        <div className=" w-full p-4 ml-[5%]">
          <div className="flex items-center mb-4">
            <MdSyncProblem
              className="text-white bg-red p-2 rounded-full text-4xl"
              size={60}
            />
            <h3 className="text-darkGrey text-2xl font-semibold bg-lightGrey p-2 rounded-lg ml-2">
              Problems
            </h3>
          </div>
          <div className="border-l-4 border-red ml-6 pl-6 space-y-6">
            <div className="-ml-11">
              {[
                {
                  number: "01",
                  title: "Youth Unemployment and Underemployment",
                  description:
                    "Many graduates lack practical skills and entrepreneurial experience, leading to unemployment and underemployment.",
                },
                {
                  number: "02",
                  title: "Limited Access to Capital",
                  description:
                    "Student entrepreneurs face significant barriers in accessing funding to launch and scale their ventures.",
                },
                {
                  number: "03",
                  title: "Poverty and Inequality",
                  description:
                    "Communities often lack access to innovative solutions and resources to address poverty, unemployment, and social challenges.",
                },
                {
                  number: "04",
                  title: "Brain Drain",
                  description:
                    "Many talented students leave their communities to pursue opportunities elsewhere, hindering local development.",
                },
              ].map((problem) => (
                <div
                  key={problem.number}
                  className="flex items-start space-x-3 mb-4"
                >
                  <span className="bg-red text-white text-lg font-bold w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
                    {problem.number}
                  </span>
                  <div>
                    <h4 className="text-darkGrey text-lg font-semibold md:w-[250px]">
                      {problem.title}
                    </h4>
                    <p className="text-gray-500 text-base md:w-[250px]">
                      {problem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>{" "}
          </div>
        </div>

        {/* Solutions Section */}
        <div className=" w-full p-4 ml-[5%]">
          <div className="flex items-center mb-4">
            <AiOutlineSolution
              className="text-white bg-blue p-2 rounded-full text-4xl"
              size={60}
            />
            <h3 className="text-darkGrey text-2xl font-semibold bg-lightGrey p-2 rounded-lg ml-2">
              Solutions
            </h3>
          </div>
          <p className="text-darkGrey text-lg font-semibold md:w-[350px]">
            The Student Chamber of Commerce (SCC) acts as a bridge between:
          </p>
          <p className="text-gray-500 mb-4 md:w-[350px]">
            Cultivating the next generation of ethical and effective leaders.
          </p>
          <div className="border-l-4 border-blue ml-6 pl-6 space-y-6 ">
            <div className="-ml-11 ">
              {[
                {
                  number: "01",
                  title: "Student Entrepreneurs",
                  description:
                    "Providing them with resources, mentorship, and funding opportunities.",
                },
                {
                  number: "02",
                  title: "Investors",
                  description:
                    "Offering access to a pipeline of innovative and socially impactful ventures.",
                },
                {
                  number: "03",
                  title: "Communities",
                  description:
                    "Facilitating the development and implementation of projects that address local needs and promote economic growth.",
                },
              ].map((solution) => (
                <div
                  key={solution.number}
                  className="flex items-start space-x-3 mb-4"
                >
                  <span className="bg-blue text-white text-lg font-bold w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0">
                    {solution.number}
                  </span>
                  <div>
                    <h4 className="text-darkGrey text-lg font-semibold">
                      {solution.title}
                    </h4>
                    <p className="text-gray-500 text-base md:w-[250px]">
                      {solution.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProbSol;
