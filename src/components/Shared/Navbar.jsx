import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import { BiSolidMoon } from "react-icons/bi";



const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Implement your dark mode logic here
  };

  return (
    <nav className="bg-base-200 p-4">
      <div className="flex items-center justify-between">
        <div className="md:hidden w-full px-2 flex justify-between">
          <button
            className="text-2xl text-white  focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <FaBars size={24} />
          </button>
          <button className="btn btn-outline" onClick={toggleDarkMode}>
            {/* {isDarkMode ? "Day Mode" : "Night Mode"} */}
            {isDarkMode ? <BiSolidMoon size={24} /> : <BsSun size={24} />}
          </button>
        </div>
        <div className="md:flex items-center gap-4 hidden ">
          <button className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-purple-500 to-yellow-500">
            Ashik Faysal
          </button>
        </div>
        <div className="hidden md:flex mx-auto gap-4 items-center">
          <button className="btn btn-outline">
            <Link to="/">Home</Link>
          </button>
          <button className="btn btn-outline">
            <Link to="/whatIDo">About</Link>
          </button>
          <button className="btn btn-outline">
            <Link to="/skills">Skills</Link>
          </button>
          <button className="btn btn-outline">
            <Link to="/contact">Contact</Link>
          </button>
        </div>
        <div className="md:flex items-center gap-4 hidden ml-auto">
          <button className="btn btn-outline">
            <Link>Download Resume</Link>
          </button>
          <button className=" btn btn-outline" onClick={toggleDarkMode}>
            {/* {isDarkMode ? "Day Mode" : "Night Mode"} */}

            {isDarkMode ? <BiSolidMoon size={24} /> : <BsSun size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <button className="btn btn-outline">
            <Link to="/">Home</Link>
          </button>
          <button className="btn btn-outline">
            <Link to="/whatIDo">About</Link>
          </button>
          <button className="btn btn-outline">
            <Link to="/skills">Skills</Link>
          </button>
          <button className="btn btn-outline">
            <Link to="/contact">Contact</Link>
          </button>
          <button className="btn btn-outline">
            <Link to="/">Download Resume</Link>
          </button>
          <button className="hidden btn btn-outline " onClick={toggleDarkMode}>
            {/* {isDarkMode ? "Day Mode" : "Night Mode"} */}
            {isDarkMode ? <BiSolidMoon size={24} /> : <BsSun size={24} />}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
