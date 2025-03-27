import React from "react";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { IoMdMailUnread } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const GetInTouch = () => {
  return (
    <div className="p-8 px-[10%] bg-blue-50 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center justify-center">
          <div className="space-y-4 ">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get In Touch With Us!</h2>
              <p className="text-gray-600 mb-6">
                We'd love to hear from you! Reach out for inquiries,
                partnerships, or support.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-center space-x-3">
                <BsTelephoneOutboundFill className="text-blue text-xl" />
                <RiWhatsappFill className="text-blue text-xl" />
                <span>+2348105504283</span>
              </div>
              <div className="flex items-center space-x-3">
                <TbDeviceLandlinePhone className="text-blue text-xl" />
                <span>+2348105504283</span>
              </div>
              <div className="flex items-center space-x-3">
                <IoMdMailUnread className="text-blue text-xl" />
                <span>studentchambercommerce@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaSquareXTwitter className="text-blue text-xl" />
                <span>@student_chamberofcommerce</span>
              </div>
              <div className="flex items-center space-x-3">
                <AiFillInstagram className="text-blue text-xl" />
                <span>@studentchamberofcommerce</span>
              </div>
            </div>
          </div>
        </div>
        <form className="space-y-4 bg-white p-6 rounded-lg shadow">
          <label htmlFor="Name" className="block mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded"
          />
          <label htmlFor="Email" className="block mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="@gmail.com"
            className="w-full p-2 border rounded"
          />
          <div>
            <p className="mb-1">Subject</p>
            <select className="w-full p-2 border rounded mb-4">
              <option>General Enquiry</option>
              <option>Partnership</option>
              <option>Support</option>
            </select>
          </div>

          <label htmlFor="Message" className="block mb-1">
            Message
          </label>
          <textarea
            placeholder="Message"
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
          <button className="w-full bg-blue text-white py-2 rounded hover:bg-darkBlue">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
