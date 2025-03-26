import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  // Detect scroll position and change navbar background color
  useEffect(() => {
    const handleScroll = () => {
      // When scroll position is greater than 50px, set navbar to fixed
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      style={{
        backgroundColor: isFixed ? '#87BCFC' : 'transparent', // Apply color when fixed
        transition: 'background-color 0.3s ease', // Smooth transition for background change
      }} 
      className={`w-full h-20 content-center  fixed top-0 z-50 `}
    >
      <Navbar />
    </header>
  );
};

export default Header;
