import React, { useState, useEffect } from 'react';
import './VietnamSlideshow.css'; // Import the CSS file

// Define an array of Vietnam image URLs
const vietnamImages = [
  'vietnam-image1.jpg',
  'vietnam-image2.jpg',
  'vietnam-image3.jpg',
  // Add more image URLs as needed
];

const VietnamSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % vietnamImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="vietnam-slideshow">
      <img src={vietnamImages[currentIndex]} alt={`Vietnam ${currentIndex + 1}`} />
    </div>
  );
};

export default VietnamSlideshow;
