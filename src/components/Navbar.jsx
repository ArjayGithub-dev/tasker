import React, { useState } from 'react';
import { globe_icon, tasker, tasker_icon } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* Left side: Logo and NavLinks */}
      <div className="flex items-center space-x-12">
        <img src={tasker} alt="Tasker" className="w-[100px] h-[23px]" />
        <ul className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <li key={link.id} className="font-poppins font-regular text-gray cursor-pointer text-[14px] hover:text-blue">
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right side: Contact Sales, Login, Get Started Button */}
      <div className="hidden md:flex items-center space-x-6">
        {/* Middle: Globe Icon */}
        <div className="hidden lg:flex items-center">
          <img src={globe_icon} alt="Globe" className="w-6 h-6 mr-10" />
        </div>
        <a href="#contact-sales" className="font-poppins font-regular text-gray cursor-pointer text-[14px] hover:text-blue">Contact Sales</a>
        <a href="#login" className="font-poppins font-regular text-gray cursor-pointer text-[14px] hover:text-blue">Login</a>
        <a href="#get-started" className="font-poppins font-regular text-white cursor-pointer text-[14px] bg-blue px-4 py-2 rounded-md border border-blue-600">
          Get Started
        </a>
      </div>

      {/* Hamburger Menu Icon */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {/* Dropdown Menu for smaller screens */}
      {isMenuOpen && (
        <div className="absolute top-16 right-0 justify-center w-full bg-white shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <li key={link.id} className="font-poppins font-regular text-gray cursor-pointer text-[14px] hover:text-blue">
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            <a href="#contact-sales" className="font-poppins font-regular text-gray cursor-pointer text-[14px] hover:text-blue">Contact Sales</a>
            <a href="#login" className="font-poppins font-regular text-gray cursor-pointer text-[14px] hover:text-blue">Login</a>
            <a href="#get-started" className="font-poppins font-regular text-white cursor-pointer text-[14px] bg-blue px-4 py-2 rounded-md border border-blue-600">
              Get Started
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
