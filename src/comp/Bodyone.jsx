import React from 'react';
import Banner1 from '../assets/Banner-1.jpg';
import Banner2 from '../assets/Banner2.jpg';
import Banner3 from '../assets/Banner-3.jpeg';
import Banner4 from '../assets/Banner-4.jpeg';
import { FaTruck, FaShieldAlt, FaCreditCard } from 'react-icons/fa'; // Monochrome icons

const Bodyone = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Sony Headphone Card */}
      <div className="col-span-2 bg-purple-50 rounded-lg overflow-hidden relative shadow-md">
        <img src={Banner1} alt="Sony 5G Headphone" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 bg-gradient-to-r from-black via-gray-500 to-transparent text-white">
          <h2 className="text-3xl font-bold">Sony 5G Headphone</h2>
          <p className="text-base mt-2">Only Music. Nothing Else.</p>
          <button className="mt-4 bg-purple-800 px-4 py-2 rounded-md text-white hover:bg-purple-900 transition-all duration-300">
            SHOP NOW
          </button>
        </div>
      </div>

      {/* Right Column - Other Products */}
      <div className="grid grid-cols-1 gap-4">
        {/* Air Mavic 3 */}
        <div className="relative bg-purple-100 rounded-lg shadow-md overflow-hidden">
          <img src={Banner2} alt="Air Mavic 3" className="w-full h-32 object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
            <h3 className="text-lg font-semibold">Air Mavic 3</h3>
            <p className="text-sm">As powerful as it is portable</p>
            <a href="#" className="mt-2 inline-block text-white hover:text-gray-300 transition-colors duration-200">
              Shop Now →
            </a>
          </div>
        </div>

        {/* Handheld */}
        <div className="relative bg-purple-100 rounded-lg shadow-md overflow-hidden">
          <img src={Banner3} alt="Handheld USB" className="w-full h-32 object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
            <h3 className="text-lg font-semibold">Handheld</h3>
            <p className="text-sm">USB 3 Rechargeable</p>
            <a href="#" className="mt-2 inline-block text-white hover:text-gray-300 transition-colors duration-200">
              Shop Now →
            </a>
          </div>
        </div>

        {/* Gearbox */}
        <div className="relative bg-purple-100 rounded-lg shadow-md overflow-hidden">
          <img src={Banner4} alt="Gearbox" className="w-full h-32 object-cover" />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-4 bg-gradient-to-t from-black via-transparent to-transparent text-white">
            <h3 className="text-lg font-semibold">Gearbox</h3>
            <p className="text-sm">Up to 30% Discount</p>
            <a href="#" className="mt-2 inline-block text-white hover:text-gray-300 transition-colors duration-200">
              Shop Now →
            </a>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="col-span-3 flex flex-wrap justify-center gap-4 mt-4">
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow-md">
          <FaTruck className="text-black-700" />
          <p className="text-black-800">Free fast express delivery with tracking</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow-md">
          <FaShieldAlt className="text-black-700" />
          <p className="text-black-800">Equipment loss and damage insurance</p>
        </div>
        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-md shadow-md">
          <FaCreditCard className="text-black-700" />
          <p className="text-black-800">Installment without overpayments</p>
        </div>
      </div>
    </div>
  );
};

export default Bodyone;
