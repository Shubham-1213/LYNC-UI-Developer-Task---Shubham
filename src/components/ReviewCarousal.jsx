import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/components/_reviewCarousal.scss";

const carouselDataReview = [
  {
    title: "Alex George",
    description:
      "Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!",
    designation: "CEO, Polygon",
  },
  {
    title: "George Alex ",
    description:
      "Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!",
    designation: "CEO, Polygon",
  },
  {
    title: "Alex Russel",
    description:
      "Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!",
    designation: "CEO, Polygon",
  },
  {
    title: "Russel Alex",
    description:
      "Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!",
    designation: "CEO, Polygon",
  },
  {
    title: "Alex Albon",
    description:
      "Absolutely blown away by the capabilities of this company's Web3 gaming SDK! Integrating it into my project was seamless, and the innovative tools provided took my game to the next level. The support team was incredibly responsive and helpful throughout the process. Highly recommended!",
    designation: "CEO, Polygon",
  },
];

const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(""); // Keep track of direction
  const visibleSlides = 3;
  const totalSlides = carouselDataReview.length;

  const handleNext = () => {
    setSlideDirection("next");
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handlePrev = () => {
    setSlideDirection("prev");
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getVisibleData = () => {
    const visibleData = [];
    for (let i = 0; i < visibleSlides; i++) {
      visibleData.push(carouselDataReview[(currentSlide + i) % totalSlides]);
    }
    return visibleData;
  };

  const visibleData = getVisibleData();

  return (
    <div className="custom-carousel">
      <div className="carousel-wrapper">
        <button
          type="button"
          onClick={handlePrev}
          className="control-arrow control-prev"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="carousel-content-wrapper">
          <div className="carousel-content">
            {visibleData.map((slide, index) => (
              <div
                key={index}
                className={`carousel-slide ${slideDirection}`} // Apply animation class here
              >
                <div className="border-wrapper">
                  {" "}
                  {/* Wrapper for the gradient border */}
                  <div className="content">
                    {" "}
                    {/* Inner content */}
                    <div className="description-carousal">{slide.description}</div>
                    <div className="designation">
                      <div className="logo">
                        <svg
                          width="32"
                          height="32"
                          viewBox="0 0 32 32"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="16" cy="16" r="16" fill="#D9D9D9" />
                        </svg>
                      </div>
                      <div className="content-review"> 
                        <div>{slide.title}</div>
                        <div>{slide.designation}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={handleNext}
          className="control-arrow control-next"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default CustomCarousel;
