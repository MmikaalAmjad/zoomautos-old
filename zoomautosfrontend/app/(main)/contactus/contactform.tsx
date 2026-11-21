"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [formdata, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formdata, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact Enquiry from ${formdata.name}`);
    const body = encodeURIComponent(
      `Name: ${formdata.name}\nPhone: ${formdata.phone}\nEmail: ${formdata.email}\n\nMessage:\n${formdata.message}`
    );
    window.location.href = `mailto:noreply@zoomautos.co.uk?subject=${subject}&body=${body}`;
  };

  return (
    <div className="formss">
      <h2>Send a Message</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={formdata.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Your Contact Number"
          name="phone"
          value={formdata.phone}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={formdata.email}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Message"
          name="message"
          value={formdata.message}
          onChange={handleChange}
          required
        />
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
}
