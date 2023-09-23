import React, { useState, useEffect } from 'react';
import './TajMahalSlideshow.css'; // Import the CSS file

// Define an array of Taj Mahal image URLs
const tajMahalImages = [
  'Tajmahal.jpg',
  '../images/Tajmahal2.jpg',
  '/Tajmahal3.jpg',
  // Add more image URLs as needed
];

const TajMahalSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  /*useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tajMahalImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);*/

  return (
    <div className="taj-mahal-slideshow">
      <img src={tajMahalImages[currentIndex]} alt={`Taj Mahal ${currentIndex + 1}`} />
    </div>
  );
};

export default TajMahalSlideshow;
