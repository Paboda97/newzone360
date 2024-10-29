import React from 'react';
import Banner1 from '../assets/Banner-1.jpg';
import Banner2 from '../assets/Banner-2.png';
import Banner3 from '../assets/Banner-3.jpeg';
import Banner4 from '../assets/Banner-4.jpeg';
import { FaTruck, FaShieldAlt, FaCreditCard } from 'react-icons/fa';

const PopularCategories = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-8">Popular Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Card 1: Smart Watch */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 text-center">
          <img src={Banner1} alt="Smart Watch" className="w-full h-40 object-contain mx-auto" />
          <h3 className="mt-4 text-lg font-semibold">SMART WATCH</h3>
          <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-800">
            SHOP NOW
          </button>
        </div>

        {/* Card 2: Phone Accessories */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 text-center">
          <img src={Banner2} alt="Phone Accessories" className="w-full h-40 object-contain mx-auto" />
          <h3 className="mt-4 text-lg font-semibold">PHONE ACCESSORIES</h3>
          <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-800">
            SHOP NOW
          </button>
        </div>

        {/* Card 3: Speakers & Sub */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 text-center">
          <img src={Banner3} alt="Speakers & Sub" className="w-full h-40 object-contain mx-auto" />
          <h3 className="mt-4 text-lg font-semibold">SPEAKERS & SUB</h3>
          <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-800">
            SHOP NOW
          </button>
        </div>

        {/* Card 4: Earbuds */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 text-center">
          <img src={Banner4} alt="Earbuds" className="w-full h-40 object-contain mx-auto" />
          <h3 className="mt-4 text-lg font-semibold">EARBUDS</h3>
          <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-800">
            SHOP NOW
          </button>
        </div>

         {/* Card 5: back covers */}
         <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 text-center">
          <img src={Banner1} alt="back covers" className="w-full h-40 object-contain mx-auto" />
          <h3 className="mt-4 text-lg font-semibold">BACK COVERS</h3>
          <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-800">
            SHOP NOW
          </button>
        </div>

        {/* Card 6: Power Banks */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 text-center">
          <img src={Banner2} alt="Power Banks" className="w-full h-40 object-contain mx-auto" />
          <h3 className="mt-4 text-lg font-semibold">POWER BANKS</h3>
          <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-800">
            SHOP NOW
          </button>
        </div>

        {/* Card 7: Travel Accessories */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 text-center">
          <img src={Banner3} alt="Travel Accessories" className="w-full h-40 object-contain mx-auto" />
          <h3 className="mt-4 text-lg font-semibold">TRAVEL ACCESSORIES</h3>
          <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-800">
            SHOP NOW
          </button>
        </div>

        {/* Card 8: Office Gadgets */}
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4 text-center">
          <img src={Banner4} alt="Office Gadgets" className="w-full h-40 object-contain mx-auto" />
          <h3 className="mt-4 text-lg font-semibold">OFFICE GADGETS</h3>
          <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-800">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCategories;
