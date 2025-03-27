import React, { useState } from "react";
import HumanImg2 from "../../assets/human-img2.png";

const MembershipPartnership = () => {
  const [isStudent, setIsStudent] = useState(false);
  const [isInvestor, setIsInvestor] = useState(false);

  return (
    <div className="p-8 bg-white rounded-lg grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="place-items-center">
        <img
          src={HumanImg2}
          alt="Membership"
          className="w-full md:max-w-[500px] rounded-lg shadow-md"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4">
          To Become A Member Or Partnership
        </h2>
        <p className="text-gray-600 mb-4">
          You can reach us anytime via{" "}
          <a
            href="mailto:studentchamberscommerce@gmail.com"
            className="text-blue-600"
          >
            studentchamberscommerce@gmail.com
          </a>
        </p>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your full-name"
            className="w-full p-3 border rounded-md"
          />
          <input
            type="email"
            placeholder="@gmail.com"
            className="w-full p-3 border rounded-md"
          />
          <input
            type="tel"
            placeholder="+234 000-0000"
            className="w-full p-3 border rounded-md"
          />
          <textarea
            placeholder="Note"
            className="w-full p-3 border rounded-md"
            rows="3"
          ></textarea>

          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isStudent}
                onChange={() => setIsStudent(!isStudent)}
                className="mr-2"
              />{" "}
              Student
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={isInvestor}
                onChange={() => setIsInvestor(!isInvestor)}
                className="mr-2"
              />{" "}
              Investor
            </label>
          </div>

          {isStudent && (
            <div className="space-y-2">
              <input
                type="text"
                placeholder="University/Institution Name"
                className="w-full p-3 border rounded-md"
              />
              <input
                type="text"
                placeholder="Field Of Study"
                className="w-full p-3 border rounded-md"
              />
            </div>
          )}

          <div className="space-y-2">
            <label className="block font-medium">
              Entrepreneurial Interests
            </label>
            <select className="w-full p-3 border rounded-md">
              <option value="">Select an interest</option>
              <option value="Tech">Tech</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
              <option value="Health">Health</option>
            </select>
          </div>

          {isInvestor && (
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Company's Name"
                className="w-full p-3 border rounded-md"
              />
              <label className="block font-medium">Investment Rate</label>
              <select className="w-full p-3 border rounded-md">
                <option value="">Select Investment Rate</option>
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
              </select>
              <label className="block font-medium">Investment Range</label>
              <select className="w-full p-3 border rounded-md">
                <option value="">Select Investment Range</option>
                <option value="$1,000 - $10,000">$1,000 - $10,000</option>
                <option value="$10,000 - $50,000">$10,000 - $50,000</option>
                <option value="$50,000+">$50,000+</option>
              </select>
            </div>
          )}

          <button className="w-full bg-blue-600 text-white py-3 rounded-md">
            Sign Up & Join SCC
          </button>
        </form>
      </div>
    </div>
  );
};

export default MembershipPartnership;
