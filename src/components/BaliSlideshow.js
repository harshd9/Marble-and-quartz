import React, { useState, useEffect } from 'react';
import './BaliSlideshow.css'; // Import the CSS file

// Define an array of Bali image URLs
const baliImages = [
  'bali-image1.jpg',
  'bali-image2.jpg',
  'bali-image3.jpg',
  // Add more image URLs as needed
];

const BaliSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % baliImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="bali-slideshow">
      <img src={baliImages[currentIndex]} alt={`Bali ${currentIndex + 1}`} />
    </div>
  );
};

export default BaliSlideshow;
