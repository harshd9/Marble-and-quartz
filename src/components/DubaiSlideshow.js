import React, { useState, useEffect } from 'react';
import './DubaiSlideshow.css'; // Import the CSS file

// Define an array of Dubai image URLs
const dubaiImages = [
  'dubai-image1.jpg',
  'dubai-image2.jpg',
  'dubai-image3.jpg',
  // Add more image URLs as needed
];

const DubaiSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dubaiImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="dubai-slideshow">
      <img src={dubaiImages[currentIndex]} alt={`Dubai ${currentIndex + 1}`} />
    </div>
  );
};

export default DubaiSlideshow;
