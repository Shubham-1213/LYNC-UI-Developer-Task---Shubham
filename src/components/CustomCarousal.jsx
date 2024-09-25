import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import '../styles/components/_carousal.scss';

const carouselData = [
  {
    title: "LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮",
    description: "LYNC joins forces withllow game developers and studios to launch games in just a few minutes using LYNC's SDK and infrastructure.",
  },
  {
    title: "LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮",
    description: "LYNC joins forces with Astar Network to allow game developers and studios to laung LYNC's SDK and infrastructure.",
  },
  {
    title: "LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮",
    description: "LYNC joins forces with Astar Network to allow game developers and studios to launch games  LYNC's SDK and infrastructure.",
  },
  {
    title: "LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮",
    description: "LYNC joins forces with Astar Network to allow game developers and studios to launch games  LYNC's SDK and infrastructure.",
  },
  {
    title: "LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮",
    description: "LYNC joins forces with Astar Network to allow game developers and studios to launch games  LYNC's SDK and infrastructure.",
  },
];

const CustomCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(""); // Keep track of direction
  const visibleSlides = 3;
  const totalSlides = carouselData.length;

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
      visibleData.push(carouselData[(currentSlide + i) % totalSlides]);
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
              <div className="border-wrapper"> {/* Wrapper for the gradient border */}
                <div className="content"> {/* Inner content */}
                  <img
                    src="/src/assets/carousal.png"
                    alt="LYNC x ASTAR"
                    className="carousel-image"
                  />
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                  <button className="read-more">Read more</button>
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