import React from 'react';
import logo from '../assets/logo.png'; 
import { FaUser, FaChartBar, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa'; 

const Header = () => {
  return (
    <div className="w-full bg-purple-50 h-auto lg:h-32 flex justify-center items-center shadow-md">
      <header className="w-full max-w-screen-xl px-4 md:px-8 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">

        {/* Logo Section */}
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Zone360 Logo" className="w-16 h-16 object-contain" />
          <span className="text-purple-800 font-extrabold text-2xl">DI-ZONE360</span>
        </a>

        {/* Search Bar Section */}
        <div className="flex flex-col items-start w-full lg:w-3/5 xl:w-1/2"> {/* Changed items-center to items-start */}
          <div className="flex items-center w-full">
            <input
              type="text"
              placeholder="Search for Power Banks"
              className="w-4/5 px-4 py-2 border border-purple-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700"
            />
            <button className="bg-purple-600 px-4 py-2 rounded-r-md text-white hover:bg-purple-700 transition-all duration-300">
              <FaSearch />
            </button>
          </div>

          {/* Clickable Text Links */}
          <div className="mt-2 text-sm flex flex-wrap items-center gap-1"> {/* Removed justify-start */}
            {["Smart watch", "Phone Accessories", "Speakers & Sub", "Earbuds", "Back covers"].map((item, index, arr) => (
              <React.Fragment key={index}>
                <a
                  href="#"
                  className="text-purple-700 hover:underline transition-all duration-200"
                >
                  {item}
                </a>
                {/* Add separator except for the last item */}
                {index < arr.length - 1 && <span className="text-purple-500 mx-1">|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Icons Section */}
        <div className="flex items-center gap-6">
          <a href="#" className="flex flex-col items-center"> {/* Sign In button */}
            <IconWithLabel icon={<FaUser />} label="Sign In" />
          </a>
          <a href="#" className="flex flex-col items-center"> {/* Comparison button */}
            <IconWithLabel icon={<FaChartBar />} label="Comparison" />
          </a>
          <a href="#" className="flex flex-col items-center"> {/* Favorites button */}
            <IconWithLabel icon={<FaHeart />} label="Favorites" />
          </a>
          <a href="#" className="flex flex-col items-center"> {/* My Cart button */}
            <IconWithLabel icon={<FaShoppingCart />} label="My Cart" />
          </a>
        </div>

      </header>
    </div>
  );
};

// Reusable Component for Icon + Label
const IconWithLabel = ({ icon, label }) => (
  <div className="flex flex-col items-center">
    <div className="text-purple-600 hover:text-purple-800 transition-colors duration-300">
      {icon}
    </div>
    <span className="text-sm text-purple-700">{label}</span>
  </div>
);

export default Header;
