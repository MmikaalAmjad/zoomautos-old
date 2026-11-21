"use client";
import React from "react";
import Link from "next/link";
import { IoCall } from "react-icons/io5";

const address = "Spaces, The Porter Building, 1 Brunel Way, Slough, SL1 1FQ";
const locationUrl = "https://maps.google.com/?q=The+Porter+Building,+1+Brunel+Way,+Slough,+SL1+1FQ";
const contactNo = "0333 335 6969";
const email = "noreply@zoomautos.co.uk";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/" className="link">Home</Link></li>
            <li><Link href="/becomeadriver" className="link">Drive For Us</Link></li>
            <li><Link href="/services" className="link">Our Services</Link></li>
            <li><Link href="/contactus" className="link">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>
            Address:{" "}
            <a href={locationUrl} target="_blank" rel="noopener noreferrer" className="link">
              {address}
            </a>
          </p>
          <p>
            Phone: <a href={`tel:${contactNo}`} className="link">{contactNo}</a>
          </p>
        </div>

        <div className="footer-section">
          <h4>Call Us</h4>
          <div className="social-icons">
            <a href={`tel:${contactNo}`} aria-label="Call Us">
              <IoCall />
            </a>
          </div>
          <h4>Email Us</h4>
          <p>
            <a href={`mailto:${email}`} className="link">{email}</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zoom Autos. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
