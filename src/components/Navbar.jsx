import React, { useState, useEffect } from "react";
import Logo from "../assets/Logo.png"
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbarColor, setNavbarColor] = useState("bg-transparent");

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 50) {
        setNavbarColor("bg-slate-700 shadow-lg");
      } else {
        setNavbarColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", changeNavbarColor);
    return () => window.removeEventListener("scroll", changeNavbarColor);
}, []);

  return (
    <nav className={`${navbarColor} text-white fixed w-full top-0 z-10 transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/">
        <img src={Logo} className="py-5 w-44" alt="logo"/> 

            </a>
          </div>
          <div className="hidden md:flex space-x-10">
            <HashLink smooth to="#home" className="hover:text-sky-500 font-semibold text-lg" onClick={handleClose}>Home</HashLink>
            <HashLink smooth to="#about" className="hover:text-sky-500 font-semibold text-lg" onClick={handleClose}>About</HashLink>
            <HashLink smooth to="#skills" className="hover:text-sky-500 font-semibold text-lg" onClick={handleClose}>Skills</HashLink>
            <HashLink smooth to="#portfolio" className="hover:text-sky-500 font-semibold text-lg" onClick={handleClose}>Portfolio </HashLink>
            <HashLink smooth to="#contact" className="hover:text-sky-500 font-semibold text-lg" onClick={handleClose}>Contact Us</HashLink>
          </div>
          <div className="md:hidden">
            <button
              onClick={handleToggle}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isOpen && (
        <div className="mobile-menu md:hidden  bg-gray-800 px-2 pb-52 space-y-1">
          <HashLink smooth to="#home" className="block text-gray-300 hover:text-white" onClick={handleClose}>
            Home
          </HashLink>
          <HashLink smooth to="#about" className="block text-gray-300 hover:text-white" onClick={handleClose}>
            About
          </HashLink>
          <HashLink smooth to="#portfolio" className="block text-gray-300 hover:text-white" onClick={handleClose}>
            Portfolio
          </HashLink>
          <HashLink smooth to="#contact" className="block text-gray-300 hover:text-white" onClick={handleClose}>
            Contact Us
          </HashLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;









