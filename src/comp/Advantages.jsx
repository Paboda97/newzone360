import React from 'react';
import { FaMoneyBillWave, FaShieldAlt, FaTruck, FaCog, FaClock, FaGift, FaBoxOpen, FaTools } from 'react-icons/fa'; // Adjusted icons

const Advantages = () => {
  const items = [
    { icon: <FaMoneyBillWave />, text: 'Fee-Free Installment' },
    { icon: <FaShieldAlt />, text: 'Best Price Guarantee' },
    { icon: <FaGift />, text: 'Bonus Program XStore' },
    { icon: <FaClock />, text: 'Pickup in 15 minutes' },
    { icon: <FaTruck />, text: 'Convenient Delivery' },
    { icon: <FaCog />, text: 'Services and Services' },
    { icon: <FaTruck />, text: 'Express Delivery in 2 Hours' },
    { icon: <FaTools />, text: 'Equipment Acceptance' },
  ];

  return (
    <div className="w-full flex justify-center items-center py-10 bg-white">
      <div className="max-w-screen-xl w-full px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Our Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-gray-100 rounded-md shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="text-purple-600 text-2xl">{item.icon}</div>
              <span className="text-gray-800 font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;
