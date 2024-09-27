import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "../styles/components/_carousal.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import carousalImage from "../assets/carousal.png";

const carouselData = [
  {
    title:
      "LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮",
    description:
      "LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC's SDK and infrastructure.",
  },
  {
    title:
      "LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮",
    description:
      "LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC's SDK and infrastructure.",
  },
  {
    title:
      "LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮",
    description:
      "LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC's SDK and infrastructure.",
  },
  {
    title:
      "LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮",
    description:
      "LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC's SDK and infrastructure.",
  },
  {
    title:
      "LYNC teamed up with Astar Network to effortlessly bring the next billion gamers into Web3 🎮",
    description:
      "LYNC joins forces with Astar Network to allow game developers and studios to launch games in just a few minutes using LYNC's SDK and infrastructure.",
  },
];

// Custom Arrow components
const NextArrow = ({ onClick }) => (
  <button
    type="button"
    className="control-arrow control-next"
    onClick={onClick}
  >
    <ChevronRight size={24} color="white" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    className="control-arrow control-prev"
    onClick={onClick}
  >
    <ChevronLeft size={24} color="white" />
  </button>
);

const CustomCarousel = () => {
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
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="custom-carousel">
      <Slider {...settings}>
        {carouselData.map((slide, index) => (
          <div key={index} className="carousel-slide">
            <div className="border-wrapper">
              <div className="content">
                <img
                  src={carousalImage}
                  alt="LYNC x ASTAR"
                  className="carousel-image"
                />
                <div className="text-content">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                  <button className="read-more">Read more</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CustomCarousel;
