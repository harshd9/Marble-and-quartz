import React, { useState, useEffect } from 'react';
import './ThailandSlideshow.css'; // Import the CSS file

// Define an array of Thailand image URLs
const thailandImages = [
  'thailand-image1.jpg',
  'thailand-image2.jpg',
  'thailand-image3.jpg',
  // Add more image URLs as needed
];

const ThailandSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % thailandImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="thailand-slideshow">
      <img src={thailandImages[currentIndex]} alt={`Thailand ${currentIndex + 1}`} />
    </div>
  );
};

export default ThailandSlideshow;
