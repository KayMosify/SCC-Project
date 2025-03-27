import React from "react";
import studentsIcon from "../../assets/students-logo.png";
import investorsIcon from "../../assets/investors-logo.png";
import communitiesIcon from "../../assets/communities-logo.png";
import houseIcon from "../../assets/house-icon.png";

const SubheroCards = () => {
  return (
    <div className="relative xl:mb-60 lg:mb-20 md:mb-20 mb-10">
      {/* Info Cards (Stack on Mobile, Row on Desktop) */}
      <div className="xl:absolute xl:top-[-8rem] xl:left-0 xl:right-0 flex flex-col justify-center items-center">
        <div className="text-blue grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 px-[15%] md:px-[0] py-4 gap-4 bg-transparent text-center">
          <div className="border shadow-xl p-10 rounded-lg bg-white max-w-[360px]">
            <img
              src={studentsIcon}
              alt="Students Icon"
              className="mx-auto w-16 h-16 mb-2 object-contain"
            />
            <h2 className="font-semibold text-2xl">STUDENTS</h2>
            <p className="text-black">
              Get involved with SCC and launch your own ventures
            </p>
          </div>
          <div className="border shadow-xl p-10 rounded-lg bg-white max-w-[360px]">
            <img
              src={investorsIcon}
              alt="Investors Icon"
              className="mx-auto w-16 h-16 mb-2 object-contain"
            />
            <h2 className="font-semibold text-2xl">INVESTORS</h2>
            <p className="text-black">
              Invest in student-led ventures that address social challenges
            </p>
          </div>
          <div className="border shadow-xl p-10 rounded-lg bg-white max-w-[360px]">
            <img
              src={communitiesIcon}
              alt="Communities Icon"
              className="mx-auto w-16 h-16 mb-2 object-contain"
            />
            <h2 className="font-semibold text-2xl">COMMUNITIES</h2>
            <p className="text-black">
              Partner with SCC to develop and implement sustainable solutions
            </p>
          </div>
          <div className="border shadow-xl p-10 rounded-lg bg-white max-w-[360px]">
            <img
              src={houseIcon}
              alt="House Icon"
              className="mx-auto w-16 h-16 mb-2 object-contain"
            />
            <h2 className="font-semibold text-2xl">EDUCATIONAL INSTITUTION</h2>
            <p className="text-black">
              Establish and support student chambers of commerce.
            </p>
          </div>
        </div>
        <div className="px-4 text-center">
          <p className="text-black">
            By working together, we can empower student entrepreneurs, drive
            economic development, and create a more equitable and prosperous
            future for all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubheroCards;
