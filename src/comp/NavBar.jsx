import React from 'react';
import { FaTh } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="w-full bg-purple-50 h-auto lg:h-16 flex justify-center items-center">
      <nav className="w-full max-w-screen-xl px-4 md:px-8 flex flex-col lg:flex-row justify-between items-center lg:justify-start gap-4 lg:gap-0">
        
        {/* All Departments Section */}
        <div className="flex items-center bg-white px-4 py-2 rounded-md shadow-sm border border-purple-300 cursor-pointer lg:mr-6">
          <FaTh className="text-purple-700 mr-2" />
          <span className="text-black-800 font-medium">All Departments</span>
          <span className="ml-1 text-gray-500">&#9662;</span> {/* Down arrow */}
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 lg:gap-6">
          {["Home", "Shop", "Daily Specials", "About Us", "Contact Us"].map((item, index) => (
            <a 
              key={index} 
              href="#" 
              className="text-black-800 hover:text-purple-600 transition-colors duration-200 font-medium"
            >
              {item}
            </a>
          ))}
        </div>
        
        {/* Sale Button */}
        <button 
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-900 ml-auto"
          onClick={() => alert('Navigating to Sale Page')} 
        >
          Sale! 30% OFF!
        </button>
        
      </nav>
    </div>
  );
};

export default Navbar;
