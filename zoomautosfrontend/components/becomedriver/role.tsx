"use client"
import React from 'react';
import { FaQuestion } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";

const roles = [
  "Collect and deliver cars and vans throughout Great Britain (Monday to Sunday).",
  "Use mobile apps for planning, inspections, and expenses — no fiddly paperwork!",
  "Provide exceptional customer service by being polite, friendly, and wearing the provided uniform.",
  "Expenses: Prepaid debit card for all public transport costs.",
  "Benefits: Fuel card, trade plates, insurance, and breakdown cover provided.",
  "Flexibility: Work from home, with your vehicle parked on your driveway (dropped kerb required).",
];

const responsibilities = [
  "Must be over 25 years old.",
  "Must possess a full UK driving licence (not automatic only).",
  "Must have at least three years of driving experience.",
  "Must have no more than 6 points on your licence.",
  "No bans from driving within the past 5 years.",
  "Offence codes such as IN, MS, CD, DR, DG (or similar) from the past 5–10 years must be disclosed.",
];

const SelfEmployedDriver = () => {
  return (
    <section className="about-us-container">
      <section className="about-us">
        <div className="about-us-content">
          <div className="about-us-text">
            <h2 className='about-us-title'>Self-Employed Trade Plate Driver</h2>
            <p className="about-us-paragraph">
              <div className='specparapgraphcontainer'>
                <p className='specialparagraph'>Is driving your passion?</p>
                <p className='specialparagraph'>Would you love a job where every day is different?</p>
                <p className='specialparagraph'>Do you enjoy driving a variety of cars?</p>
                <p className='specialparagraph'>Do you like making the most of your day while traveling?</p>
                <p className='specialparagraph'>Do you enjoy meeting people across the country?</p>
              </div>
            </p>
          </div>
          <FaQuestion size={240} color="#01103b" style={{ opacity: 0.8, transform: "rotate(24deg)" }} />
        </div>

        <section className="what-we-do">
          <div className='flex-containerRole'>
            <h2 className="what-we-do-title">The Role</h2>
            <div className="what-we-do-content">
              <div className="requirementcontainer">
                {roles.map((role, index) => (
                  <p key={index} className="specialparagraph3">{role}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="about-us-content">
          <GrAnnounce size={240} color="#01103b" style={{ opacity: 0.8, transform: "rotate(-24deg)" }} />
          <div className="about-us-text">
            <h2 className='Requirement-title'>Requirements</h2>
            <div className="what-we-do-content">
              <p className="about-us-paragraph">
                <div className='requirementcontainer'>
                  {responsibilities.map((respon, index) => (
                    <h1 key={index} className="specialparagraphtwo">{respon}</h1>
                  ))}
                </div>
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default SelfEmployedDriver;
