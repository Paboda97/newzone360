// src/components/Footer.jsx
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        {/* Zone360 Text and Contact Section */}
        <div className="flex flex-col items-start space-y-4 mb-8 md:mb-0">
          <h1 className="text-purple-500 text-3xl font-bold">ZONE360</h1>
          <p>Colombo, Sri Lanka</p>
          <a href="mailto:pabo97sm@gmail.com" className="text-gray-300 hover:text-white">
            pabo97sm@gmail.com
          </a>
          <div className="flex space-x-4 mt-2">
            <FaFacebookF className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaTwitter className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaInstagram className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaYoutube className="text-xl hover:text-gray-400 cursor-pointer" />
            <FaTelegram className="text-xl hover:text-gray-400 cursor-pointer" />
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:w-auto">
          <div>
            <h4 className="font-bold text-gray-300 mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white font-thin">Company Overview</a></li>
              <li><a href="#" className="hover:text-white font-thin">Our Mission & Vision</a></li>
              <li><a href="#" className="hover:text-white font-thin">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-300 mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white font-thin">Tech Gadgets</a></li>
              <li><a href="#" className="hover:text-white font-thin">Day-to-Day Life Gadgets</a></li>
              <li><a href="#" className="hover:text-white font-thin">Home Appliances</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-300 mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white font-thin">Sales Team</a></li>
              <li><a href="#" className="hover:text-white font-thin">Shipping & Delivery</a></li>
              <li><a href="#" className="hover:text-white font-thin">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white font-thin">Warranty Information</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-300 mb-4">My Account</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white font-thin">Login / Register</a></li>
              <li><a href="#" className="hover:text-white font-thin">Order History</a></li>
              <li><a href="#" className="hover:text-white font-thin">Wishlist</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400">
        <p>Copyright © 2024 paboS.</p>
      </div>
    </footer>
  );
};

export default Footer;
