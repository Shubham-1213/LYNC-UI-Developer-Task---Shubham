import React from "react";
import Slider from "react-slick";
import "../styles/components/_reviewCarousal.scss"; // Keep the necessary styles
import "slick-carousel/slick/slick.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "slick-carousel/slick/slick-theme.css";

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

const NextArrow = ({ onClick }) => (
  <button className="custom-arrow next-arrow" onClick={onClick}>
    <ChevronRight size={24} color="white"/>
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button className="custom-arrow prev-arrow" onClick={onClick}>
    <ChevronLeft size={24} color="white"/>
  </button>
);

const ReviewCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="custom-carousel">
      <Slider {...settings}>
        {carouselDataReview.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="border-wrapper">
              <div className="content">
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
      </Slider>
    </div>
  );
};

export default ReviewCarousel;
