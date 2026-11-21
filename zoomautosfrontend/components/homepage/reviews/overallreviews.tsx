"use client"
import React from 'react';
import { Typography } from '@mui/material';
import './Reviews.css';
import Slider from 'react-slick';

const staticReviews = [
  {
    Name: "James H.",
    rating: 5,
    feedback: "Absolutely brilliant service from start to finish. My car was collected and delivered exactly on time, and the driver was professional and courteous throughout. Highly recommend Zoom Autos to anyone needing vehicle transport.",
  },
  {
    Name: "Sarah M.",
    rating: 5,
    feedback: "Used Zoom Autos for a dealer-to-dealer transfer and I couldn't be happier. The whole process was seamless, communication was excellent, and the vehicle arrived in perfect condition. Will definitely use again.",
  },
  {
    Name: "David R.",
    rating: 5,
    feedback: "Had my car recovered after a breakdown on the motorway. The response time was incredibly fast and the recovery driver was extremely helpful and reassuring. Great company — 5 stars without hesitation.",
  },
  {
    Name: "Emily T.",
    rating: 5,
    feedback: "Zoom Autos handled the transport of three vehicles for our dealership fleet. Each one arrived on time and in perfect condition. Fantastic logistics company — will be using them for all future movements.",
  },
  {
    Name: "Mohammed A.",
    rating: 5,
    feedback: "Very professional and reliable. I needed my car moved urgently and they arranged it the same day. The driver was friendly, kept me updated throughout, and the car arrived safely. Outstanding service.",
  },
];

const MoveRatingWithFeedback = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <>
      <div style={{ marginTop: '50px' }}>
        <h2 className='about-us-title'>Reviews</h2>
      </div>
      <div
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '60vh',
          backgroundImage: `url(${"/Reviewbg.jpg"})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          paddingTop: '40px',
          paddingBottom: '40px',
        }}
      >
        <div className="reviewslider-container">
          <Slider {...settings}>
            {staticReviews.map((review, index) => (
              <div key={index} className="review-tile">
                <div className="review-header">
                  <img
                    src="/Reviewimage.png"
                    alt={`${review.Name}'s avatar`}
                    className="review-avatar"
                  />
                  <Typography variant="body2" className="review-name" style={{ fontWeight: "bold" }}>
                    {review.Name}
                  </Typography>
                </div>
                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                  <Typography variant="body2" style={{ display: "block", fontWeight: "bold", marginTop: "10px" }}>
                    Rating
                  </Typography>
                  <div style={{ display: "block" }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} style={{ color: star <= review.rating ? "#e80f17" : "gray", fontSize: "18px" }}>★</span>
                    ))}
                  </div>
                </div>
                <div className="review-text">
                  <Typography variant="body2">{review.feedback}</Typography>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default MoveRatingWithFeedback;
