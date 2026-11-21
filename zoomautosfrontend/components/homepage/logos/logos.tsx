"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider, { Settings } from "react-slick";

const logos = [
  "/client-autogroup.svg",
  "/client-driveuk.svg",
  "/client-motorfleet.svg",
  "/client-elitecar.svg",
  "/client-rapidlogistics.svg",
  "/client-premiumdealers.svg",
  "/client-britishauto.svg",
  "/Logo4.png",
  "/Logo.png",
];

const LogoSlideshow: React.FC = () => {
  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 4000,
    slidesToShow: Math.min(logos.length, 5),
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
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
              style={{ width: "100%", height: "80px", objectFit: "contain", padding: "0 10px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LogoSlideshow;
