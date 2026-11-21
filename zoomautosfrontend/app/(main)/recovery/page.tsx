"use client";
import React, { useState } from "react";

export default function RecoveryPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    vehicleReg: "",
    vehicleMake: "",
    issue: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Vehicle Recovery Request from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Current Location: ${form.location}
Vehicle Registration: ${form.vehicleReg}
Vehicle Make/Model: ${form.vehicleMake}
Issue Description: ${form.issue}`
    );
    window.location.href = `mailto:noreply@zoomautos.co.uk?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <h1 style={{ marginTop: "120px", textAlign: "center" }}>Vehicle Recovery</h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "1rem" }}>
        Broken down or had an accident? We're here 24/7 across the UK.
      </p>

      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <a
          href="tel:03333356969"
          style={{
            display: "inline-block",
            background: "#e80f17",
            color: "white",
            padding: "1rem 2rem",
            borderRadius: "8px",
            fontSize: "1.3rem",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          📞 Call Now: 0333 335 6969
        </a>
        <p style={{ marginTop: "0.75rem", color: "#555" }}>For immediate recovery assistance, call us directly.</p>
      </div>

      <div className="move-container">
        <div className="mve-form">
          <h2>Request Recovery Online</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="07xxx xxxxxx" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              </div>
              <div className="form-group">
                <label>Current Location</label>
                <input type="text" name="location" value={form.location} onChange={handleChange} required placeholder="Postcode or nearest landmark" />
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
              <label>Describe the Issue</label>
              <textarea name="issue" value={form.issue} onChange={handleChange} rows={4} required placeholder="e.g. broken down on the M25, engine won't start..." />
            </div>

            <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
              <button type="submit" className="contact-button">
                Submit Recovery Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
