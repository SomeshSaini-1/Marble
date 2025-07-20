import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TextSlideshow = ({textArray}) => {
 

  // State to track the current text index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to change text every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [textArray.length]);

  return (
    <div>
      <motion.div
        key={currentIndex} // Unique key to trigger animation on text change
        initial={{ opacity: 0, x: 50 }} // Start off-screen to the right
        animate={{ opacity: 1, x: 0 }} // Slide in to center
        exit={{ opacity: 0, x: -50 }} // Slide out to the left
        transition={{ duration: 0.8 }} // Animation duration
        className="slideshow"
      >
        {textArray[currentIndex]}
      </motion.div>
    </div>
  );
};

export default TextSlideshow;