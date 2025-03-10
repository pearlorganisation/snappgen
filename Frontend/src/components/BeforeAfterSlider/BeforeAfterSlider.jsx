import React, { useState } from "react";
import "./styles.css"; // Import your CSS file
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {LazyLoadImage} from 'react-lazy-load-image-component'

const BeforeAfterSlider = ({ img1, img2 }) => {
  const [position, setPosition] = useState(50);

  const handleInputChange = (e) => {
    setPosition(e.target.value);
  };

  return (
    <>
      <div
        className="beforeAfterContainer"
        style={{ "--position": `${position}%` }}
      >
        <div className="image-container">
          <LazyLoadImage 
            className="image-before slider-image"
            src={img1}
            alt="color photo"
            width={300}
            height={300}
          />
          <LazyLoadImage 
            className="image-after slider-image"
            src={img2}
            alt="black and white"
            width={300}
            height={300}

          />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={position}
          aria-label="Percentage of before photo shown"
          className="slider"
          onChange={handleInputChange}
        />
        <div className="slider-line" aria-hidden="true"></div>
        <div className="slider-button" aria-hidden="true">
          <MdKeyboardArrowLeft size={24} />
          <MdKeyboardArrowRight size={24} />
        </div>
      </div>
    </>
  );
};

export default BeforeAfterSlider;
