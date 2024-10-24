import React from 'react'
import Header from './comp/Header.jsx';
import Navbar from './comp/Navbar.jsx';
import Bodyone from './comp/Bodyone.jsx';

const App = () => {
  return (
    <div className='overflow-x-hidden'> 
      <Header />
      <Navbar /> 
      <Bodyone />
    </div>
  )
}

export default App;


