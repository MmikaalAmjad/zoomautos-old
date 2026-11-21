"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider, { Settings } from "react-slick";

const logos = [
  "/1.png",
  "/22.png",
  "/Logo.png",
  "/Logo192.png",
  "/Logo4.png",
];

const LogoSlideshow: React.FC = () => {
  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 6000,
    slidesToShow: Math.min(logos.length, 5),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 576, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div style={{ width: "80%", margin: "0 auto", textAlign: "center" }}>
      <h2 style={{ marginBottom: "10px" }} className="about-us-title">
        Our Clients
      </h2>
      <Slider {...sliderSettings}>
        {logos.map((img, index) => (
          <div key={index} className="slide">
            <img
              src={img}
              alt={`Client logo ${index + 1}`}
              style={{ width: "100%", height: "120px", objectFit: "contain" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlideshow;
