// src/App.jsx
import React from 'react';
import Header from './comp/Header.jsx';
import Navbar from './comp/Navbar.jsx';
import Bodyone from './comp/Bodyone.jsx';
import PopularCategories from './comp/PopularCategories.jsx';
import ProductSlider from './comp/ProductSlider.jsx';
import Advantages from './comp/Advantages.jsx';
import Footer from './comp/Footer.jsx';

const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header />
      <Navbar />
      <Bodyone />
      <PopularCategories />
      <ProductSlider />
      <Advantages />
      <Footer />
    </div>
  );
};

export default App;
