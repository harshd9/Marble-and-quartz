import React, { useState, useEffect } from 'react';
import './GoaSlideshow.css'; // Import the CSS file

// Define an array of Goa image URLs
const goaImages = [
  'goa-image1.jpg',
  'goa-image2.jpg',
  'goa-image3.jpg',
  // Add more image URLs as needed
];

const GoaSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % goaImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="goa-slideshow">
      <img src={goaImages[currentIndex]} alt={`Goa ${currentIndex + 1}`} />
    </div>
  );
};

export default GoaSlideshow;
