"use client";
import React, { useState } from "react";

export default function GetAQuotePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    pickupLocation: "",
    dropoffLocation: "",
    vehicleReg: "",
    vehicleMake: "",
    serviceType: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Quote Request from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Pickup Location: ${form.pickupLocation}
Drop-off Location: ${form.dropoffLocation}
Vehicle Registration: ${form.vehicleReg}
Vehicle Make/Model: ${form.vehicleMake}
Service Type: ${form.serviceType}
Message: ${form.message}`
    );
    window.location.href = `mailto:noreply@zoomautos.co.uk?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <h1 style={{ marginTop: "120px", textAlign: "center" }}>Get A Quote</h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "2rem" }}>
        Fill in the form below and we'll get back to you with a competitive quote.
      </p>

      <div className="move-container">
        <div className="mve-form">
          <h2>Vehicle Movement Quote</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="07xxx xxxxxx" />
              </div>
              <div className="form-group">
                <label>Service Type</label>
                <select name="serviceType" value={form.serviceType} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  <option value="Driven Vehicle Movement">Driven Vehicle Movement</option>
                  <option value="Transported Vehicle Movement">Transported Vehicle Movement</option>
                  <option value="Vehicle Recovery">Vehicle Recovery</option>
                  <option value="Fleet Logistics">Fleet Logistics</option>
                  <option value="Auction Collection/Delivery">Auction Collection/Delivery</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Pickup Location</label>
                <input type="text" name="pickupLocation" value={form.pickupLocation} onChange={handleChange} required placeholder="Town, city or postcode" />
              </div>
              <div className="form-group">
                <label>Drop-off Location</label>
                <input type="text" name="dropoffLocation" value={form.dropoffLocation} onChange={handleChange} required placeholder="Town, city or postcode" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Vehicle Registration</label>
                <input type="text" name="vehicleReg" value={form.vehicleReg} onChange={handleChange} placeholder="e.g. AB12 CDE" />
              </div>
              <div className="form-group">
                <label>Vehicle Make &amp; Model</label>
                <input type="text" name="vehicleMake" value={form.vehicleMake} onChange={handleChange} placeholder="e.g. Ford Focus" />
              </div>
            </div>

            <div className="form-group">
              <label>Additional Information</label>
              <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Any extra details about your request..." />
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
              <button type="submit" className="contact-button">
                Request Quote
              </button>
            </div>
          </form>

          <p style={{ textAlign: "center", marginTop: "1.5rem", color: "#555" }}>
            Prefer to call? <a href="tel:03333356969" style={{ color: "#e80f17", fontWeight: "bold" }}>0333 335 6969</a>
          </p>
        </div>
      </div>
    </>
  );
}
