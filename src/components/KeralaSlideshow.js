import React, { useState, useEffect } from 'react';
import './KeralaSlideshow.css'; // Import the CSS file

// Define an array of Kerala image URLs
const keralaImages = [
  'kerala-image1.jpg',
  'kerala-image2.jpg',
  'kerala-image3.jpg',
  // Add more image URLs as needed
];

const KeralaSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % keralaImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="kerala-slideshow">
      <img src={keralaImages[currentIndex]} alt={`Kerala ${currentIndex + 1}`} />
    </div>
  );
};

export default KeralaSlideshow;
