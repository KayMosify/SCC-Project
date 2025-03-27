import React from "react";
import Logo from "../assets/SCC-logo.png";
import { BsEnvelopeAt } from "react-icons/bs";
import { FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Newsletter Section */}
        <div>
          <img src={Logo} alt="SCC Logo" className="w-32 mb-4" />
          <h3 className="text-lg font-semibold">Newsletter</h3>
          <p className="text-gray-600 text-sm">
            Join our newsletter to stay up to date on features and releases.
          </p>
          <div className="flex flex-col mt-4 border rounded-lg overflow-hidden">
            <div className="relative w-full">
              <BsEnvelopeAt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
              <input
                type="email"
                placeholder="Enter Your E-mail"
                className="p-4 w-full pl-10 border border-blue rounded-lg outline-none"
              />
            </div>{" "}
            <button className="bg-blue mt-4 rounded-lg text-white p-4">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-2">
            By subscribing you agree to with our{" "}
            <a href="#" className="text-blue">
              Privacy Policy
            </a>
          </p>
        </div>

        <div></div>

        <div className="flex justify-between gap-6 ">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue">
                  Join
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue">
                  Programs & Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue">
                  Call To Action
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue">
                  Success stories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-10 border-y-gray-400 border-t pt-4">
        &copy; 2025 SCC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
