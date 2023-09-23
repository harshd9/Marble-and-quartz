import React, { useState, useEffect } from 'react';
import './MaldivesSlideshow.css'; // Import the CSS file

// Define an array of Maldives image URLs
const maldivesImages = ['/images/Maldives.jpg',
  '../images/Maldives1.jpg',
  '/images/Maldives2.jpg',
  // Add more image URLs as needed
];

const MaldivesSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % maldivesImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="maldives-slideshow">
      <img src={maldivesImages[currentIndex]} alt={`Maldives ${currentIndex + 1}`} />
    </div>
  );
};

export default MaldivesSlideshow;
