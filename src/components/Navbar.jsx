import React, { useState } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa"; // Importing icons from react-icons
import Logo from "../assets/SCC-logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-sm">
      <div className="lg:px-12  px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <img src={Logo} alt="SCC Logo" className="h-12 lg:h-14" />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex text-[10px] md:text-[12px] lg:text-[16px] lg:gap-4 xl:gap-14 text-blue font-semibold">
            <li>
              <Link
                to="/"
                className="hover:text-darkBlue transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-darkBlue transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/benefits"
                className="hover:text-darkBlue transition-colors duration-200"
              >
                Benefits
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-darkBlue transition-colors duration-200"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/join"
                className="hover:text-darkBlue transition-colors duration-200"
              >
                Join Us
              </Link>
            </li>
            <li>
              <Link
                to="/programs"
                className="hover:text-darkBlue transition-colors duration-200"
              >
                Programs & Events
              </Link>
            </li>
          </ul>

          {/* Search Bar (Only visible on desktop) */}
          <div className="hidden lg:flex items-center border border-blue rounded-lg px-3 py-2">
            <FaSearch className="text-lightBlue" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="outline-none bg-transparent text-grey-500 px-2"
            />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-blue hover:text-darkBlue transition-colors duration-200"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } lg:hidden`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <img src={Logo} alt="SCC Logo" className="h-10" />
          <button
            onClick={() => setIsOpen(false)}
            className="focus:outline-none text-blue hover:text-darkBlue transition-colors duration-200"
          >
            <FaTimes size={24} />
          </button>
        </div>

        {/* Mobile Search */}
        <div className="p-4 border-b">
          <div className="flex items-center border border-blue rounded-lg px-3 py-2">
            <FaSearch className="text-lightBlue" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="outline-none bg-transparent text-grey-500 px-2 w-full"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue transition-colors duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/benefits"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue transition-colors duration-200"
            >
              Benefits
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue transition-colors duration-200"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/join"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue transition-colors duration-200"
            >
              Join Us
            </Link>
          </li>
          <li>
            <Link
              to="/programs"
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-700 hover:text-blue transition-colors duration-200"
            >
              Programs & Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
