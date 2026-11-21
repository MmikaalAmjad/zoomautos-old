"use client";

import React from "react";
import "./reviewform.css";

const MoveReviewForm: React.FC = () => {
  return (
    <div className="review-form" style={{ textAlign: "center" }}>
      <h2 style={{ color: "#01103b" }}>Share Your Experience</h2>
      <p style={{ color: "#333", marginBottom: "1.5rem" }}>
        We'd love to hear from you! Send us your review by email and we'll feature it on our site.
      </p>
      <a
        href="mailto:noreply@zoomautos.co.uk?subject=My Review for Zoom Autos"
        className="contact-button"
        style={{ display: "inline-block", textDecoration: "none" }}
      >
        Email Us Your Review
      </a>
    </div>
  );
};

export default MoveReviewForm;
