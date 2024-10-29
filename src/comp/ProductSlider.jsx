import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import iPhoneImage1 from '../assets/slider1.jpeg';
import iPhoneImage2 from '../assets/slider2.jpeg';

const ProductSlider = () => {
  const slides = [
    {
      image: iPhoneImage1,
      title: 'iPhone 15 Pro Max',
      subtitle: 'Titanium. So Strong. So Light. So Pro.',
      description: 'New Camera. New Design.',
    },
    {
      image: iPhoneImage2,
      title: 'Freedom with AirPods',
      subtitle: 'Unleash Wireless Sound Freedom.',
      description: 'Experience Sound',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto h-[300px] overflow-hidden rounded-lg">
      {/* Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-600 to-transparent opacity-75"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        {/* Left Arrow */}
        <button onClick={prevSlide} className="absolute left-4 text-gray-300 hover:text-white text-2xl">
          <FaArrowLeft />
        </button>

        {/* Text and Button Section */}
        <div className="flex flex-col items-center text-center space-y-4 text-white px-4">
          <p className="text-lg font-semibold">{slides[currentIndex].description}</p>
          <h2 className="text-3xl md:text-5xl font-bold">{slides[currentIndex].title}</h2>
          <p className="text-lg text-gray-300">{slides[currentIndex].subtitle}</p>
          <button className="mt-4 bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-800 transition">
            Discover
          </button>
        </div>

        {/* Right Arrow */}
        <button onClick={nextSlide} className="absolute right-4 text-gray-300 hover:text-white text-2xl">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ProductSlider;
